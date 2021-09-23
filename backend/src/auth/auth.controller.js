const CustomError = require('../../exeptions/customError');
const userNormalizer = require('../../utils/userNormalizer');
const authService = require('./auth.service');
const userService = require('../users/user.service');
const { code, message, customErrors, userConstants: { USER_AVATAR }, authConst } = require('../../consts');

const authController = {
    createNewUser: async (req, res, next) => {
        try {
            const applicantData = req.body;

            const hashedPassword = await authService.hashPassword(applicantData.password);

            let newUser = await authService.addNewUser({
                ...applicantData,
                password: hashedPassword
            });

            if (req.files && req.files[USER_AVATAR]) {
                const { _id } = newUser;
                const uploadFile = await authService.uploadImageToAWS(req.files[USER_AVATAR], USER_AVATAR, _id);

                newUser = await userService.updateUser(_id, { [USER_AVATAR]: uploadFile.Location }, true);
            }

            const normalizedUser = userNormalizer(newUser);

            const tokenPair = await authService.generateTokenPair(normalizedUser);

            await authService.addNewTokenPair(tokenPair, newUser._id);

            res.json({ ...tokenPair });

        } catch (e) {
            next(e);
        }
    },

    createNewAdmin: async (req, res, next) => {
        try {
            const { newAdmin } = req;

            const user = await authService.checkEmail(newAdmin.email);

            if (user) throw new CustomError(code.CONFLICT, message.EMAIL_EXISTS);

            const hashedPassword = await authService.hashPassword(newAdmin.password);

            const newUser = await authService.addNewUser({
                ...newAdmin,
                password: hashedPassword
            });

            const normalizedUser = userNormalizer(newUser);

            res.json({ user: normalizedUser });

        } catch (e) {
            next(e);
        }
    },

    logIn: async (req, res, next) => {
        try {
            const { currentUser, body: { password } } = req;

            const isPasswordCorrect = await authService.comparePasswords(password, currentUser.password);

            if (!isPasswordCorrect) {
                throw new CustomError(customErrors.WRONG_USER_PASSWORD.code,
                    customErrors.WRONG_USER_PASSWORD.message,
                    customErrors.WRONG_USER_PASSWORD.customCode);
            }

            const normalizedUser = userNormalizer(currentUser);

            const tokenPair = await authService.generateTokenPair(normalizedUser);

            await authService.addNewTokenPair(tokenPair, currentUser._id);

            res.json({ ...tokenPair });

        } catch (e) {
            next(e);
        }
    },

    logOut: async (req, res, next) => {
        try {
            const token = req.get(authConst.AUTHORIZATION);

            const deletedToken = await authService.deleteToken({ accessToken: token });

            if (!deletedToken) throw new CustomError(code.NOT_FOUND, message.NO_TOKEN);

            res.json({ message: message.TOKEN_DELETED });

        } catch (e) {
            next(e);
        }
    },

    refreshTokens: async (req, res, next) => {
        try {
            const refreshToken = req.get(authConst.AUTHORIZATION);
            const { currentUser } = req;

            const normalizedUser = userNormalizer(currentUser);

            const tokenPair = authService.generateTokenPair({ ...normalizedUser });

            await authService.refreshTokenPair({ refreshToken }, tokenPair);

            res.json({ ...tokenPair });

        } catch (e) {
            next(e);
        }
    },

    logOutFromAllDevices: async (req, res, next) => {
        try {
            const { currentUser } = req;

            const deletedTokens = await authService.deleteAllTokens({ USER: currentUser._id });

            if (!deletedTokens) throw new CustomError(code.NOT_FOUND, message.NO_TOKEN);

            res.json({ message: message.TOKENS_DELETED });

        } catch (e) {
            next(e);
        }
    },
};

module.exports = authController;

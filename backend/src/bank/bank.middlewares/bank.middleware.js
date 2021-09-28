const bankService = require('../bank.service');
const CustomError = require('../../../exeptions/customError');
const { code, message, bankConstants, availablePicParams } = require('../../../consts');
const { createNewBank, updateAd } = require('../bank.validators');

const bankMiddleware = {
    checkCreateNewBankInputs: (req, res, next) => {
        try {
            const { error, value } = createNewBank.validate(req.body);

            if (error) throw new CustomError(400, error.details[0].message);

            req.body = value;

            next();

        } catch (e) {
            next(e);
        }
    },

    checkBankAvatar: (req, res, next) => {
        try {
            if (!req.files || !req.files[bankConstants.BANK_AVATAR]) {
                next();
                return;
            }
            const { name, size, mimetype } = req.files[bankConstants.BANK_AVATAR];

            if (!availablePicParams.MIMETYPES.includes(mimetype)) {
                throw new CustomError(code.BAD_REQUEST, `${name} - ${message.WRONG_PIC_FORMAT}`);
            }
            if (size > availablePicParams.MAX_SIZE) {
                throw new CustomError(code.BAD_REQUEST, `${name} - ${message.WRONG_PIC_SIZE}`);
            }

            next();

        } catch (e) {
            next(e);
        }
    },

    checkUserIdQuery: (req, res, next) => {
        try {
            const { error, value } = updateAd.validate(req.body);

            if (error) throw new CustomError(400, error.details[0].message);

            req.body = value;

            next();

        } catch (e) {
            next(e);
        }
    },

    checkUserAccess: async (req, res, next) => {
        try {
            const { currentUser } = req;
            const { id } = req.params;

            const usersAd = await bankService.getUserAd(id, currentUser._id);

            if (usersAd) throw new CustomError(code.FORBIDDEN, message.FORBIDDEN);

            next();

        } catch (e) {
            next(e);
        }
    },
};

module.exports = bankMiddleware;

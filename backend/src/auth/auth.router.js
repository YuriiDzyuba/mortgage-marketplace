const Router = require('express');

const { userRoles, authConst: { REFRESH_TOKEN } } = require('../../consts');
const authController = require('./auth.controller');
const authMiddleware = require('./auth.middleware');

const authRouter = new Router();

authRouter.use('/', authMiddleware.isReqQueryEmpty);

authRouter.post('/registration',
    authMiddleware.checkRegistrationInputs,
    authMiddleware.checkAvatar,
    authMiddleware.isUserEmailExist(true),
    authController.createNewUser);

authRouter.post('/login',
    authMiddleware.checkLoginInputs,
    authMiddleware.isUserEmailExist(false),
    authMiddleware.checkUserRole(Object.values(userRoles)),
    authController.logIn);

authRouter.post('/logout',
    authMiddleware.isReqBodyEmpty,
    authMiddleware.checkToken(),
    authController.logOut);

authRouter.post('/logout/all',
    authMiddleware.isReqBodyEmpty,
    authMiddleware.checkToken(),
    authController.logOutFromAllDevices);

authRouter.post('/refresh',
    authMiddleware.isReqBodyEmpty,
    authMiddleware.checkToken(REFRESH_TOKEN),
    authController.refreshTokens);

module.exports = authRouter;

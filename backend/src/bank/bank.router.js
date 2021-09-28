const Router = require('express');

const bankController = require('./bank.controller');
const bankMiddleware = require('./bank.middlewares');

const bankRouter = new Router();

bankRouter.get('/',
    bankMiddleware.isReqQueryEmpty,
    bankController.getAllBanks);

bankRouter.post('/',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkBankAvatar,
    bankMiddleware.checkCreateNewBankInputs,
    bankMiddleware.checkToken(),
    bankController.createNewBank);

bankRouter.get('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankController.getOneBank);

bankRouter.patch('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankMiddleware.checkToken(),
    bankMiddleware.checkUserAccess,
    bankController.updateBank);

bankRouter.delete('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankMiddleware.checkToken(),
    bankMiddleware.checkUserAccess,
    bankController.deleteBank);

module.exports = bankRouter;

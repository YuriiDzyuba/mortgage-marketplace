const Router = require('express');

const bankController = require('./bank.controller');
const bankMiddleware = require('./bank.middlewares');
const { dbEnum: { V } } = require('../../consts');

const bankRouter = new Router();

bankRouter.get('/',
    bankMiddleware.isReqQueryEmpty,
    bankController.getAllBanks);

bankRouter.post('/',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkCreateNewBankInputs,
    bankMiddleware.checkToken(),
    bankController.createNewBank);

bankRouter.get('/params',
    bankMiddleware.getAdsByQueries,
    bankController.getAdsByParams);

bankRouter.get('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankController.getOneAd);

bankRouter.patch('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankMiddleware.checkToken(),
    bankMiddleware.checkUserAccess,
    bankController.updateAd);

bankRouter.delete('/:id',
    bankMiddleware.isReqQueryEmpty,
    bankMiddleware.checkId,
    bankMiddleware.checkToken(),
    bankMiddleware.checkUserAccess,
    bankController.deleteAd);

module.exports = bankRouter;

const Router = require('express');

const adController = require('./bank.controller');
const adMiddleware = require('./bank.middlewares');
const { dbEnum: { V, USER } } = require('../../consts');

const bankRouter = new Router();

bankRouter.get('/',
    adMiddleware.isReqQueryEmpty,
    adController.getAllAds([V, USER]));

bankRouter.post('/',
    adMiddleware.isReqQueryEmpty,
    adMiddleware.checkCreateNewAdInputs,
    adMiddleware.checkToken(),
    adController.createNewAd);

bankRouter.get('/params',
    adMiddleware.getAdsByQueries,
    adController.getAdsByParams);

bankRouter.get('/:id',
    adMiddleware.isReqQueryEmpty,
    adMiddleware.checkId,
    adController.getOneAd);

bankRouter.patch('/:id',
    adMiddleware.isReqQueryEmpty,
    adMiddleware.checkId,
    adMiddleware.checkToken(),
    adMiddleware.checkUserAccess,
    adController.updateAd);

bankRouter.delete('/:id',
    adMiddleware.isReqQueryEmpty,
    adMiddleware.checkId,
    adMiddleware.checkToken(),
    adMiddleware.checkUserAccess,
    adController.deleteAd);

module.exports = bankRouter;

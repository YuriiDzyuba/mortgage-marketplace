const Router = require('express');

const mortgageCalcController = require('./mortgageCalc.controller');
const mortgageCalcMiddleware = require('./mortgageCalc.middleware');

const mortgageCalcRouter = new Router();

mortgageCalcRouter.post('/calc',
    mortgageCalcMiddleware.checkMortgageCalcInputs,
    mortgageCalcController.createNewMortgageCalc);

module.exports = mortgageCalcRouter;

const CustomError = require('../../exeptions/customError');
const mortgageCalcService = require('./mortgageCalc.service');
const { code, message } = require('../../consts');

const mortgageCalcController = {
    createNewMortgageCalc: (fieldsToRemove) => async (req, res, next) => {
        try {
            const ads = await mortgageCalcService.createNewMortgageCalc(fieldsToRemove);

            if (!Object.keys(ads).length) throw new CustomError(code.NOT_FOUND, message.NO_ADS);

            res.json(ads);

        } catch (e) {
            next(e);
        }
    },
};

module.exports = mortgageCalcController;

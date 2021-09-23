const CustomError = require('../../../exeptions/customError');
const { createNewMortgageCalc } = require('../mortgage.validators');

const mortgageCalcMiddleware = {
    checkMortgageCalcInputs: (req, res, next) => {
        try {
            const { error, value } = createNewMortgageCalc.validate(req.body);

            if (error) throw new CustomError(400, error.details[0].message);

            req.body = value;

            next();

        } catch (e) {
            next(e);
        }
    },
};

module.exports = mortgageCalcMiddleware;

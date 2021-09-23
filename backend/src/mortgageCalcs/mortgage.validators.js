const Joi = require('joi');
const {
    mortgageCalcConstants: {
        MORTGAGE_CALC_DOWN_PAYMENT,
        MORTGAGE_CALC_INITIAL_LOAN,
        MORTGAGE_CALC_DOWN_PAYMENT_MIN,
        MORTGAGE_CALC_DOWN_PAYMENT_MAX,
        MORTGAGE_CALC_INITIAL_LOAN_MIN,
        MORTGAGE_CALC_INITIAL_LOAN_MAX,
    },
    userConstants: {
        USER,
        USER_ID_LENGTH
    },
    bankConstants: {
        BANK,
        BANK_ID_LENGTH
    }
} = require('../../consts');

module.exports = {
    createNewMortgageCalc: Joi.object({
        [MORTGAGE_CALC_DOWN_PAYMENT]: Joi.number()
            .min(MORTGAGE_CALC_DOWN_PAYMENT_MIN)
            .max(MORTGAGE_CALC_DOWN_PAYMENT_MAX)
            .required(),
        [MORTGAGE_CALC_INITIAL_LOAN]: Joi.number()
            .integer()
            .min(MORTGAGE_CALC_INITIAL_LOAN_MIN)
            .max(MORTGAGE_CALC_INITIAL_LOAN_MAX),
        [USER]: Joi.string()
            .min(USER_ID_LENGTH)
            .max(USER_ID_LENGTH)
            .required()
            .trim(),
        [BANK]: Joi.string()
            .min(BANK_ID_LENGTH)
            .max(BANK_ID_LENGTH)
            .required()
            .trim(),
    }),

    updateMortgageCalc: Joi.object({

    }),
};

const Joi = require('joi');
const {
    bankConstants: {
        BANK_NAME,
        INTEREST_RATE,
        MAXIMUM_LOAN,
        MINIMUM_DOWN_PAYMENT,
        LOAN_TERM,
        QUANTITY_MAX,
        QUANTITY_MIN,
        PRICE_VALUE_MAX,
        PRICE_VALUE_MIN,
        BANK_NAME_LENGTH_MAX,
        BANK_NAME_LENGTH_MIN,
        BANK_ID_LENGTH
    },
    userConstants: {
        USER,
        USER_ID_LENGTH
    } } = require('../../consts');

module.exports = {
    createNewBank: Joi.object({
        [BANK_NAME]: Joi.string()
            .min(BANK_NAME_LENGTH_MIN)
            .max(BANK_NAME_LENGTH_MAX)
            .required()
            .trim(),
        [INTEREST_RATE]: Joi.number()
            .integer()
            .min(QUANTITY_MIN)
            .max(QUANTITY_MAX),
        [MAXIMUM_LOAN]: Joi.number()
            .integer()
            .min(PRICE_VALUE_MIN)
            .max(PRICE_VALUE_MAX)
            .required(),
        [MINIMUM_DOWN_PAYMENT]: Joi.boolean()
            .required(),
        [LOAN_TERM]: Joi.string()
            .min(BANK_ID_LENGTH)
            .max(BANK_ID_LENGTH)
            .required()
            .trim(),
        [USER]: Joi.string()
            .min(USER_ID_LENGTH)
            .max(USER_ID_LENGTH)
            .required()
            .trim(),
    }),

    updateBank: Joi.object({

    }),
};

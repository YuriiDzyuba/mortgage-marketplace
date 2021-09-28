const Joi = require('joi');
const {
    bankConstants: {
        BANK_NAME,
        BANK_INTEREST_RATE,
        BANK_MAXIMUM_LOAN,
        BANK_MINIMUM_DOWN_PAYMENT,
        BANK_LOAN_TERM,
        BANK_QUANTITY_MAX,
        BANK_QUANTITY_MIN,
        BANK_BANK_MAXIMUM_LOAN_VALUE_MIN,
        BANK_BANK_MAXIMUM_LOAN_VALUE_MAX,
        BANK_NAME_LENGTH_MAX,
        BANK_NAME_LENGTH_MIN,
        BANK_AVATAR
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
        [BANK_INTEREST_RATE]: Joi.number()
            .integer()
            .min(BANK_QUANTITY_MIN)
            .max(BANK_QUANTITY_MAX),
        [BANK_MAXIMUM_LOAN]: Joi.number()
            .integer()
            .min(BANK_BANK_MAXIMUM_LOAN_VALUE_MIN)
            .max(BANK_BANK_MAXIMUM_LOAN_VALUE_MAX)
            .required(),
        [BANK_MINIMUM_DOWN_PAYMENT]: Joi.number()
            .required(),
        [BANK_LOAN_TERM]: Joi.number()
            .min(BANK_BANK_MAXIMUM_LOAN_VALUE_MIN)
            .max(BANK_BANK_MAXIMUM_LOAN_VALUE_MAX)
            .required(),
        [BANK_AVATAR]: Joi.any(),
        [USER]: Joi.string()
            .min(USER_ID_LENGTH)
            .max(USER_ID_LENGTH)
            .required()
            .trim(),
    }),

    updateBank: Joi.object({

    }),
};

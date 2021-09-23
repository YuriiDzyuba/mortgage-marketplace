const Joi = require('joi');
const {
    userRoles,
    regExp: {
        NAME_REGEXP
    },
    userConstants: {
        USER_NAME,
        USER_SECOND_NAME,
        USER_ROLE
    },
    bankConstants: {
        BANK,
        BANK_ID_LENGTH
    }

} = require('../../consts');

module.exports = {
    updateUserValidator: Joi.object({
        [USER_NAME]: Joi.string()
            .alphanum()
            .regex(NAME_REGEXP)
            .trim(),
        [USER_SECOND_NAME]: Joi.string()
            .alphanum()
            .regex(NAME_REGEXP)
            .trim(),
        [USER_ROLE]: Joi.string()
            .allow(...Object.values(userRoles)),
        [BANK]: Joi.string()
            .min(BANK_ID_LENGTH)
            .max(BANK_ID_LENGTH),
    })
};

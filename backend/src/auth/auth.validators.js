const Joi = require('joi');

const {
    userRoles,
    regExp: {
        PASSWORD_REGEXP,
        EMAIL_REGEXP,
        NAME_REGEXP
    },
    userConstants: {
        USER_EMAIL,
        USER_PASSWORD,
        USER_NAME,
        USER_SECOND_NAME,
        USER_ROLE,
        USER_AVATAR,
        PASSWORD_LENGTH_MAX,
        PASSWORD_LENGTH_MIN
    }
} = require('../../consts');
const {

} = require('../../consts/userConstants');

module.exports = {
    createNewUserValidator: Joi.object({
        [USER_EMAIL]: Joi.string()
            .regex(EMAIL_REGEXP)
            .trim()
            .required(),
        [USER_PASSWORD]: Joi.string()
            .regex(PASSWORD_REGEXP)
            .trim()
            .min(PASSWORD_LENGTH_MIN)
            .max(PASSWORD_LENGTH_MAX)
            .required(),
        [USER_NAME]: Joi.string()
            .alphanum()
            .regex(NAME_REGEXP)
            .trim()
            .required(),
        [USER_SECOND_NAME]: Joi.string()
            .alphanum()
            .regex(NAME_REGEXP)
            .trim()
            .required(),
        [USER_ROLE]: Joi.string()
            .allow(...Object.values(userRoles)),
        [USER_AVATAR]: Joi.any()
    }),
    checkAuthInputs: Joi.object({
        [USER_EMAIL]: Joi.string()
            .regex(EMAIL_REGEXP)
            .trim()
            .required(),
        [USER_PASSWORD]: Joi.string()
            .regex(PASSWORD_REGEXP)
            .trim()
            .min(PASSWORD_LENGTH_MIN)
            .max(PASSWORD_LENGTH_MAX)
            .required(),
    })
};

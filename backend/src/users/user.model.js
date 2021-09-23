const { Schema, model } = require('mongoose');
const { userRoles,
    userConstants: {
        USER,
        USER_EMAIL,
        USER_PASSWORD,
        USER_NAME,
        USER_SECOND_NAME,
        USER_ROLE,
        USER_AVATAR
    } } = require('../../consts');

const schema = new Schema({
    [USER_EMAIL]: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    [USER_PASSWORD]: {
        type: String,
        required: true,
        trim: true,
    },
    [USER_NAME]: {
        type: String,
        required: false,
        trim: true,
    },
    [USER_SECOND_NAME]: {
        type: String,
        required: false,
        trim: true,
    },
    [USER_ROLE]: {
        type: String,
        enum: Object.values(userRoles),
        default: userRoles.USER
    },
    [USER_AVATAR]: {
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = model(USER, schema);

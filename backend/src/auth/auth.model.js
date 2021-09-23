const { Schema, model } = require('mongoose');
const {
    authConst: {
        AUTH,
        ACCESS_TOKEN,
        REFRESH_TOKEN
    },
    userConstants: {
        USER
    } } = require('../../consts');

const schema = new Schema({
    [ACCESS_TOKEN]: {
        type: String,
        required: true
    },
    [REFRESH_TOKEN]: {
        type: String,
        required: true
    },
    [USER]: {
        ref: USER,
        type: Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

module.exports = model(AUTH, schema);

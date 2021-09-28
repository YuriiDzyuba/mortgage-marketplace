const { Schema, model } = require('mongoose');
const {
    bankConstants: {
        BANK,
        BANK_NAME,
        BANK_INTEREST_RATE,
        BANK_MAXIMUM_LOAN,
        BANK_MINIMUM_DOWN_PAYMENT,
        BANK_AVATAR,
        BANK_LOAN_TERM
    },
    userConstants: {
        USER
    }
} = require('../../consts');

const schema = new Schema({
    [BANK_NAME]: {
        type: String,
        required: true,
        trim: true,
    },
    [BANK_INTEREST_RATE]: {
        type: Number,
        required: true,
        trim: true,
    },
    [BANK_MAXIMUM_LOAN]: {
        type: Number,
        required: false,
        trim: true,
    },
    [BANK_MINIMUM_DOWN_PAYMENT]: {
        type: Number,
        required: false,
        trim: true,
    },
    [BANK_LOAN_TERM]: {
        type: Number,
        required: false,
        trim: true,
    },
    [BANK_AVATAR]: {
        type: String,
        required: false,
    },
    [USER]: {
        ref: USER,
        type: Schema.Types.ObjectId,
        required: true,
    }
}, { timestamps: true });

module.exports = model(BANK, schema);

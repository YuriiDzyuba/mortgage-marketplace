const { Schema, model } = require('mongoose');
const {
    userConstants: { USER },
    bankConstants: { BANK },
    mortgageCalcConstants: {
        MORTGAGE_CALC,
        MORTGAGE_CALC_DOWN_PAYMENT,
        MORTGAGE_CALC_INITIAL_LOAN,
    } } = require('../../consts');

const schema = new Schema({
    [MORTGAGE_CALC_DOWN_PAYMENT]: {
        type: Number,
        required: true,
        trim: true,
    },
    [MORTGAGE_CALC_INITIAL_LOAN]: {
        type: Number,
        required: true,
        trim: true,
    },
    [USER]: {
        ref: USER,
        type: Schema.Types.ObjectId,
        required: true,
    },
    [BANK]: {
        ref: USER,
        type: Schema.Types.ObjectId,
        required: true,
    },
}, { timestamps: true });

module.exports = model(MORTGAGE_CALC, schema);

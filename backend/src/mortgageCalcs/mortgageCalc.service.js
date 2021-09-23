const MortgageCalc = require('./mortgageCalc.model');

const mortgageCalcService = {
    createNewMortgageCalc: async (fieldsToRemove = []) => {
        const mortgageCalcs = await MortgageCalc.find({})
            .select(fieldsToRemove.join(' '));
        return mortgageCalcs;
    },

};

module.exports = mortgageCalcService;

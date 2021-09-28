const Bank = require('./bank.model');
const { userConstants: { USER }, dbEnum: { ID } } = require('../../consts');

const bankService = {
    getAllBanks: async () => {
        const banks = await Bank.find({});
        return banks;
    },

    getOneBank: async (id) => {
        const bank = await Bank.findById(id);
        return bank;
    },

    getUserAd: async (adId, userId) => {
        const usersBanks = await Bank.findOne({
            [ID]: adId,
            [USER]: userId
        });
        return usersBanks;
    },

    createNewBank: async (newBankDate, userId) => {
        const newBank = await Bank.create({
            ...newBankDate,
            [USER]: userId
        });
        return newBank;
    },

    updateBank: async (id, data, returnNew = false) => {
        const updatedBank = await Bank.findByIdAndUpdate(id, data, { new: returnNew });
        return updatedBank;
    },

    deleteBank: async (id) => {
        const deletedBank = await Bank.findByIdAndDelete(id);
        return deletedBank;
    }
};

module.exports = bankService;

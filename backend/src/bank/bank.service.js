const Bank = require('./bank.model');
const { dbEnum: { USER, ID } } = require('../../consts');

const bankService = {
    getAllBanks: async () => {
        const banks = await Bank.find({});
        return banks;
    },

    getAdsByDynamicParam: async (param) => {
        const banks = await Bank.find(param);
        return banks;
    },

    getOneAd: async (id) => {
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

    createNewAd: async (newBankDate, userId) => {
        const newBank = await Bank.create({
            ...newBankDate,
            [USER]: userId
        });
        return newBank;
    },

    updateAdvertisement: async (id, data) => {
        const updatedAd = await Bank.findByIdAndUpdate(id, data);
        return updatedAd;
    },

    deleteAd: async (id) => {
        const deletedAd = await Bank.findByIdAndDelete(id);
        return deletedAd;
    }
};

module.exports = bankService;

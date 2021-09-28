const CustomError = require('../../exeptions/customError');
const bankService = require('./bank.service');
const { code, message, bankConstants: { BANK_AVATAR } } = require('../../consts');
const authService = require('../auth/auth.service');

const bankController = {
    getAllBanks: async (req, res, next) => {
        try {
            const banks = await bankService.getAllBanks();

            if (!Object.keys(banks).length) throw new CustomError(code.NOT_FOUND, message.NO_ADS);

            res.json(banks);

        } catch (e) {
            next(e);
        }
    },

    createNewBank: async (req, res, next) => {
        try {
            const bankData = req.body;
            const { currentUser } = req;

            const newBank = await bankService.createNewBank(bankData, currentUser._id);

            if (!newBank) throw new CustomError(code.INTERNAL_SERVER_ERROR, message.CANT_CREATE_AD);

            if (req.files && req.files[BANK_AVATAR]) {
                const { _id } = newBank;

                const uploadFile = await authService.uploadImageToAWS(req.files[BANK_AVATAR], BANK_AVATAR, _id);

                await bankService.updateBank(_id, { [BANK_AVATAR]: uploadFile.Location }, true);
            }

            res.json({ message: message.AD_CREATED });

        } catch (e) {
            next(e);
        }
    },

    getOneBank: async (req, res, next) => {
        try {
            const { id } = req.params;

            const chosenBank = await bankService.getOneBank(id);

            if (!chosenBank) throw new CustomError(code.NOT_FOUND, message.NO_AD);

            res.json(chosenBank);

        } catch (e) {
            next(e);
        }
    },

    updateBank: async (req, res, next) => {
        try {

            const bankDataToUpdate = req.body;

            const updatedBank = await bankService.updateBank(bankDataToUpdate._id, bankDataToUpdate);

            if (!updatedBank) throw new CustomError(code.INTERNAL_SERVER_ERROR, message.CANT_UPDATE_AD);

            res.json(updatedBank);

        } catch (e) {
            next(e);
        }
    },

    deleteBank: async (req, res, next) => {
        try {
            const { _id } = req.body;

            const deletedBank = await bankService.deleteBank(_id);

            if (!deletedBank) throw new CustomError(code.INTERNAL_SERVER_ERROR, message.CANT_DELETE_AD);

            res.json({ message: message.AD_DELETED });

        } catch (e) {
            next(e);
        }
    }
};

module.exports = bankController;

const User = require('./user.model');
const { dbEnum: { V }, userConstants: { USER_PASSWORD } } = require('../../consts');

const userService = {
    getAllUsers: async () => {
        const users = await User.find({}).select(`-${USER_PASSWORD} -${V}`);
        return users;
    },

    getFilteredUsers: async (filter) => {
        const users = await User.find(filter).select(`-${USER_PASSWORD} -${V}`).lean();
        return users;
    },

    getOneUserById: async (id) => {
        const user = await User.findById(id).select(`-${USER_PASSWORD}`);
        return user;
    },

    getOneUserByParam: async (param) => {
        const user = await User.findOne(param).select(`-${USER_PASSWORD}`);
        return user;
    },

    updateUser: async (id, data, returnNew = false) => {
        const updatedUser = await User.findByIdAndUpdate(id, data, { new: returnNew }).select(`-${USER_PASSWORD}`);
        return updatedUser;
    },

    deleteUser: async (id) => {
        const deletedUser = await User.findByIdAndDelete(id).select(`-${USER_PASSWORD}`);
        return deletedUser;
    }
};

module.exports = userService;

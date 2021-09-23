const { checkUserRole } = require('../../users/user.middleware/user.middleware');
const {
    checkRegistrationInputs,
    checkLoginInputs,
    isUserEmailExist,
    checkToken,
    isReqQueryEmpty,
    isReqBodyEmpty,
    setNewAdminData,
    checkAvatar
} = require('./auth.middleware');

module.exports = {
    checkToken,
    checkRegistrationInputs,
    isReqQueryEmpty,
    isUserEmailExist,
    checkLoginInputs,
    checkUserRole,
    isReqBodyEmpty,
    setNewAdminData,
    checkAvatar
};

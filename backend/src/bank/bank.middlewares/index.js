const { checkId, checkUserRole, getUserById } = require('../../users/user.middleware/user.middleware');
const { checkToken, isReqQueryEmpty } = require('../../auth/auth.middleware');
const {
    checkBankAvatar,
    checkUserIdQuery,
    checkCreateNewBankInputs,
    getAdsByQueries,
    checkUserAccess
} = require('./bank.middleware');

module.exports = {
    checkBankAvatar,
    checkUserAccess,
    checkToken,
    isReqQueryEmpty,
    checkId,
    checkUserRole,
    getUserById,
    checkUserIdQuery,
    checkCreateNewBankInputs,
    getAdsByQueries
};

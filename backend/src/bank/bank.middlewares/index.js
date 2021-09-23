const { checkId, checkUserRole, getUserById } = require('../../users/user.middleware/user.middleware');
const { checkToken, isReqQueryEmpty } = require('../../auth/auth.middleware');
const {
    checkUserIdQuery,
    checkCreateNewAdInputs,
    getAdsByQueries,
    checkUserAccess
} = require('./bank.middleware');

module.exports = {
    checkUserAccess,
    checkToken,
    isReqQueryEmpty,
    checkId,
    checkUserRole,
    getUserById,
    checkUserIdQuery,
    checkCreateNewAdInputs,
    getAdsByQueries
};

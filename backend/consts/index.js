const dbEnum = require('./dbEnum');
const authConstants = require('./authConstants');
const statusCodes = require('./statusCodes');
const responseMessages = require('./responseMessages');
const userRoles = require('./userRoles');
const regExp = require('./regExp');
const bankConstants = require('./bankConstants');
const availablePicParams = require('./availablePicParams');
const customErrors = require('./customErrors');
const userConstants = require('./userConstants');
const mortgageCalcConstants = require('./mortgageCalcConstants');

module.exports = {
    dbEnum,
    authConst: authConstants,
    code: statusCodes,
    message: responseMessages,
    userRoles,
    regExp,
    availablePicParams,
    customErrors,
    userConstants,
    bankConstants,
    mortgageCalcConstants
};

import {
    BANK_AVATAR,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT
} from '../../consts/bankConsts';
// import { USER_ID_FIELD } from '../../consts/userConsts';
import { createNewBank } from '../../http/bankApi';

const CHANGE_BANK_NAME = 'CHANGE_BANK_NAME';
const CHANGE_BANK_AVATAR = 'CHANGE_BANK_AVATAR';
const CHANGE_INTEREST_RATE = 'CHANGE_INTEREST_RATE';
const CHANGE_MAXIMUM_LOAN = 'CHANGE_MAXIMUM_LOAN';
const CHANGE_MINIMUM_DOWN_PAYMENT = 'CHANGE_MINIMUM_DOWN_PAYMENT';
const CHANGE_LOAN_TERM = 'CHANGE_LOAN_TERM';
const CLEAR_ALL_FIELDS = 'CLEAR_ALL_FIELDS';

const initialState = {
    [BANK_NAME]: '',
    [BANK_AVATAR]: '',
    [INTEREST_RATE]: '',
    [MAXIMUM_LOAN]: '',
    [MINIMUM_DOWN_PAYMENT]: '',
    [LOAN_TERM]: '',
};

export const editBankReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_BANK_NAME:
            return { ...state, [BANK_NAME]: action.text };
        case CHANGE_BANK_AVATAR:
            return { ...state, [BANK_AVATAR]: action.payload };
        case CHANGE_INTEREST_RATE:
            return { ...state, [INTEREST_RATE]: action.text };
        case CHANGE_MAXIMUM_LOAN:
            return { ...state, [MAXIMUM_LOAN]: action.text };
        case CHANGE_MINIMUM_DOWN_PAYMENT:
            return { ...state, [MINIMUM_DOWN_PAYMENT]: action.text };
        case CHANGE_LOAN_TERM:
            return { ...state, [LOAN_TERM]: action.payload };
        case CLEAR_ALL_FIELDS:
            return { ...initialState };
        default:
            return state;
    }
};

export const changeBankName = (text) => ({ type: CHANGE_BANK_NAME, text });

export const changeBankAvatar = (payload) => ({ type: CHANGE_BANK_NAME, payload });

export const changeInterestRate = (text) => ({ type: CHANGE_INTEREST_RATE, text });

export const changeMaximumLoan = (text) => ({ type: CHANGE_MAXIMUM_LOAN, text });

export const changeMinimumDownPayment = (text) => ({ type: CHANGE_MINIMUM_DOWN_PAYMENT, text });

export const changeLoanTerm = (text) => ({ type: CHANGE_LOAN_TERM, text });

export const clearAllFields = () => ({ type: CLEAR_ALL_FIELDS });

export const registerNewBank = () => async (dispatch, getState) => {

    const bankData = getState().bank;
    const currentUser = getState().user;
    console.log(currentUser);
    const isBankCreated = await createNewBank(bankData);

    if (isBankCreated) {
        // dispatch(clearAllFields());
        // dispatch(getCurrentUserBanks(currentUser[USER_ID_FIELD]));
    }
};

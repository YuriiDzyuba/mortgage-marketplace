import {
    BANK_AVATAR,
    BANK_ID_FIELD,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT
} from '../../consts/bankConsts';
import { USER_ID_FIELD } from '../../consts/userConsts';
import { createNewBank, updateBank } from '../../http/bankApi';
import { getNewTokens } from '../../http/userApi';
import { showToast } from '../toastReducer';
import { getAllBanks } from './banksReducer';

const CHANGE_BANK_NAME = 'CHANGE_BANK_NAME';
const CHANGE_BANK_AVATAR = 'CHANGE_BANK_AVATAR';
const CHANGE_INTEREST_RATE = 'CHANGE_INTEREST_RATE';
const CHANGE_MAXIMUM_LOAN = 'CHANGE_MAXIMUM_LOAN';
const CHANGE_MINIMUM_DOWN_PAYMENT = 'CHANGE_MINIMUM_DOWN_PAYMENT';
const CHANGE_LOAN_TERM = 'CHANGE_LOAN_TERM';
const LOAD_BANK = 'LOAD_BANK';

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
            return { ...state, [INTEREST_RATE]: parseInt(action.value, 10) };
        case CHANGE_MAXIMUM_LOAN:
            return { ...state, [MAXIMUM_LOAN]: parseInt(action.value, 10) };
        case CHANGE_MINIMUM_DOWN_PAYMENT:
            return { ...state, [MINIMUM_DOWN_PAYMENT]: parseInt(action.value, 10) };
        case CHANGE_LOAN_TERM:
            return { ...state, [LOAN_TERM]: parseInt(action.value, 10) };
        case LOAD_BANK:
            if (action.payload) return { ...action.payload };
            return { ...initialState };
        default:
            return state;
    }
};

export const changeBankName = (text) => ({ type: CHANGE_BANK_NAME, text });

export const changeBankAvatar = (payload) => ({ type: CHANGE_BANK_AVATAR, payload });

export const changeInterestRate = (value) => ({ type: CHANGE_INTEREST_RATE, value });

export const changeMaximumLoan = (value) => ({ type: CHANGE_MAXIMUM_LOAN, value });

export const changeMinimumDownPayment = (value) => ({ type: CHANGE_MINIMUM_DOWN_PAYMENT, value });

export const changeLoanTerm = (value) => ({ type: CHANGE_LOAN_TERM, value });

export const loadBankToState = (payload) => ({ type: LOAD_BANK, payload });

export const createUpdateBank = () => async (dispatch, getState) => {

    const currentBank = getState().bank;
    const currentUser = getState().user;

    if (currentUser[USER_ID_FIELD]) {
        try {
            if (!currentBank[BANK_ID_FIELD]) {
                await createNewBank(currentBank, currentUser[USER_ID_FIELD]);
            } else {
                await updateBank(currentBank, currentUser[USER_ID_FIELD]);
            }
            dispatch(getAllBanks());
        } catch (e) {
            if (e.response.status !== 401) {
                dispatch(showToast(e.response.data.message));
            }

            if (e.response.status === 401) {
                try {
                    await dispatch(getNewTokens());
                    await createUpdateBank();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
};

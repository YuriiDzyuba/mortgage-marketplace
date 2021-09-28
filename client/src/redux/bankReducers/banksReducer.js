import { USER_ID_FIELD } from '../../consts/userConsts';
import { deleteBankById, getBanks } from '../../http/bankApi';
import { getNewTokens } from '../../http/userApi';
import { showToast } from '../toastReducer';

const GET_ALL_BANKS = 'GET_ALL_BANKS';

const initialState = {
    banks: [],
};

export const banksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BANKS:
            return { ...state, banks: [...action.payload] };
        default:
            return state;
    }
};

export const uploadAllBanks = (payload) => ({ type: GET_ALL_BANKS, payload });

export const getAllBanks = () => async (dispatch) => {

    const responseData = await getBanks();
    dispatch(uploadAllBanks(responseData));
};

export const deleteBank = (bankId) => async (dispatch, getState) => {

    const currentUser = getState().user;

    if (currentUser[USER_ID_FIELD]) {
        try {
            await deleteBankById(bankId, currentUser[USER_ID_FIELD]);
            dispatch(getAllBanks());
        } catch (e) {
            if (e.response.status !== 401) {
                dispatch(showToast(e.response.data.message));
            }

            if (e.response.status === 401) {
                try {
                    await dispatch(getNewTokens());
                    await deleteBank();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
};

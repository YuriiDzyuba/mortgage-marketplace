import { getBanks } from '../../http/bankApi';

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
    console.log(responseData, 'responseData');
    dispatch(uploadAllBanks(responseData));

};

import {
    USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_ID_FIELD,
    USER_NAME_FIELD,
    USER_ROLE_FIELD,
    USER_SECOND_NAME_FIELD } from '../../consts/userConsts';

const UPLOAD_USER = 'UPLOAD_USER';
const UNLOAD_USER = 'UNLOAD_USER';

const initialState = {
    [USER_EMAIL_FIELD]: '',
    [USER_SECOND_NAME_FIELD]: '',
    [USER_AVATAR_FIELD]: '',
    [USER_NAME_FIELD]: '',
    [USER_ROLE_FIELD]: '',
    [USER_ID_FIELD]: '',
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_USER:
            const newState = { ...initialState };
            const newStateFields = Object.keys(initialState);

            newStateFields.forEach((field) => { newState[field] = action.payload[field]; });
            return { ...newState };
        case UNLOAD_USER:
            return { ...state, ...initialState };
        default:
            return state;
    }
};

export const uploadUser = (payload) => ({ type: UPLOAD_USER, payload });

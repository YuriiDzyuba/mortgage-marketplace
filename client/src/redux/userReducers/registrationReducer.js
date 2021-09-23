import { registration } from '../../http/userApi';
import { uploadUser } from './userReducer';
import {
    USER_AVATAR_FIELD,
    USER_BORN_YEAR_FIELD,
    USER_EMAIL_FIELD,
    USER_NAME_FIELD,
    USER_PASSWORD_FIELD
} from '../../consts/userConsts';

const CHANGE_EMAIL = 'CHANGE_EMAIL';
const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_BORN_YEAR = 'CHANGE_BORN_YEAR';
const CHANGE_AVATAR = 'CHANGE_AVATAR';
const CLEAR_ALL = 'CLEAR_ALL';

const initialState = {
    [USER_EMAIL_FIELD]: '',
    [USER_PASSWORD_FIELD]: '',
    [USER_NAME_FIELD]: '',
    [USER_BORN_YEAR_FIELD]: '',
    [USER_AVATAR_FIELD]: '',
    [USER_NAME_FIELD]: '',
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_EMAIL:
            return { ...state, [USER_EMAIL_FIELD]: action.text };
        case CHANGE_PASSWORD:
            return { ...state, [USER_PASSWORD_FIELD]: action.text };
        case CHANGE_NAME:
            return { ...state, [USER_NAME_FIELD]: action.text };
        case CHANGE_BORN_YEAR:
            return { ...state, [USER_BORN_YEAR_FIELD]: action.text };
        case CHANGE_AVATAR:
            return { ...state, [USER_AVATAR_FIELD]: action.payload };
        case CLEAR_ALL:
            return { ...state, ...initialState };
        default:
            return state;
    }
};

export const changeEmail = (text) => ({ type: CHANGE_EMAIL, text });

export const changePassword = (text) => ({ type: CHANGE_PASSWORD, text });

export const changeName = (text) => ({ type: CHANGE_NAME, text });

export const changeBornYear = (text) => ({ type: CHANGE_BORN_YEAR, text });

export const changeAvatar = (payload) => ({ type: CHANGE_AVATAR, payload });

export const clearAllFields = () => ({ type: CLEAR_ALL });

export const registerNewUser = () => async (dispatch, getState) => {

    const applicantData = getState().registration;

    const accessToken = await registration(applicantData);

    if (accessToken) {
        dispatch(clearAllFields());
        dispatch(uploadUser(accessToken));
    }
};

export const checkTokens = () => async () => {

    // const refreshToken = localStorage.getItem('refreshToken');
    //
    // if (refreshToken) {
    //     const accessToken = await getNewTokens(refreshToken);
    //
    //     if (accessToken) {
    //         dispatch(uploadUser(accessToken));
    //     }
    // } else {
    //     dispatch(uploadUser({ [USER_ROLE_FIELD]: USER_ROLE_PUBLIC }));
    // }

};

import {
    USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_ID_FIELD,
    USER_NAME_FIELD,
    USER_ROLE_FIELD,
    USER_SECOND_NAME_FIELD } from '../consts/userConsts';
import { getAgent } from '../http/agentsApi';

const UPLOAD_AGENT = 'UPLOAD_AGENT';
const UNLOAD_AGENT = 'UNLOAD_AGENT';

const initialState = {
    [USER_EMAIL_FIELD]: '',
    [USER_SECOND_NAME_FIELD]: '',
    [USER_AVATAR_FIELD]: '',
    [USER_NAME_FIELD]: '',
    [USER_ROLE_FIELD]: '',
    [USER_ID_FIELD]: '',
};

export const agentReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_AGENT:
            const newState = { ...initialState };
            const newStateFields = Object.keys(initialState);

            newStateFields.forEach((field) => { newState[field] = action.payload[field]; });
            return { ...newState };
        case UNLOAD_AGENT:
            return { ...state, ...initialState };
        default:
            return state;
    }
};

export const uploadAgent = (payload) => ({ type: UPLOAD_AGENT, payload });

export const unloadAgent = (payload) => ({ type: UNLOAD_AGENT, payload });

export const getCurrentAgent = (agentId) => async (dispatch) => {

    const responseData = await getAgent(agentId);

    dispatch(uploadAgent(responseData));
};

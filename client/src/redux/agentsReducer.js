import { getAgents } from '../http/agentsApi';

const GET_ALL_AGENTS = 'GET_ALL_AGENTS';

const initialState = {
    agents: [],
};

export const agentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_AGENTS:
            return { ...state, agents: [...action.payload] };
        default:
            return state;
    }
};

export const uploadAgents = (payload) => ({ type: GET_ALL_AGENTS, payload });

export const getAllAgents = () => async (dispatch) => {

    const responseData = await getAgents();

    dispatch(uploadAgents(responseData));

};

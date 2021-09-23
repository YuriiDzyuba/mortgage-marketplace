import { applyMiddleware, combineReducers, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { agentReducer } from './agentReducer';
import { agentsReducer } from './agentsReducer';
import { banksReducer } from './bankReducers/banksReducer';
import { editBankReducer } from './bankReducers/editBankReducer';
import { userReducer } from './userReducers/userReducer';
import { authReducer } from './userReducers/authReducer';
import { registrationReducer } from './userReducers/registrationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    registration: registrationReducer,
    agents: agentsReducer,
    agent: agentReducer,
    bank: editBankReducer,
    banks: banksReducer
});

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

window.store = store;

import { applyMiddleware, combineReducers, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { userReducer } from './userReducers/userReducer';
import { authReducer } from './userReducers/authReducer';
import { registrationReducer } from './userReducers/registrationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    registration: registrationReducer,
});

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    ));

window.store = store;

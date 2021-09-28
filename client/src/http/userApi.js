import jwt_decode from 'jwt-decode';
import FormData from 'form-data';
import { $authHost, $host, $refreshTokenHost } from './index';
import {
    USER_AVATAR_FIELD,
    USER_EMAIL_FIELD,
    USER_NAME_FIELD,
    USER_PASSWORD_FIELD,
    USER_ROLE_FIELD,
    USER_SECOND_NAME_FIELD
} from '../consts/userConsts';
import {
    ACCESS_TOKEN,
    REFRESH_TOKEN
} from '../consts/authConsts';

export const registration = async ({ email, password, name, secondName, role, userAvatar }) => {

    const data = new FormData();
    data.append(USER_EMAIL_FIELD, email);
    data.append(USER_PASSWORD_FIELD, password);
    data.append(USER_NAME_FIELD, name);
    data.append(USER_SECOND_NAME_FIELD, secondName);
    data.append(USER_ROLE_FIELD, role);
    data.append(USER_AVATAR_FIELD, userAvatar, USER_AVATAR_FIELD);

    const response = await $authHost.post('/registration', data, { headers: { 'Content-Type': 'multipart/form-data' } });

    if (response.status === 200) {
        if (response.data) {
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);

            return jwt_decode(response.data.accessToken);
        }

    } return false;
};

export const login = async ({ email, password }) => {
    const response = await $authHost.post('/login', { [USER_EMAIL_FIELD]: email, [USER_PASSWORD_FIELD]: password });

    if (response.status === 200) {

        if (response.data) {
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
        }
        return jwt_decode(response.data.accessToken);

    } return false;
};

export const getNewTokens = async () => {
    const response = await $refreshTokenHost.post(
        '/refresh',
        {},
        { headers: { Authorization: localStorage.getItem(REFRESH_TOKEN) } }
);

    if (response.status === 200) {

        if (response.data) {
            localStorage.setItem(ACCESS_TOKEN, response.data.accessToken);
            localStorage.setItem(REFRESH_TOKEN, response.data.refreshToken);
        }
        return jwt_decode(response.data.accessToken);

    } return false;
};

export const check = async () => {
    const response = await $host.post('/registration',);
    return response;
};

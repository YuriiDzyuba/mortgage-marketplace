import jwt_decode from 'jwt-decode';
import { $authHost, $host, $refreshTokenHost } from './index';
import {
    USER_AVATAR_FIELD,
    USER_BORN_YEAR_FIELD,
    USER_EMAIL_FIELD,
    USER_NAME_FIELD,
    USER_PASSWORD_FIELD
} from '../consts/userConsts';

export const registration = async ({ email, password, name, born_year, avatar }) => {
    const response = await $authHost.post('/registration', {
        [USER_EMAIL_FIELD]: email,
        [USER_PASSWORD_FIELD]: password,
        [USER_NAME_FIELD]: name,
        [USER_BORN_YEAR_FIELD]: born_year,
        [USER_AVATAR_FIELD]: avatar,
    }, { headers: { 'Content-Type': 'multipart/form-data' } });

    if (response.status === 200) {

        if (response.data) {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return jwt_decode(response.data.accessToken);

    } return false;
};

export const login = async ({ email, password }) => {
    const response = await $authHost.post('/login', { [USER_EMAIL_FIELD]: email, [USER_PASSWORD_FIELD]: password });

    if (response.status === 200) {

        if (response.data) {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return jwt_decode(response.data.accessToken);

    } return false;
};

export const getNewTokens = async (token) => {
    const response = await $refreshTokenHost.post('/refresh', {}, { headers: { Authorization: token } });

    if (response.status === 200) {

        if (response.data) {
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);
        }
        return jwt_decode(response.data.accessToken);

    } return false;
};

export const check = async () => {
    const response = await $host.post('/registration',);
    return response;
};

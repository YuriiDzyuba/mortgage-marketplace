import axios from 'axios';
import { SERVER_API, SERVER_API_AUTH } from '../consts/serverApiConsts';

const $host = axios.create({
    baseURL: SERVER_API
});

const $authHost = axios.create({
    baseURL: SERVER_API_AUTH
});

const $refreshTokenHost = axios.create({
    baseURL: SERVER_API_AUTH
});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
    $refreshTokenHost
};

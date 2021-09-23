import axios from 'axios';
import { SERVER_API,
    SERVER_API_AUTH,
    SERVER_API_BANK,
    SERVER_API_GET_ALL_AGENTS
} from '../consts/serverApiConsts';

const $host = axios.create({
    baseURL: SERVER_API
});

const $authHost = axios.create({
    baseURL: SERVER_API_AUTH
});

const $refreshTokenHost = axios.create({
    baseURL: SERVER_API_AUTH
});

const $getAllAgentsHost = axios.create({
    baseURL: SERVER_API_GET_ALL_AGENTS
});

const $getCurrentAgentHost = axios.create({
    baseURL: SERVER_API_GET_ALL_AGENTS
});

const $createNewBankHost = axios.create({
    baseURL: SERVER_API_GET_ALL_AGENTS
});

const $getAllBanksHost = axios.create({
    baseURL: SERVER_API_BANK
});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost,
    $refreshTokenHost,
    $getAllAgentsHost,
    $getCurrentAgentHost,
    $createNewBankHost,
    $getAllBanksHost
};

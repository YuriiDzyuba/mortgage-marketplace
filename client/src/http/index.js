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

const $bankHost = axios.create({
    baseURL: SERVER_API_BANK
});

const $getAllBanksHost = axios.create({
    baseURL: SERVER_API_BANK
});

export {
    $host,
    $authHost,
    $refreshTokenHost,
    $getAllAgentsHost,
    $getCurrentAgentHost,
    $bankHost,
    $getAllBanksHost
};

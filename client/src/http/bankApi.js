import FormData from 'form-data';
import { $bankHost, $getAllBanksHost } from './index';
import {
    BANK_AVATAR,
    BANK_ID_FIELD,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT
} from '../consts/bankConsts';
import { USER } from '../consts/userConsts';

const _getRequestData = (bankData, userId) => {
    const config = { headers: {
        Authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'multipart/form-data'
    } };

    const data = new FormData();
    data.append(BANK_NAME, bankData[BANK_NAME]);
    data.append(INTEREST_RATE, bankData[INTEREST_RATE]);
    data.append(MAXIMUM_LOAN, bankData[MAXIMUM_LOAN]);
    data.append(MINIMUM_DOWN_PAYMENT, bankData[MINIMUM_DOWN_PAYMENT]);
    data.append(LOAN_TERM, bankData[LOAN_TERM]);
    data.append(USER, userId);

    if (bankData[BANK_AVATAR]) data.append(BANK_AVATAR, bankData[BANK_AVATAR], BANK_AVATAR);

    if (bankData[BANK_ID_FIELD]) data.append(BANK_ID_FIELD, bankData[BANK_ID_FIELD]);

    return { config, data };
};

export const updateBank = async (bankData, userId) => {

    const { data, config } = _getRequestData(bankData, userId);

    console.log(bankData[BANK_ID_FIELD], 'bankData[BANK_ID_FIELD');

    const response = await $bankHost.patch(`/${userId}`, data, config);
    return response;
};

export const createNewBank = async (bankData, userId) => {

    const { data, config } = _getRequestData(bankData, userId);

    const response = await $bankHost.post('/', data, config);
    return response;
};

export const getBanks = async () => {
    const response = await $getAllBanksHost.get('/');

    if (response.status === 200) {
        if (response.data) {
            return response.data;
        }
        return response;

    } return false;
};

export const deleteBankById = async (bankId, userId) => {

    const config = { headers: {
        Authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'multipart/form-data'
    } };

    const data = new FormData();
    data.append(BANK_ID_FIELD, bankId);

    console.log(data, 'data');
    console.log(config, 'config');

    const response = await $bankHost.delete(`/${userId}`, { data, ...config });

    if (response.status === 200) {
        if (response.data) {
            return response.data;
        }
        return response;

    } return false;
};

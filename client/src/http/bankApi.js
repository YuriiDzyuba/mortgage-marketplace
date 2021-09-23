import FormData from 'form-data';
import { $createNewBankHost, $getAllBanksHost } from './index';
import {
    BANK_AVATAR,
    BANK_NAME,
    INTEREST_RATE,
    LOAN_TERM,
    MAXIMUM_LOAN,
    MINIMUM_DOWN_PAYMENT,
} from '../consts/bankConsts';

// eslint-disable-next-line import/prefer-default-export
export const createNewBank = async (bankData) => {

    const data = new FormData();
    data.append(BANK_NAME, bankData[BANK_NAME]);
    data.append(INTEREST_RATE, bankData[INTEREST_RATE]);
    data.append(MAXIMUM_LOAN, bankData[MAXIMUM_LOAN]);
    data.append(MINIMUM_DOWN_PAYMENT, bankData[MINIMUM_DOWN_PAYMENT]);
    data.append(LOAN_TERM, bankData[LOAN_TERM]);
    data.append(BANK_AVATAR, bankData[BANK_AVATAR], BANK_AVATAR);

    const response = await $createNewBankHost.post('/', data, { headers: { 'Content-Type': 'multipart/form-data' } });

    return response.status === 200;
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

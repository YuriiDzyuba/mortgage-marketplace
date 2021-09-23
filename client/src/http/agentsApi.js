import { $getAllAgentsHost, $getCurrentAgentHost } from './index';

// eslint-disable-next-line import/prefer-default-export
export const getAgents = async () => {
    const response = await $getAllAgentsHost.get('/');

    if (response.status === 200) {
        if (response.data) {
            return response.data;
        }
        return response;

    } return false;
};

export const getAgent = async (agentId) => {
    const response = await $getCurrentAgentHost.get(`/${agentId}`);

    if (response.status === 200) {
        if (response.data) {
            return response.data;
        }
        return response;

    } return false;
};

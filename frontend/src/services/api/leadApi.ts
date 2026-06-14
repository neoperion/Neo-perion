import { apiClient } from './apiClient';

export const leadApi = {
  submitLead: async (leadData: any) => {
    const { data } = await apiClient.post('/leads', leadData);
    return data;
  },
  subscribeNewsletter: async (email: string) => {
    const { data } = await apiClient.post('/leads/newsletter', { email });
    return data;
  }
};

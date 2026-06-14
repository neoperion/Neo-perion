import { apiClient } from './apiClient';

export const authApi = {
  login: async (credentials: any) => {
    const { data } = await apiClient.post('/auth/login', credentials);
    return data;
  },
  logout: async () => {
    const { data } = await apiClient.post('/auth/logout');
    return data;
  },
  getSession: async () => {
    const { data } = await apiClient.get('/auth/session');
    return data;
  }
};

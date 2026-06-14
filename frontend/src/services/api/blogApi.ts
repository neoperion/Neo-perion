import { apiClient } from './apiClient';

export const blogApi = {
  getAllPosts: async () => {
    const { data } = await apiClient.get('/blogs');
    return data;
  },
  getPostBySlug: async (slug: string) => {
    const { data } = await apiClient.get(`/blogs/${slug}`);
    return data;
  },
  createPost: async (postData: any) => {
    const { data } = await apiClient.post('/blogs', postData);
    return data;
  }
};

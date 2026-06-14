import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';

export const useBlogs = (query: string = '', category: string = 'All') => {
  return useQuery({
    queryKey: ['blogs', query, category],
    queryFn: () => blogService.searchBlogs(query, category),
  });
};

export const useFeaturedBlogs = () => {
  return useQuery({
    queryKey: ['featuredBlogs'],
    queryFn: () => blogService.getFeaturedBlogs(),
  });
};

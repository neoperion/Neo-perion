import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';

export const useBlog = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
    queryFn: () => blogService.getBlogBySlug(slug),
    enabled: !!slug,
  });
};

export const useRelatedBlogs = (category: string, currentSlug: string) => {
  return useQuery({
    queryKey: ['relatedBlogs', category, currentSlug],
    queryFn: () => blogService.getRelatedBlogs(category, currentSlug),
    enabled: !!category && !!currentSlug,
  });
};

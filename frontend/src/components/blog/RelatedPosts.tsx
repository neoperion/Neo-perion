import React from 'react';
import { useRelatedBlogs } from '@/hooks/useBlog';
import { BlogCard } from './BlogCard';

interface Props {
  category: string;
  currentSlug: string;
}

export const RelatedPosts: React.FC<Props> = ({ category, currentSlug }) => {
  const { data: relatedBlogs, isLoading } = useRelatedBlogs(category, currentSlug);

  if (isLoading || !relatedBlogs || relatedBlogs.length === 0) return null;

  return (
    <div className="mt-20 pt-16 border-t border-white/10">
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-3xl font-display font-bold text-white mb-4">Related Articles</h2>
        <p className="text-slate-400">Read more from our {category} category.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedBlogs.map((blog, idx) => (
          <BlogCard key={blog.id} post={blog} index={idx} />
        ))}
      </div>
    </div>
  );
};

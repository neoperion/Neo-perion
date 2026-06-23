import React from 'react';
import { useRelatedBlogs } from '@/hooks/useBlog';
import { BlogCard } from './BlogCard';

interface Props {
  category: string;
  currentSlug: string;
  theme?: 'light' | 'dark';
}

export const RelatedPosts: React.FC<Props> = ({ category, currentSlug, theme = 'dark' }) => {
  const { data: relatedBlogs, isLoading } = useRelatedBlogs(category, currentSlug);
  const isLight = theme === 'light';

  if (isLoading || !relatedBlogs || relatedBlogs.length === 0) return null;

  return (
    <div className={`mt-20 border-t pt-16 ${isLight ? 'border-hairline' : 'border-white/10'}`}>
      <div className="mb-10">
        <p className={`font-mono text-[12px] font-semibold uppercase tracking-[0.1em] ${isLight ? 'text-brand' : 'text-neo-blue'}`}>
          Keep reading
        </p>
        <h2 className={`mt-2 font-display text-[28px] font-bold tracking-tight ${isLight ? 'text-ink' : 'text-white'}`}>
          More on {category}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {relatedBlogs.map((blog, idx) => (
          <BlogCard key={blog.id} post={blog} index={idx} theme={theme} />
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Blog } from '@/types/blog';
import { BlogCard } from './BlogCard';

interface Props {
  blogs: Blog[];
  theme?: 'light' | 'dark';
}

export const BlogGrid: React.FC<Props> = ({ blogs, theme = 'dark' }) => {
  const isLight = theme === 'light';

  if (!blogs || blogs.length === 0) {
    return (
      <div className="py-20 text-center">
        <h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-[#09090B]' : 'text-white'}`}>No articles found</h3>
        <p className={isLight ? 'text-neutral-400' : 'text-slate-400'}>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, idx) => (
        <BlogCard key={blog.id} post={blog} index={idx} theme={theme} />
      ))}
    </div>
  );
};

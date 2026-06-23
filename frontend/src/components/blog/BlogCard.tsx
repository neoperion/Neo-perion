import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';

interface Props {
  post: Blog;
  index?: number;
  theme?: 'light' | 'dark';
}

export const BlogCard: React.FC<Props> = ({ post, index = 0, theme = 'dark' }) => {
  if (theme === 'light') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06 }}
        className="group relative flex h-full flex-col border border-hairline bg-paper transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]"
      >
        <Link to={`/company/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />

        <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline">
          <img
            src={post.cover_image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-brand">
            {post.category}
          </span>
          <h3 className="mt-3 text-[19px] font-bold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 flex-grow text-[14px] leading-relaxed text-muted2 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center gap-2.5 border-t border-hairline pt-4 text-[12px] text-faint">
            <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
            <span className="h-1 w-1 rounded-full bg-hairline" />
            <span>{post.read_time} min read</span>
          </div>
        </div>
      </motion.article>
    );
  }

  // Dark (mobile / legacy)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/40 transition-all duration-300 hover:border-neo-blue/50"
    >
      <Link to={`/company/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-transparent" />
        <img
          src={post.cover_image}
          alt={post.title}
          className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-neo-blue backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-white transition-colors line-clamp-2 group-hover:text-neo-blue">
          {post.title}
        </h3>
        <p className="mb-6 flex-grow text-sm text-slate-400 line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {format(new Date(post.created_at), 'MMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.read_time} min read
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

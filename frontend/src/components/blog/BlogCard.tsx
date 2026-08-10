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
        className="manuscript-card group relative flex h-full flex-col bg-manuscript-parchmentLight border border-manuscript-parchmentDeep transition-all duration-300 hover:-translate-y-1 hover:border-manuscript-copper/40"
      >
        <Link to={`/company/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />

        <div className="relative aspect-[16/10] overflow-hidden border-b border-manuscript-parchmentDeep rounded-t-md">
          <img
            src={post.cover_image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-manuscript-copper">
            {post.category}
          </span>
          <h3 className="heading-manuscript mt-3 text-[20px] font-bold leading-snug tracking-tight transition-colors group-hover:text-manuscript-rustDeep line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 flex-grow text-[14px] leading-relaxed text-manuscript-inkMuted font-manuscriptBody line-clamp-2">
            {post.excerpt}
          </p>

          <div className="mt-5 flex items-center gap-2.5 border-t border-manuscript-parchmentDeep pt-4 text-[12px] font-manuscriptBody text-manuscript-inkSoft">
            <span>{format(new Date(post.created_at), 'MMM dd, yyyy')}</span>
            <span className="h-1 w-1 rounded-full bg-manuscript-parchmentDeep" />
            <span>{post.read_time} min read</span>
          </div>
        </div>
      </motion.article>
    );
  }

  // Dark (manuscript/rustDeep)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-manuscript-gold/20 bg-manuscript-ink/50 shadow-xl shadow-black/10 transition-all duration-300 hover:border-manuscript-gold/50 hover:-translate-y-1"
    >
      <Link to={`/company/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`} />
      <div className="relative aspect-video overflow-hidden border-b border-manuscript-gold/20">
        <div className="absolute inset-0 z-10 bg-manuscript-ink/30 transition-colors group-hover:bg-transparent" />
        <img
          src={post.cover_image}
          alt={post.title}
          className="h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 z-20">
          <span className="rounded-full bg-manuscript-ink/80 border border-manuscript-gold/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-manuscript-gold backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-manuscript-parchmentLight transition-colors line-clamp-2 group-hover:text-manuscript-gold">
          {post.title}
        </h3>
        <p className="mb-6 flex-grow text-sm text-manuscript-parchment/70 line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between border-t border-manuscript-gold/20 pt-4 text-[12px] text-manuscript-parchment/60">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-manuscript-gold/50" />
              {format(new Date(post.created_at), 'MMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-manuscript-gold/50" />
              {post.read_time} min read
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

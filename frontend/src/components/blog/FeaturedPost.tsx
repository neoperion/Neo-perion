import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Props {
  post: Blog;
  theme?: 'light' | 'dark';
}

export const FeaturedPost: React.FC<Props> = ({ post, theme = 'dark' }) => {
  if (theme === 'light') {
    return (
      <section className="pt-14">
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-brand">
          Featured
        </p>
        <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-ink">Lead story</h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group mt-8"
        >
          <Link
            to={`/company/blog/${post.slug}`}
            className="grid overflow-hidden border border-hairline bg-paper transition-all duration-300 hover:border-brand/40 hover:shadow-[0_28px_70px_rgba(15,23,42,0.10)] lg:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto">
              <img
                src={post.cover_image}
                alt={post.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.08em]">
                <span className="text-brand">{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-faint" />
                <span className="flex items-center gap-1.5 text-faint">
                  <Clock className="h-3.5 w-3.5" />
                  {post.read_time} min read
                </span>
              </div>

              <h3 className="mt-5 font-display text-[clamp(24px,2.6vw,38px)] font-bold leading-[1.1] tracking-tight text-ink transition-colors group-hover:text-brand">
                {post.title}
              </h3>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-body line-clamp-3">
                {post.excerpt}
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-brand">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>
          </Link>
        </motion.div>
      </section>
    );
  }

  // Dark (mobile / legacy)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative mb-16 w-full overflow-hidden rounded-[2rem] border border-white/10"
    >
      <div className="flex flex-col parchment-surface--deep/60 lg:flex-row">
        <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto lg:w-3/5">
          <div className="absolute inset-0 z-10 parchment-surface--deep/20 transition-colors group-hover:bg-transparent" />
          <img
            src={post.cover_image}
            alt={post.title}
            className="h-full w-full transform object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="relative z-20 flex w-full flex-col justify-center p-8 md:p-12 lg:w-2/5">
          <span className="mb-6 inline-block w-max rounded-full bg-neo-blue/10 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-neo-blue">
            Featured • {post.category}
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold leading-tight text-white transition-colors group-hover:text-neo-blue md:text-4xl">
            {post.title}
          </h2>
          <p className="mb-8 text-lg text-slate-400 line-clamp-3">{post.excerpt}</p>
          <div className="mb-8 flex items-center gap-6 text-sm text-neutral-400">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(new Date(post.created_at), 'MMMM dd, yyyy')}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.read_time} min read
            </span>
          </div>
          <Link
            to={`/company/blog/${post.slug}`}
            className="inline-flex w-max items-center gap-2 rounded-xl bg-neo-blue px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600"
          >
            Read Article
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

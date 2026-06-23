import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Blog } from '@/types/blog';
import { ArrowRight, ArrowUpRight, TrendingUp, Clock } from 'lucide-react';

interface Props {
  featured: Blog;
  latest: Blog;
  trending: Blog[];
  categories: string[];
  onCategoryChange: (category: string) => void;
}

const tile = 'border border-hairline bg-paper';

export const BlogBento: React.FC<Props> = ({ featured, latest, trending, categories, onCategoryChange }) => {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-canvas pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#D7DCE5_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        {/* Masthead */}
        <div className="mb-9 max-w-3xl">
          <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">Blog &amp; Insights</p>
          <h1 className="mt-3 font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.02em] text-ink">
            Engineering notes on <span className="text-brand">AI, products &amp; scale</span>
          </h1>
        </div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 lg:auto-rows-fr lg:grid-cols-3"
        >
          {/* Featured — big image tile */}
          <Link
            to={`/company/blog/${featured.slug}`}
            className="group relative col-span-1 row-span-2 min-h-[22rem] overflow-hidden border border-hairline bg-navy md:col-span-2"
          >
            <img
              src={featured.cover_image}
              alt={featured.title}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8FB8FF]">
                Featured · {featured.category}
              </span>
              <h2 className="mt-3 max-w-xl font-display text-[clamp(22px,2.4vw,32px)] font-bold leading-[1.12] tracking-tight text-white">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-white/75 line-clamp-2">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Latest — text tile */}
          <Link
            to={`/company/blog/${latest.slug}`}
            className={`group flex min-h-[10.5rem] flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_18px_44px_rgba(15,23,42,0.07)] ${tile}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">Latest</span>
              <ArrowUpRight className="h-4 w-4 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
            </div>
            <div>
              <h3 className="text-[16px] font-bold leading-snug tracking-tight text-ink transition-colors line-clamp-3 group-hover:text-brand">
                {latest.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-faint">
                <span className="font-medium uppercase tracking-wide text-brand/80">{latest.category}</span>
                <span className="h-1 w-1 rounded-full bg-hairline" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {latest.read_time} min
                </span>
              </div>
            </div>
          </Link>

          {/* Trending — mini list tile */}
          <div className={`flex min-h-[10.5rem] flex-col p-6 ${tile}`}>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-brand" strokeWidth={2.25} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-brand">Trending</span>
            </div>
            <ol className="mt-4 space-y-3">
              {trending.slice(0, 3).map((post, i) => (
                <li key={post.id}>
                  <Link to={`/company/blog/${post.slug}`} className="group flex items-start gap-3">
                    <span className="pt-0.5 font-mono text-[12px] font-semibold text-faint">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[13px] font-medium leading-snug text-ink transition-colors line-clamp-2 group-hover:text-brand">
                      {post.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

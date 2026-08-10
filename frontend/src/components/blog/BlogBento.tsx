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

const tile = 'border border-manuscript-parchmentDeep bg-manuscript-parchmentLight';

export const BlogBento: React.FC<Props> = ({ featured, latest, trending, categories, onCategoryChange }) => {
  return (
    <section className="relative overflow-hidden border-b border-manuscript-parchmentDeep parchment-surface pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(91,58,31,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        {/* Masthead */}
        <div className="mb-9 max-w-3xl">
          <p className="chapter-eyebrow mb-6">Blog &amp; Insights</p>
          <h1 className="heading-manuscript text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.04] tracking-[-0.02em] text-manuscript-ink">
            Engineering notes on <span className="heading-manuscript--italic text-manuscript-copper">AI, products &amp; scale</span>
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
            className="group relative col-span-1 row-span-2 min-h-[22rem] overflow-hidden rounded-md border border-manuscript-parchmentDeep bg-manuscript-walnutDeep md:col-span-2"
          >
            <img
              src={featured.cover_image}
              alt={featured.title}
              loading="eager"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-manuscript-walnutDeep via-manuscript-walnutDeep/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-manuscript-parchmentWarm">
                Featured · {featured.category}
              </span>
              <h2 className="mt-3 max-w-xl heading-manuscript text-[clamp(22px,2.4vw,32px)] leading-[1.12] text-manuscript-parchmentLight">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-md text-[14px] leading-relaxed text-manuscript-parchmentLight/80 line-clamp-2 font-manuscriptBody">
                {featured.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-manuscript-copper">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>

          {/* Latest — text tile */}
          <Link
            to={`/company/blog/${latest.slug}`}
            className={`manuscript-card group flex min-h-[10.5rem] flex-col justify-between p-6 ${tile}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-manuscript-copperMuted">Latest</span>
              <ArrowUpRight className="h-4 w-4 text-manuscript-inkMuted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-manuscript-rustDeep" />
            </div>
            <div>
              <h3 className="heading-manuscript text-[20px] leading-snug text-manuscript-ink transition-colors line-clamp-3 group-hover:text-manuscript-rustDeep">
                {latest.title}
              </h3>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-manuscript-inkMuted font-manuscriptBody">
                <span className="font-medium uppercase tracking-wide text-manuscript-copper">{latest.category}</span>
                <span className="h-1 w-1 rounded-full bg-manuscript-parchmentDeep" />
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {latest.read_time} min
                </span>
              </div>
            </div>
          </Link>

          {/* Trending — mini list tile */}
          <div className={`manuscript-card flex min-h-[10.5rem] flex-col p-6 ${tile}`}>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-manuscript-copper" strokeWidth={2.25} />
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-manuscript-copperMuted">Trending</span>
            </div>
            <ol className="mt-4 space-y-3">
              {trending.slice(0, 3).map((post, i) => (
                <li key={post.id}>
                  <Link to={`/company/blog/${post.slug}`} className="group flex items-start gap-3">
                    <span className="pt-0.5 font-mono text-[11px] font-semibold text-manuscript-copperMuted">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[14px] font-manuscriptBody leading-snug text-manuscript-ink transition-colors line-clamp-2 group-hover:text-manuscript-rustDeep">
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

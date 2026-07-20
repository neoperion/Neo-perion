import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bookmark, Share2, List, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface BlogPostCardData { slug: string; title: string; excerpt: string; category: string; readTime: number; coverImage?: string; author?: string }

export function BlogPostCard({ post }: { post: BlogPostCardData }) {
  return (
    <Link to={`/blog/${post.slug}`} className="group relative block rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 overflow-hidden active:scale-[0.99] transition-transform">
      {post.coverImage && (
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={post.coverImage} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#030B1D] via-transparent to-transparent" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[rgba(15,23,42,0.78)] backdrop-blur-glass-2 border border-white/[0.18] text-[10px] font-bold uppercase tracking-[0.12em] text-white">{post.category}</span>
        </div>
      )}
      <div className="p-4">
        <h3 className="text-[16px] font-bold text-white leading-tight line-clamp-2 group-hover:text-neo-highlight transition-colors">{post.title}</h3>
        <p className="text-[12px] text-white/60 mt-1.5 line-clamp-2 leading-relaxed">{post.excerpt}</p>
        <div className="mt-3 flex items-center justify-between text-[11px] text-white/50"><span>Neo Perion Solutions</span><span>{post.readTime} min read</span></div>
      </div>
    </Link>
  );
}

export function BlogCategoryFilter({ categories, active, onChange }: { categories: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div className="px-mobile-base pt-2">
      <div className="flex gap-2 overflow-x-auto snap-x-mobile scrollbar-hide pb-2">
        {categories.map((c) => (
          <button key={c} type="button" onClick={() => onChange(c)}
            className={cn('shrink-0 h-9 px-4 rounded-full text-[12px] font-semibold snap-center transition-all',
              active === c ? 'bg-gradient-to-br from-neo-blue to-neo-highlight text-white shadow-[0_4px_16px_rgba(247,126,13,0.3)]' : 'bg-white/[0.06] border border-white/[0.10] backdrop-blur-glass-1 text-white/75')}>{c}</button>
        ))}
      </div>
    </div>
  );
}

export interface BlogReaderProps { title: string; author: string; publishedAt: string; readTime: number; coverImage?: string; content: string; toc?: { id: string; label: string }[] }

export function BlogReader({ title, author, publishedAt, readTime, coverImage, content, toc }: BlogReaderProps) {
  const [progress, setProgress] = useState(0); const [tocOpen, setTocOpen] = useState(false); const [bookmarked, setBookmarked] = useState(false);
  useEffect(() => {
    const onScroll = () => { const doc = document.documentElement; const total = doc.scrollHeight - window.innerHeight; setProgress(total > 0 ? Math.min(window.scrollY / total, 1) : 0); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll(); return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <article className="relative w-full pb-mobile-4xl">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-mobile-toast pointer-events-none">
        <div className="h-full bg-gradient-to-r from-neo-blue to-neo-highlight shadow-[0_0_8px_rgba(247,126,13,0.6)] transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
      </div>
      <header className="px-mobile-base pt-safe-or-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <Link to="/company/blog" className="inline-flex items-center gap-1 text-[12px] text-neo-highlight font-semibold"><ArrowRight size={14} className="rotate-180" /> All Posts</Link>
          <div className="flex items-center gap-2">
            <button type="button" aria-label="Bookmark" onClick={() => setBookmarked((b) => !b)}
              className={cn('h-9 w-9 rounded-full flex items-center justify-center border transition-colors', bookmarked ? 'bg-neo-highlight/15 border-neo-highlight/30 text-neo-highlight' : 'bg-white/[0.05] border-white/[0.10] text-white/70')}>
              <Bookmark size={14} className={bookmarked ? 'fill-neo-highlight' : ''} />
            </button>
            <button type="button" aria-label="Share" className="h-9 w-9 rounded-full bg-white/[0.05] border border-white/[0.10] text-white/70 flex items-center justify-center"><Share2 size={14} /></button>
            {toc && toc.length > 0 && (
              <button type="button" aria-label="Table of contents" onClick={() => setTocOpen(true)} className="h-9 w-9 rounded-full bg-white/[0.05] border border-white/[0.10] text-white/70 flex items-center justify-center"><List size={14} /></button>
            )}
          </div>
        </div>
        <h1 className="text-display-lg text-white tracking-tight leading-tight">{title}</h1>
        <div className="mt-4 flex items-center gap-3 text-[12px] text-white/60"><span className="font-semibold text-white">{author}</span><span>·</span><span>{publishedAt}</span><span>·</span><span>{readTime} min read</span></div>
      </header>
      {coverImage && <div className="relative aspect-[16/9] mx-mobile-base rounded-3xl overflow-hidden border border-white/[0.10] mb-7"><img src={coverImage} alt="" className="w-full h-full object-cover" /></div>}
      <div className="px-mobile-base"><div className="prose prose-invert prose-sm max-w-none text-[15px] leading-[1.75] text-white/85" dangerouslySetInnerHTML={{ __html: content }} /></div>
      {tocOpen && toc && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-mobile-overlay bg-black/60 backdrop-blur-glass-2" onClick={() => setTocOpen(false)}>
          <motion.aside initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 320, damping: 32 }} onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 rounded-t-[28px] bg-[rgba(2,4,10,0.92)] backdrop-blur-glass-3 border-t border-white/[0.14] p-5 pb-safe"
          >
            <div className="flex justify-center mb-4"><span className="h-1 w-10 rounded-full bg-white/30" /></div>
            <div className="flex items-center justify-between mb-4"><h2 className="text-sm font-bold text-white uppercase tracking-[0.18em]">Contents</h2>
              <button onClick={() => setTocOpen(false)} className="h-8 w-8 rounded-full bg-white/[0.06] text-white/70 flex items-center justify-center"><X size={14} /></button>
            </div>
            <ul className="space-y-1">{toc.map((t) => (<li key={t.id}><a href={`#${t.id}`} onClick={() => setTocOpen(false)} className="block px-3 py-3 rounded-xl text-[14px] text-white/80 hover:bg-white/[0.06] transition-colors">{t.label}</a></li>))}</ul>
          </motion.aside>
        </motion.div>
      )}
    </article>
  );
}

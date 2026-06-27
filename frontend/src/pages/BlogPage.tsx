import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogBento } from '@/components/blog/BlogBento';
import { BlogSearch } from '@/components/blog/BlogSearch';
import { BlogFilters } from '@/components/blog/BlogFilters';
import { FeaturedPost } from '@/components/blog/FeaturedPost';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { useBlogs, useFeaturedBlogs } from '@/hooks/useBlogs';
import { MobileGate, MobileShell } from '@/components/mobile';

const CATEGORIES = [
  'All',
  'AI',
  'Startups',
  'Automation',
  'SaaS',
  'Technology',
  'Engineering',
  'Product Development'
];

const POSTS_PER_PAGE = 9;

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const { data: blogs = [], isLoading: blogsLoading } = useBlogs(searchQuery, activeCategory);
  const { data: featuredBlogs = [] } = useFeaturedBlogs();

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, activeCategory]);

  const featuredPost = featuredBlogs[0];

  // Top 3 for the bento "Trending" rail (featured first, then latest; deduped)
  const trending = useMemo(() => {
    const seen = new Set<string>();
    const out: typeof blogs = [];
    for (const b of [...featuredBlogs, ...blogs]) {
      if (b && !seen.has(b.id)) {
        seen.add(b.id);
        out.push(b);
      }
      if (out.length === 3) break;
    }
    return out;
  }, [featuredBlogs, blogs]);

  // Bento hero needs a featured + a distinct "latest"
  const heroFeatured = featuredPost || blogs[0];
  const heroLatest = blogs.find((b) => b.id !== heroFeatured?.id) || heroFeatured;

  // Calculate Pagination
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [blogs, currentPage]);

  const isFiltering = searchQuery !== '' || activeCategory !== 'All';

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Neo Perion Blog & Insights",
    "description": "Thoughts, guides and industry insights from the Neo Perion engineering team on AI, Product Development, and SaaS.",
    "publisher": {
      "@type": "Organization",
      "name": "Neo Perion Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.neoperion.com/images/np-logo.png"
      }
    }
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-canvas font-sans text-ink selection:bg-brand/20">
        <SEO
          title="Blog & Insights | AI, SaaS & Product Engineering | Neo Perion"
          description="Thoughts, guides and industry insights from the Neo Perion engineering team on AI, Product Development, and SaaS."
          url="https://www.neoperion.com/company/blog"
          jsonLd={[
            blogListSchema,
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.neoperion.com/"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.neoperion.com/company/blog"
              }]
            }
          ]}
        />
        <Header />

        <main>
          {!isFiltering && heroFeatured ? (
            <BlogBento
              featured={heroFeatured}
              latest={heroLatest}
              trending={trending}
              categories={CATEGORIES}
              onCategoryChange={setActiveCategory}
            />
          ) : (
            <section className="relative overflow-hidden border-b border-hairline bg-canvas pb-12 pt-36">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,#D7DCE5_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />
              <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-brand">Blog &amp; Insights</p>
                <h1 className="mt-3 font-display text-[clamp(30px,3.5vw,44px)] font-bold tracking-tight text-ink">
                  {searchQuery ? `Results for "${searchQuery}"` : activeCategory}
                </h1>
              </div>
            </section>
          )}

          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            {/* Sticky filter + search bar */}
            <div className="sticky top-[76px] z-30 -mx-6 mt-16 border-y border-hairline bg-canvas/90 px-6 py-4 backdrop-blur-xl lg:-mx-8 lg:px-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <BlogFilters
                  categories={CATEGORIES}
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  theme="light"
                />
                <BlogSearch onSearch={setSearchQuery} theme="light" />
              </div>
            </div>

            <section className="py-14">
              <div className="mb-8 flex items-baseline justify-between">
                <h2 className="font-display text-xl font-bold tracking-tight text-ink">
                  {isFiltering ? 'Results' : 'All articles'}
                </h2>
                <span className="text-[13px] text-faint">
                  {blogs.length} article{blogs.length === 1 ? '' : 's'}
                </span>
              </div>

              {blogsLoading ? (
                <div className="flex items-center justify-center py-32">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
                </div>
              ) : (
                <>
                  <BlogGrid blogs={paginatedBlogs} theme="light" />
                  <BlogPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                    theme="light"
                  />
                </>
              )}
            </section>
          </div>

          {/* Newsletter CTA */}
          <section className="border-t border-hairline bg-paper">
            <div className="mx-auto w-full max-w-[1200px] px-6 py-16 lg:px-8">
              <div className="relative overflow-hidden border border-navy/40 bg-navy px-8 py-12 lg:px-14 lg:py-16">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_15%,rgba(247,126,13,0.25),transparent_55%)]" />
                <div className="relative max-w-xl">
                  <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-[#8FB8FF]">
                    Newsletter
                  </p>
                  <h2 className="mt-2 font-display text-[clamp(26px,3vw,40px)] font-bold leading-tight text-white">
                    Engineering notes, straight to your inbox
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/70">
                    No noise — just our best writing on AI, product, and scale, about twice a month.
                  </p>
                  <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex max-w-md flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="flex-1 border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-brand"
                    />
                    <button
                      type="submit"
                      className="bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="mt-3 text-[12px] text-white/40">We respect your inbox. Unsubscribe anytime.</p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <div className="px-mobile-base pt-8">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Blog</p>
            <h1 className="text-display-lg text-white tracking-tight">Insights & Engineering.</h1>
            <p className="text-base text-white/70 mt-3">Deep-dives from our engineering team.</p>
          </div>
          {!isFiltering && featuredPost && <FeaturedPost post={featuredPost} theme="dark" />}
          <BlogSearch onSearch={setSearchQuery} theme="dark" />
          <BlogFilters categories={CATEGORIES} activeCategory={activeCategory} onCategoryChange={setActiveCategory} theme="dark" />
          {blogsLoading ? (
            <div className="py-20 flex justify-center"><div className="w-7 h-7 rounded-full border-2 border-neo-blue/30 border-t-neo-blue animate-spin" /></div>
          ) : (
            <div className="px-mobile-base"><BlogGrid blogs={paginatedBlogs} theme="dark" /></div>
          )}
          <BlogPagination currentPage={currentPage} totalPages={Math.ceil(blogs.length / POSTS_PER_PAGE)} onPageChange={setCurrentPage} theme="dark" />
        </div>
      </MobileShell>
    </MobileGate>
  );
};

export default BlogPage;

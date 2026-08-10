import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { seoConfig } from '@/lib/seoConfig';
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
import { SITE_URL } from '@/lib/seo';

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
    "name": "AINCURU Blog & Insights",
    "description": "Thoughts, guides and industry insights from the AINCURU engineering team on AI, Product Development, and SaaS.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.aincuru.com/#organization",
      "name": "AINCURU LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.aincuru.com/images/np-logo.png"
      }
    }
  };

  return (
      <div className="manuscript-root min-h-screen parchment-surface selection:bg-manuscript-copper/20">
      
        <SEO {...seoConfig.blog} />
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
            <section className="relative overflow-hidden border-b border-manuscript-parchmentDeep parchment-surface pb-12 pt-36">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(91,58,31,0.08)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25 [mask-image:radial-gradient(ellipse_at_top,black,transparent_80%)]" />
              <div className="relative mx-auto w-full max-w-[1200px] px-6 lg:px-8">
                <p className="chapter-eyebrow mb-6">Blog &amp; Insights</p>
                <h1 className="mt-3 heading-manuscript text-[clamp(30px,3.5vw,44px)] font-bold tracking-tight text-manuscript-ink">
                  {searchQuery ? `Results for "${searchQuery}"` : activeCategory}
                </h1>
              </div>
            </section>
          )}

          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            {/* Sticky filter + search bar */}
            <div className="sticky top-[76px] z-30 -mx-6 mt-16 border-y border-manuscript-parchmentDeep bg-manuscript-parchment/90 px-6 py-4 backdrop-blur-xl lg:-mx-8 lg:px-8">
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
                <h2 className="heading-manuscript text-2xl tracking-tight text-manuscript-ink">
                  {isFiltering ? 'Results' : 'All articles'}
                </h2>
                <span className="text-[13px] font-manuscriptBody text-manuscript-inkMuted">
                  {blogs.length} article{blogs.length === 1 ? '' : 's'}
                </span>
              </div>

              {blogsLoading ? (
                <div className="flex items-center justify-center py-32">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-manuscript-copper/20 border-t-manuscript-copper" />
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


        </main>
        <Footer />
      </div>
  );
};

export default BlogPage;




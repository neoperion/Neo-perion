import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BlogHero } from '@/components/blog/BlogHero';
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

const POSTS_PER_PAGE = 10;

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
  
  // Calculate Pagination
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [blogs, currentPage]);

  const isFiltering = searchQuery !== '' || activeCategory !== 'All';

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-[#050816] min-h-screen font-sans text-slate-200">
        <SEO title="Blog & Insights | Neo Perion Solutions" description="Thoughts, guides and industry insights from the Neo Perion engineering team on AI, Product Development, and SaaS." url="https://www.neoperion.com/blog" />
        <Header />
        <main>
        <BlogHero />
        
        <div className="container mx-auto px-4 md:px-6 py-12">
          {!isFiltering && featuredPost && (
            <FeaturedPost post={featuredPost} />
          )}

          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 border-t border-white/10 pt-12">
            <BlogFilters 
              categories={CATEGORIES} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
            <BlogSearch onSearch={setSearchQuery} />
          </div>

          {blogsLoading ? (
            <div className="py-32 flex justify-center items-center">
              <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
            </div>
          ) : (
            <>
              <BlogGrid blogs={paginatedBlogs} />
              <BlogPagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
              />
            </>
          )}
        </div>
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
          {!isFiltering && featuredPost && <FeaturedPost post={featuredPost} />}
          <BlogSearch onSearch={setSearchQuery} />
          <BlogFilters categories={CATEGORIES} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          {blogsLoading ? (
            <div className="py-20 flex justify-center"><div className="w-7 h-7 rounded-full border-2 border-neo-blue/30 border-t-neo-blue animate-spin" /></div>
          ) : (
            <div className="px-mobile-base"><BlogGrid blogs={paginatedBlogs} /></div>
          )}
          <BlogPagination currentPage={currentPage} totalPages={Math.ceil(blogs.length / POSTS_PER_PAGE)} onPageChange={setCurrentPage} />
        </div>
      </MobileShell>
    </MobileGate>
  );
};

export default BlogPage;

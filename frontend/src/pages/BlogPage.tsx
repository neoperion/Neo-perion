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
      <div className="bg-[#FAFAFA] min-h-[auto] font-sans text-[#09090B] selection:bg-neo-blue/20">
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
        
        <main className="pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          
          <BlogHero theme="light" />
          
          <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
            {!isFiltering && featuredPost && (
              <FeaturedPost post={featuredPost} theme="light" />
            )}

            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 border-t border-zinc-200 pt-12">
              <BlogFilters 
                categories={CATEGORIES} 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
                theme="light"
              />
              <BlogSearch onSearch={setSearchQuery} theme="light" />
            </div>

            {blogsLoading ? (
              <div className="py-32 flex justify-center items-center">
                <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
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


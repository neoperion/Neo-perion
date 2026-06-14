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
    <div className="bg-[#050816] min-h-screen font-sans text-slate-200">
      <SEO 
        title="Blog & Insights | Neo Perion Solutions"
        description="Thoughts, guides and industry insights from the Neo Perion engineering team on AI, Product Development, and SaaS."
        url="https://www.neoperion.com/blog"
      />
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
              <div className="w-8 h-8 rounded-full border-4 border-cyan-500/20 border-t-cyan-500 animate-spin" />
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
  );
};

export default BlogPage;

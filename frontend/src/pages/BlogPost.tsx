import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useBlog } from '@/hooks/useBlog';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: blog, isLoading } = useBlog(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
        <p className="text-slate-400 mb-8">The article you are looking for does not exist.</p>
        <button onClick={() => navigate('/blog')} className="px-6 py-3 bg-neo-blue text-slate-900 rounded-lg font-bold">
          Back to Blog
        </button>
      </div>
    );
  }

  const postUrl = `https://www.neoperion.com/blog/${blog.slug}`;

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.seo_title,
    "description": blog.seo_description,
    "image": blog.cover_image,
    "datePublished": blog.created_at,
    "dateModified": blog.updated_at,
    "author": {
      "@type": "Person",
      "name": blog.author
    },
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
    <div className="bg-[#050816] min-h-screen font-sans text-slate-200">
      <SEO 
        title={`${blog.seo_title} | Neo Perion`}
        description={blog.seo_description}
        url={postUrl}
        ogImage={blog.cover_image}
        type="article"
        jsonLd={blogSchema}
      />
      
      <ReadingProgress />
      <Header />

      <main className="pt-32 pb-24">
        {/* Article Hero */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-slate-400 hover:text-neo-blue transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Articles
          </button>

          <div className="mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 text-neo-blue text-sm font-bold rounded-full uppercase tracking-widest mb-6">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <span className="font-medium text-white">{blog.author}</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {blog.read_time} min read
              </span>
            </div>
          </div>

          <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 mb-16">
            <img 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content & TOC */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar TOC */}
            <div className="w-full lg:w-1/4 order-2 lg:order-1">
              <TableOfContents content={blog.content} />
            </div>
            
            {/* Main Content */}
            <div className="w-full lg:w-3/4 order-1 lg:order-2">
              <MarkdownRenderer content={blog.content} />
              <ShareButtons url={postUrl} title={blog.title} />
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <RelatedPosts category={blog.category} currentSlug={blog.slug} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;

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
import { MobileGate, MobileShell } from '@/components/mobile';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: blog, isLoading } = useBlog(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-[auto] bg-[#FAFAFA] flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-neo-blue/20 border-t-neo-blue animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[auto] bg-[#FAFAFA] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-[#09090B] mb-4">Post Not Found</h1>
        <p className="text-slate-500 mb-8">The article you are looking for does not exist.</p>
        <button onClick={() => navigate('/company/blog')} className="px-6 py-3 bg-neo-blue text-white rounded-lg font-bold">
          Back to Blog
        </button>
      </div>
    );
  }

  const postUrl = `https://www.neoperion.com/company/blog/${blog.slug}`;

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
    <MobileGate mobileOnly fallback={
      <div className="bg-[#FAFAFA] min-h-[auto] font-sans text-[#09090B] selection:bg-neo-blue/20">
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

        <main className="pt-36 pb-24 relative overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* Article Hero */}
          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
            <button 
              onClick={() => navigate('/company/blog')}
              className="flex items-center gap-2 text-slate-500 hover:text-neo-blue transition-colors mb-8 group font-medium text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Articles
            </button>

            <div className="mb-12">
              <span className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 text-neo-blue text-xs font-bold rounded-full uppercase tracking-widest mb-6">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#09090B] mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                <span className="font-semibold text-slate-800">{blog.author}</span>
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

            <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-zinc-200/80 mb-16 shadow-sm">
              <img 
                src={blog.cover_image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content & TOC */}
          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar TOC */}
              <div className="w-full lg:w-1/4 order-2 lg:order-1">
                <TableOfContents content={blog.content} theme="light" />
              </div>
              
              {/* Main Content */}
              <div className="w-full lg:w-3/4 order-1 lg:order-2">
                <MarkdownRenderer content={blog.content} theme="light" />
                <ShareButtons url={postUrl} title={blog.title} theme="light" />
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
            <RelatedPosts category={blog.category} currentSlug={blog.slug} theme="light" />
          </div>
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <ReadingProgress />
        <div className="w-full pb-8 pt-8 px-6">
          <button 
            onClick={() => navigate('/company/blog')}
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors mb-6 text-sm font-bold uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            Back
          </button>
          
          <span className="inline-block px-3 py-1 bg-neo-blue/10 border border-neo-blue/20 text-neo-blue text-[11px] font-bold rounded-lg uppercase tracking-widest mb-4">
            {blog.category}
          </span>
          
          <h1 className="text-display-sm text-white tracking-tight mb-4">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50 mb-8 border-b border-white/10 pb-6">
            <span className="font-bold text-white">{blog.author}</span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {format(new Date(blog.created_at), 'MMM dd, yyyy')}
            </span>
          </div>

          <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 mb-8">
            <img 
              src={blog.cover_image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-mobile max-w-none">
            <MarkdownRenderer content={blog.content} theme="dark" />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <ShareButtons url={postUrl} title={blog.title} theme="dark" />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <RelatedPosts category={blog.category} currentSlug={blog.slug} theme="dark" />
          </div>
        </div>
      </MobileShell>
    </MobileGate>
  );
};

export default BlogPost;


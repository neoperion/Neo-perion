import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useBlog } from '@/hooks/useBlog';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { ReadingProgress } from '@/components/blog/ReadingProgress';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { MarkdownRenderer } from '@/components/blog/MarkdownRenderer';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { MobileGate, MobileShell } from '@/components/mobile';
import { motion } from 'framer-motion';
import { SITE_URL } from '@/lib/seo';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: blog, isLoading } = useBlog(slug || '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-manuscript-rustDeep">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-manuscript-gold/20 border-t-manuscript-gold" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-manuscript-rustDeep px-4 text-center">
        <h1 className="mb-3 font-display text-4xl font-bold text-manuscript-parchmentLight">Post not found</h1>
        <p className="mb-8 text-manuscript-parchment/70">The article you are looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/company/blog')}
          className="bg-manuscript-gold px-6 py-3 text-sm font-bold text-manuscript-ink transition-colors hover:bg-manuscript-gold/90"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const postUrl = `${SITE_URL}/company/blog/${blog.slug}`;
  const BRAND_AUTHOR = "AINCURU LLP — Engineering Team";
  const authorInitial = 'N';

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl },
    "headline": blog.seo_title || blog.title,
    "description": blog.seo_description || blog.content.substring(0, 160),
    "image": blog.cover_image,
    "datePublished": blog.created_at,
    "dateModified": blog.updated_at,
    "publisher": {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "AINCURU LLP",
      "logo": { "@type": "ImageObject", "url": `${SITE_URL}/images/np-logo.png` }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/company/blog` },
      { "@type": "ListItem", "position": 3, "name": blog.title, "item": postUrl }
    ]
  };

  return (
    <>
      <SEO
        title={`${blog.seo_title || blog.title} | AINCURU`}
        description={blog.seo_description}
        url={postUrl}
        ogImage={blog.cover_image}
        type="article"
        jsonLd={[blogSchema, breadcrumbSchema]}
      />
        <div className="min-h-screen bg-manuscript-rustDeep font-sans text-manuscript-parchmentLight selection:bg-manuscript-gold/20">
          <ReadingProgress />
          <Header />

          <main className="pb-24 pt-32">
            {/* Article header */}
            <header className="mx-auto max-w-[760px] px-6">
              <button
                onClick={() => navigate('/company/blog')}
                className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-manuscript-parchment/60 transition-colors hover:text-manuscript-gold"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back to Articles
              </button>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-manuscript-gold"
              >
                {blog.category}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-4 font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-0.02em] text-manuscript-parchmentLight"
              >
                {blog.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-manuscript-gold/20 pt-6 text-sm text-manuscript-parchment/60"
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-manuscript-gold/10 text-[12px] font-bold text-manuscript-gold">
                    {authorInitial}
                  </span>
                  <span className="font-semibold text-manuscript-parchmentLight">{BRAND_AUTHOR}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-manuscript-gold/50" />
                  {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-manuscript-gold/50" />
                  {blog.read_time} min read
                </span>
              </motion.div>
            </header>

            {/* Cover */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-10 max-w-[1000px] px-6"
            >
              <div className="aspect-video w-full overflow-hidden border border-manuscript-gold/20 rounded-2xl bg-manuscript-ink/50 shadow-xl shadow-black/10">
                <img src={blog.cover_image} alt={blog.title} className="h-full w-full object-cover" />
              </div>
            </motion.div>

            {/* Body + floating TOC (margin on wide screens) */}
            <div className="relative mx-auto mt-16 max-w-[760px] px-6">
              <aside className="absolute right-full top-0 hidden h-full pr-10 xl:block">
                <div className="sticky top-28 w-60">
                  <TableOfContents content={blog.content} theme="dark" />
                </div>
              </aside>

              <MarkdownRenderer content={blog.content} theme="dark" />
              <ShareButtons url={postUrl} title={blog.title} theme="dark" />

              {/* End-of-article CTA */}
              <div className="relative mt-12 overflow-hidden border border-manuscript-gold/20 rounded-2xl bg-manuscript-ink/50 p-8 lg:p-10 shadow-xl shadow-black/10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(182,138,53,0.15),transparent_55%)]" />
                <div className="relative">
                  <h3 className="font-display text-[24px] font-bold leading-tight text-manuscript-parchmentLight">
                    Build it with AINCURU
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-manuscript-parchment/80">
                    Turn your idea into a scalable, AI-powered product. We partner with teams to design,
                    build, and ship — start to finish.
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-manuscript-gold px-6 py-3 text-sm font-bold text-manuscript-ink transition-colors hover:bg-manuscript-gold/90 shadow-lg shadow-black/10"
                  >
                    Discuss your project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="mx-auto mt-8 max-w-[1080px] px-6">
              <RelatedPosts category={blog.category} currentSlug={blog.slug} theme="dark" />
            </div>
          </main>

          <Footer />
        </div>
    </>
  );
};

export default BlogPost;


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
      <div className="flex min-h-screen items-center justify-center bg-canvas">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand/20 border-t-brand" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-canvas px-4 text-center">
        <h1 className="mb-3 font-display text-4xl font-bold text-ink">Post not found</h1>
        <p className="mb-8 text-body">The article you are looking for doesn't exist.</p>
        <button
          onClick={() => navigate('/company/blog')}
          className="bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const postUrl = `${SITE_URL}/company/blog/${blog.slug}`;
  const BRAND_AUTHOR = "Neo Perion Solutions — Engineering Team";
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
      "name": "Neo Perion Solutions",
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
        title={`${blog.seo_title || blog.title} | Neo Perion`}
        description={blog.seo_description}
        url={postUrl}
        ogImage={blog.cover_image}
        type="article"
        jsonLd={[blogSchema, breadcrumbSchema]}
      />
      <MobileGate mobileOnly fallback={
        <div className="min-h-screen bg-canvas font-sans text-ink selection:bg-brand/20">
          <ReadingProgress />
          <Header />

          <main className="pb-24 pt-32">
            {/* Article header */}
            <header className="mx-auto max-w-[760px] px-6">
              <button
                onClick={() => navigate('/company/blog')}
                className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted2 transition-colors hover:text-brand"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                Back to Articles
              </button>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-[12px] font-semibold uppercase tracking-[0.1em] text-brand"
              >
                {blog.category}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="mt-4 font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.06] tracking-[-0.02em] text-ink"
              >
                {blog.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-hairline pt-6 text-sm text-muted2"
              >
                <span className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-[12px] font-bold text-brand">
                    {authorInitial}
                  </span>
                  <span className="font-semibold text-ink">{BRAND_AUTHOR}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-faint" />
                  {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-faint" />
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
              <div className="aspect-video w-full overflow-hidden border border-hairline bg-canvas">
                <img src={blog.cover_image} alt={blog.title} className="h-full w-full object-cover" />
              </div>
            </motion.div>

            {/* Body + floating TOC (margin on wide screens) */}
            <div className="relative mx-auto mt-16 max-w-[760px] px-6">
              <aside className="absolute right-full top-0 hidden h-full pr-10 xl:block">
                <div className="sticky top-28 w-60">
                  <TableOfContents content={blog.content} theme="light" />
                </div>
              </aside>

              <MarkdownRenderer content={blog.content} theme="light" />
              <ShareButtons url={postUrl} title={blog.title} theme="light" />

              {/* End-of-article CTA */}
              <div className="relative mt-12 overflow-hidden border border-hairline bg-navy p-8 lg:p-10">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(247,126,13,0.25),transparent_55%)]" />
                <div className="relative">
                  <h3 className="font-display text-[24px] font-bold leading-tight text-white">
                    Build it with Neo Perion
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/70">
                    Turn your idea into a scalable, AI-powered product. We partner with teams to design,
                    build, and ship — start to finish.
                  </p>
                  <button
                    onClick={() => navigate('/contact')}
                    className="group mt-6 inline-flex items-center gap-2 bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand/90"
                  >
                    Discuss your project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Related */}
            <div className="mx-auto mt-8 max-w-[1080px] px-6">
              <RelatedPosts category={blog.category} currentSlug={blog.slug} theme="light" />
            </div>
          </main>

          <Footer />
        </div>
      }>
        <MobileShell nav="bottom" showFooter>
          <ReadingProgress />
          <div className="w-full px-6 pb-8 pt-8">
            <button
              onClick={() => navigate('/company/blog')}
              className="mb-6 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-white/50 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back
            </button>

            <span className="mb-4 inline-block rounded-lg border border-neo-blue/20 bg-neo-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-neo-blue">
              {blog.category}
            </span>

            <h1 className="mb-4 text-display-sm tracking-tight text-white">{blog.title}</h1>

            <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-white/10 pb-6 text-xs text-white/50">
              <span className="font-bold text-white">{BRAND_AUTHOR}</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {format(new Date(blog.created_at), 'MMM dd, yyyy')}
              </span>
            </div>

            <div className="mb-8 aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
              <img src={blog.cover_image} alt={blog.title} className="h-full w-full object-cover" />
            </div>

            <div className="prose prose-invert prose-mobile max-w-none">
              <MarkdownRenderer content={blog.content} theme="dark" />
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <ShareButtons url={postUrl} title={blog.title} theme="dark" />
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <RelatedPosts category={blog.category} currentSlug={blog.slug} theme="dark" />
            </div>
          </div>
        </MobileShell>
      </MobileGate>
    </>
  );
};

export default BlogPost;

import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { getBlogBySlug, blogPosts } from "@/data/blogData";
import {
    ArrowLeft,
    ArrowRight,
    Clock,
    Calendar,
    Tag,
    ChevronDown,
    ChevronUp,
    Link2,
} from "lucide-react";
import { useState } from "react";

const BlogDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const blog = getBlogBySlug(slug || "");
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    if (!blog) {
        return (
            <div
                className="min-h-screen flex flex-col"
                style={{ backgroundColor: "#02040A" }}
            >
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            Blog Post Not Found
                        </h1>
                        <p className="text-[#00d4ff]/60 mb-8">
                            The article you're looking for doesn't exist or has been moved.
                        </p>
                        <button
                            onClick={() => navigate("/blog")}
                            className="px-6 py-3 rounded-xl bg-[#00d4ff] text-black font-semibold hover:bg-[#00d4ff]/90 transition-all duration-300"
                        >
                            Back to Blog
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    // Get related blogs (same category, excluding current)
    const relatedBlogs = blogPosts
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#02040A" }}>
            <SEO
                title={blog.metaTitle}
                description={blog.metaDescription}
                keywords={[blog.primaryKeyword, ...blog.secondaryKeywords].join(", ")}
                url={`https://www.neoperion.com/blog/${blog.slug}`}
                type="article"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": blog.title,
                        "description": blog.metaDescription,
                        "image": `https://www.neoperion.com${blog.image}`,
                        "author": {
                            "@type": "Organization",
                            "name": "Neo Perion"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Neo Perion",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.neoperion.com/images/np-logo.png"
                            }
                        },
                        "datePublished": blog.date,
                        "url": `https://www.neoperion.com/blog/${blog.slug}`
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://www.neoperion.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": "https://www.neoperion.com/blog"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": blog.title,
                                "item": `https://www.neoperion.com/blog/${blog.slug}`
                            }
                        ]
                    }
                ]}
            />
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-28 pb-16 overflow-hidden">
                    {/* Background gradient */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background:
                                "radial-gradient(ellipse at 30% 0%, rgba(0, 212, 255, 0.2) 0%, transparent 60%)",
                        }}
                    />

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        {/* Back button */}
                        <button
                            onClick={() => navigate("/blog")}
                            className="inline-flex items-center gap-2 text-[#00d4ff]/80 hover:text-[#00d4ff] transition-colors mb-8 group"
                        >
                            <ArrowLeft
                                size={18}
                                className="group-hover:-translate-x-1 transition-transform"
                            />
                            Back to Blog
                        </button>

                        <div className="max-w-4xl">
                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                                    {blog.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-[#00d4ff]/60">
                                    <Calendar size={14} />
                                    {formatDate(blog.date)}
                                </span>
                                <span className="flex items-center gap-1.5 text-sm text-[#00d4ff]/60">
                                    <Clock size={14} />
                                    {blog.readTime}
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {blog.title}
                            </h1>

                            {/* Keywords */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                <Tag size={14} className="text-gray-600 mt-1" />
                                {[blog.primaryKeyword, ...blog.secondaryKeywords.slice(0, 3)].map(
                                    (kw) => (
                                        <span
                                            key={kw}
                                            className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-[#00d4ff]/60"
                                        >
                                            {kw}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Image */}
                <section className="pb-12">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-4xl rounded-2xl overflow-hidden border border-white/[0.06] bg-gradient-to-br from-[#0a1628] to-[#050816]">
                            <img
                                src={blog.image}
                                alt={blog.imageAlt}
                                className="w-full h-64 md:h-96 object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                }}
                            />
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="pb-16">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            {/* Main Content */}
                            <article className="lg:col-span-8">
                                {/* Introduction */}
                                <ScrollReveal direction="left">
                                    <div className="mb-12">
                                        <p className="text-[#00d4ff]/80 text-lg leading-relaxed">
                                            {blog.introduction}
                                        </p>
                                    </div>
                                </ScrollReveal>

                                {/* Sections */}
                                {blog.sections.map((section, idx) => (
                                    <ScrollReveal
                                        key={idx}
                                        direction={idx % 2 === 0 ? "left" : "right"}
                                    >
                                        <div className="mb-12">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 relative pl-4 border-l-2 border-[#00d4ff]">
                                                {section.heading}
                                            </h2>
                                            <div className="text-[#00d4ff]/60 leading-relaxed text-base whitespace-pre-line">
                                                {section.content.split('\n').map((paragraph, pIdx) => (
                                                    <p key={pIdx} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
                                                ))}
                                            </div>

                                            {/* Sub-sections */}
                                            {section.subSections?.map((sub, subIdx) => (
                                                <div
                                                    key={subIdx}
                                                    className="mt-8 ml-4 pl-6 border-l border-white/10"
                                                >
                                                    <h3 className="text-xl font-semibold text-white mb-3">
                                                        {sub.heading}
                                                    </h3>
                                                    <p className="text-[#00d4ff]/60 leading-relaxed">
                                                        {sub.content}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </ScrollReveal>
                                ))}

                                {/* FAQs */}
                                {blog.faqs.length > 0 && (
                                    <ScrollReveal direction="left">
                                        <div className="mt-16">
                                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative pl-4 border-l-2 border-[#00d4ff]">
                                                Frequently Asked Questions
                                            </h2>
                                            <div className="space-y-4">
                                                {blog.faqs.map((faq, faqIdx) => (
                                                    <div
                                                        key={faqIdx}
                                                        className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/10"
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                setExpandedFAQ(
                                                                    expandedFAQ === faqIdx ? null : faqIdx
                                                                )
                                                            }
                                                            className="w-full flex items-center justify-between p-5 text-left"
                                                        >
                                                            <span className="text-white font-medium pr-4">
                                                                {faq.question}
                                                            </span>
                                                            {expandedFAQ === faqIdx ? (
                                                                <ChevronUp
                                                                    size={20}
                                                                    className="text-[#00d4ff] flex-shrink-0"
                                                                />
                                                            ) : (
                                                                <ArrowRight
                                                                    size={16}
                                                                    className="text-[#00d4ff]/50 flex-shrink-0"
                                                                />
                                                            )}
                                                        </button>
                                                        {expandedFAQ === faqIdx && (
                                                            <div className="px-5 pb-5 pt-0">
                                                                <p className="text-[#00d4ff]/60 leading-relaxed">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                )}
                            </article>

                            {/* Sidebar */}
                            <aside className="lg:col-span-4">
                                <div className="sticky top-28 space-y-8">
                                    {/* Internal Links */}
                                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                                        <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                                            <Link2 size={18} className="text-[#00d4ff]" />
                                            Related Articles
                                        </h3>
                                        <div className="space-y-3">
                                            {blog.internalLinks.map((link, linkIdx) => (
                                                <a
                                                    key={linkIdx}
                                                    href={link.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (link.href.startsWith("/#")) {
                                                            navigate("/");
                                                            setTimeout(() => {
                                                                document
                                                                    .querySelector(link.href.replace("/", ""))
                                                                    ?.scrollIntoView({ behavior: "smooth" });
                                                            }, 100);
                                                        } else {
                                                            navigate(link.href);
                                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                                        }
                                                    }}
                                                    className="block text-sm text-[#00d4ff]/60 hover:text-[#00d4ff] transition-colors py-2 border-b border-white/5 last:border-0"
                                                >
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Card */}
                                    <div className="rounded-2xl border border-[#00d4ff]/20 bg-gradient-to-b from-[#00d4ff]/5 to-transparent p-6">
                                        <h3 className="text-white font-semibold mb-3">
                                            Have a project in mind?
                                        </h3>
                                        <p className="text-[#00d4ff]/60 text-sm mb-5 leading-relaxed">
                                            Let's discuss how our engineering team can build the right
                                            solution for you.
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigate("/");
                                                setTimeout(() => {
                                                    document
                                                        .querySelector("#contact")
                                                        ?.scrollIntoView({ behavior: "smooth" });
                                                }, 100);
                                            }}
                                            className="w-full px-5 py-3 rounded-xl bg-[#00d4ff] text-black font-semibold text-sm hover:bg-[#00d4ff]/90 shadow-lg shadow-[#00d4ff]/20 transition-all duration-300"
                                        >
                                            Get in Touch
                                        </button>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* Related Blogs */}
                {relatedBlogs.length > 0 && (
                    <section className="py-16 border-t border-white/5">
                        <div className="container mx-auto px-6 lg:px-12">
                            <ScrollReveal direction="left">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                                    More from{" "}
                                    <span className="gradient-text">{blog.category}</span>
                                </h2>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {relatedBlogs.map((related, idx) => (
                                    <ScrollReveal
                                        key={related.slug}
                                        direction={idx % 2 === 0 ? "left" : "right"}
                                    >
                                        <article
                                            onClick={() => {
                                                navigate(`/blog/${related.slug}`);
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                            className="group cursor-pointer rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-500 hover:-translate-y-1"
                                        >
                                            <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#050816]">
                                                <img
                                                    src={related.image}
                                                    alt={related.title}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = "none";
                                                    }}
                                                />
                                            </div>
                                            <div className="p-5">
                                                <span className="text-xs text-[#00d4ff]/60">
                                                    {formatDate(related.date)} · {related.readTime}
                                                </span>
                                                <h3 className="text-white font-semibold mt-2 mb-3 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                                                    {related.title}
                                                </h3>
                                                <div className="flex items-center text-[#00d4ff] text-sm font-medium gap-2">
                                                    Read More
                                                    <ArrowRight
                                                        size={14}
                                                        className="group-hover:translate-x-1 transition-transform"
                                                    />
                                                </div>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default BlogDetailPage;

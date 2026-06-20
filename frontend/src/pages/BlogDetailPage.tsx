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
    ChevronDown,
    ChevronUp,
    ExternalLink,
} from "lucide-react";
import { useState } from "react";

const BlogDetailPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const blog = getBlogBySlug(slug || "");
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Header />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">404</p>
                        <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">
                            Article not found
                        </h1>
                        <p className="text-muted-foreground/60 mb-8">
                            The article you're looking for doesn't exist or has been moved.
                        </p>
                        <button
                            onClick={() => navigate("/company/blog")}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <ArrowLeft size={15} /> Back to Blog
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

    const relatedBlogs = blogPosts
        .filter((b) => b.category === blog.category && b.slug !== blog.slug)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-background text-foreground">
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
                        "author": { "@type": "Organization", "name": "Neo Perion" },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Neo Perion",
                            "logo": { "@type": "ImageObject", "url": "https://www.neoperion.com/images/np-logo.png" },
                        },
                        "datePublished": blog.date,
                        "url": `https://www.neoperion.com/blog/${blog.slug}`,
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.neoperion.com" },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.neoperion.com/blog" },
                            { "@type": "ListItem", "position": 3, "name": blog.title, "item": `https://www.neoperion.com/blog/${blog.slug}` },
                        ],
                    },
                ]}
            />
            <Header />

            <main>
                {/* ── HERO ── */}
                <section className="relative pt-28 pb-12 overflow-hidden">
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at 30% 0%, hsl(186 80% 42% / 0.08) 0%, transparent 55%)" }}
                    />
                    <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
                        {/* Back */}
                        <button
                            onClick={() => navigate("/company/blog")}
                            className="inline-flex items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors mb-10 group text-[13px] font-medium"
                        >
                            <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform duration-200" />
                            Back to Blog
                        </button>

                        <div className="max-w-3xl">
                            {/* Category + meta row */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/25">
                                    {blog.category}
                                </span>
                                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/45">
                                    <Calendar size={11} />{formatDate(blog.date)}
                                </span>
                                <span className="w-1 h-1 rounded-full bg-muted-foreground/25" />
                                <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground/45">
                                    <Clock size={11} />{blog.readTime}
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-foreground leading-tight mb-6">
                                {blog.title}
                            </h1>

                            {/* Keyword tags */}
                            <div className="flex flex-wrap gap-2">
                                {[blog.primaryKeyword, ...blog.secondaryKeywords.slice(0, 3)].map((kw) => (
                                    <span
                                        key={kw}
                                        className="px-3 py-1 rounded-full text-[11px] bg-card border border-border/60 text-muted-foreground/50"
                                    >
                                        {kw}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Divider ── */}
                <div className="max-w-6xl mx-auto px-8 lg:px-16">
                    <div className="h-px bg-gradient-to-r from-primary/30 via-border/60 to-transparent" />
                </div>

                {/* ── ARTICLE BODY ── */}
                <section className="py-14">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

                            {/* ── Main content ── */}
                            <article className="lg:col-span-8 min-w-0">

                                {/* Introduction */}
                                <ScrollReveal direction="left">
                                    <p className="text-[16px] text-muted-foreground/80 leading-relaxed mb-12 border-l-2 border-primary/40 pl-5">
                                        {blog.introduction}
                                    </p>
                                </ScrollReveal>

                                {/* Sections */}
                                {blog.sections.map((section, idx) => (
                                    <ScrollReveal key={idx} direction={idx % 2 === 0 ? "left" : "right"}>
                                        <div className="mb-12">
                                            <h2 className="text-xl md:text-2xl font-black tracking-tight text-foreground mb-5 flex items-start gap-4">
                                                <span className="text-[11px] font-bold text-primary/50 tracking-widest mt-1.5 shrink-0">
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                {section.heading}
                                            </h2>

                                            <div className="space-y-4 pl-8">
                                                {section.content.split("\n").filter(Boolean).map((paragraph, pIdx) => (
                                                    <p
                                                        key={pIdx}
                                                        className="text-[14.5px] text-muted-foreground/70 leading-relaxed"
                                                        dangerouslySetInnerHTML={{
                                                            __html: paragraph.replace(
                                                                /\*\*(.*?)\*\*/g,
                                                                '<strong class="text-foreground font-semibold">$1</strong>'
                                                            ),
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                            {/* Sub-sections */}
                                            {section.subSections && section.subSections.length > 0 && (
                                                <div className="mt-6 pl-8 space-y-6">
                                                    {section.subSections.map((sub, subIdx) => (
                                                        <div key={subIdx} className="rounded-xl border border-border/40 bg-card/40 p-5">
                                                            <h3 className="text-[15px] font-black tracking-tight text-foreground mb-2">
                                                                {sub.heading}
                                                            </h3>
                                                            <p className="text-[13.5px] text-muted-foreground/65 leading-relaxed">
                                                                {sub.content}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </ScrollReveal>
                                ))}

                                {/* ── FAQs ── */}
                                {blog.faqs.length > 0 && (
                                    <ScrollReveal direction="left">
                                        <div className="mt-14 pt-10 border-t border-border/40">
                                            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-3">FAQ</p>
                                            <h2 className="text-2xl font-black tracking-tight text-foreground mb-8">
                                                Frequently Asked Questions
                                            </h2>
                                            <div className="space-y-3">
                                                {blog.faqs.map((faq, faqIdx) => (
                                                    <div
                                                        key={faqIdx}
                                                        className="rounded-xl border border-border/50 bg-card/40 overflow-hidden hover:border-primary/30 transition-colors duration-300"
                                                    >
                                                        <button
                                                            onClick={() => setExpandedFAQ(expandedFAQ === faqIdx ? null : faqIdx)}
                                                            className="w-full flex items-center justify-between p-5 text-left gap-4"
                                                        >
                                                            <span className="text-[14px] font-semibold text-foreground leading-snug">
                                                                {faq.question}
                                                            </span>
                                                            {expandedFAQ === faqIdx ? (
                                                                <ChevronUp size={16} className="text-primary flex-shrink-0" />
                                                            ) : (
                                                                <ChevronDown size={16} className="text-muted-foreground/40 flex-shrink-0" />
                                                            )}
                                                        </button>
                                                        {expandedFAQ === faqIdx && (
                                                            <div className="px-5 pb-5">
                                                                <p className="text-[13.5px] text-muted-foreground/70 leading-relaxed">
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

                            {/* ── Sidebar ── */}
                            <aside className="lg:col-span-4">
                                <div className="sticky top-28 space-y-6">

                                    {/* In this article */}
                                    <div className="rounded-xl border border-border/50 bg-card/40 p-5">
                                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">
                                            In this article
                                        </p>
                                        <div className="space-y-1">
                                            {blog.sections.map((section, idx) => (
                                                <div key={idx} className="flex items-start gap-2.5 py-1.5 group cursor-default">
                                                    <span className="text-[10px] font-bold text-primary/40 mt-0.5 shrink-0 tabular-nums">
                                                        {String(idx + 1).padStart(2, "0")}
                                                    </span>
                                                    <span className="text-[12.5px] text-muted-foreground/55 leading-snug group-hover:text-foreground transition-colors duration-200">
                                                        {section.heading}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Related links */}
                                    {blog.internalLinks.length > 0 && (
                                        <div className="rounded-xl border border-border/50 bg-card/40 p-5">
                                            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-4">
                                                Related links
                                            </p>
                                            <div className="space-y-1">
                                                {blog.internalLinks.map((link, linkIdx) => (
                                                    <a
                                                        key={linkIdx}
                                                        href={link.href}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (link.href.startsWith("/#")) {
                                                                navigate("/");
                                                                setTimeout(() => {
                                                                    document.querySelector(link.href.replace("/", ""))?.scrollIntoView({ behavior: "smooth" });
                                                                }, 100);
                                                            } else {
                                                                navigate(link.href);
                                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                            }
                                                        }}
                                                        className="flex items-center gap-2 py-2 text-[12.5px] text-muted-foreground/55 hover:text-primary transition-colors border-b border-border/30 last:border-0 group"
                                                    >
                                                        <ExternalLink size={10} className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                                                        {link.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <div className="rounded-xl border border-primary/25 bg-primary/5 p-5">
                                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-3">
                                            Let's build together
                                        </p>
                                        <h3 className="text-[15px] font-black tracking-tight text-foreground mb-2 leading-snug">
                                            Have a project in mind?
                                        </h3>
                                        <p className="text-[12.5px] text-muted-foreground/60 mb-5 leading-relaxed">
                                            Let's discuss how our engineering team can build the right solution for you.
                                        </p>
                                        <button
                                            onClick={() => {
                                                navigate("/");
                                                setTimeout(() => {
                                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                                }, 100);
                                            }}
                                            className="w-full px-5 py-2.5 rounded-lg text-sm font-bold hover:-translate-y-0.5 transition-all duration-300"
                                            style={{ background: "hsl(186, 80%, 42%)", color: "#02040A", boxShadow: "0 6px 20px -4px hsl(186 80% 42% / 0.35)" }}
                                        >
                                            Get in Touch
                                        </button>
                                    </div>

                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* ── RELATED ARTICLES ── */}
                {relatedBlogs.length > 0 && (
                    <section className="py-16 border-t border-border/40">
                        <div className="max-w-6xl mx-auto px-8 lg:px-16">
                            <ScrollReveal direction="left">
                                <div className="flex items-center gap-4 mb-10">
                                    <div>
                                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-1">Continue reading</p>
                                        <h2 className="text-2xl font-black tracking-tight text-foreground">
                                            More from <span className="text-primary">{blog.category}</span>
                                        </h2>
                                    </div>
                                    <div className="flex-1 h-px bg-gradient-to-r from-border/40 to-transparent ml-4" />
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {relatedBlogs.map((related, idx) => (
                                    <ScrollReveal key={related.slug} direction={idx % 2 === 0 ? "left" : "right"}>
                                        <article
                                            onClick={() => {
                                                navigate(`/blog/${related.slug}`);
                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                            }}
                                            className="group cursor-pointer relative rounded-xl border border-border/50 bg-card/40 p-6 hover:border-primary/35 hover:bg-card hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                        >
                                            {/* Top accent on hover */}
                                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/60 transition-all duration-500" />

                                            {/* Index watermark */}
                                            <span className="absolute top-4 right-5 text-[64px] font-black leading-none text-foreground/[0.04] select-none pointer-events-none">
                                                {String(idx + 1).padStart(2, "0")}
                                            </span>

                                            <div className="relative z-10">
                                                {/* Category + read time */}
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                                                        {related.category}
                                                    </span>
                                                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                                                        <Clock size={9} />{related.readTime}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-[14.5px] font-black tracking-tight text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                                    {related.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-[12.5px] text-muted-foreground/55 leading-relaxed line-clamp-2 mb-5">
                                                    {related.introduction.substring(0, 110)}...
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                                                    <span className="text-[11px] text-muted-foreground/40 flex items-center gap-1">
                                                        <Calendar size={10} />{formatDate(related.date)}
                                                    </span>
                                                    <span className="flex items-center gap-1.5 text-primary text-[12px] font-bold group-hover:gap-2.5 transition-all duration-300">
                                                        Read <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                                                    </span>
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

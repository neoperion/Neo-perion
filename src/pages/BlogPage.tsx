import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts, blogCategories, getBlogsByCategory } from "@/data/blogData";
import { ArrowRight, Clock, Calendar, Search, ArrowUpRight } from "lucide-react";

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const filteredBlogs = getBlogsByCategory(activeCategory).filter(
        (blog) =>
            blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
    };

    const [featuredPost, ...restPosts] = filteredBlogs;

    return (
        <div className="min-h-screen bg-background text-foreground">
            <SEO
                title="Blog – AI, Data Analytics & Digital Engineering Insights | Neo Perion"
                description="Explore expert insights on AI systems, data analytics, smart infrastructure, and digital engineering from the Neo Perion team."
                keywords="AI blog, data analytics insights, smart city technology, digital engineering articles, Neo Perion blog"
                url="https://www.neoperion.com/blog"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Neo Perion Blog",
                        "description": "Explore expert insights on AI systems, data analytics, smart infrastructure, and digital engineering.",
                        "url": "https://www.neoperion.com/blog"
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.neoperion.com" },
                            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.neoperion.com/blog" }
                        ]
                    }
                ]}
            />
            <Header />

            <main>

                {/* ── Hero ── */}
                <section className="relative pt-32 pb-12 overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, hsl(186 80% 42% / 0.08) 0%, transparent 60%)' }} />
                    <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10">
                        <ScrollReveal direction="left">
                            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                {/* Left: title */}
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary/70 mb-4">
                                        Engineering Insights
                                    </p>
                                    <h1 className="text-5xl md:text-7xl font-black tracking-tight text-foreground leading-none">
                                        Our<br />
                                        <span className="text-primary">Blog.</span>
                                    </h1>
                                </div>
                                {/* Right: description + count */}
                                <div className="max-w-sm pb-1">
                                    <p className="text-muted-foreground/65 text-[15px] leading-relaxed mb-4">
                                        Deep dives into AI systems, data engineering, smart infrastructure, and the technology behind modern digital solutions.
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl font-black text-foreground">{blogPosts.length}</span>
                                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground/40 font-medium leading-tight">Articles<br />published</span>
                                        <div className="h-8 w-px bg-border/40 mx-1" />
                                        <span className="text-3xl font-black text-foreground">{blogCategories.length - 1}</span>
                                        <span className="text-[11px] uppercase tracking-widest text-muted-foreground/40 font-medium leading-tight">Topic<br />categories</span>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* ── Divider ── */}
                <div className="max-w-6xl mx-auto px-8 lg:px-16">
                    <div className="h-px bg-gradient-to-r from-primary/30 via-border/60 to-transparent" />
                </div>

                {/* ── Search & Filter ── */}
                <section className="py-8">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            {/* Search */}
                            <div className="relative w-full sm:w-72 shrink-0">
                                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/35" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 bg-card border border-border/60 text-foreground placeholder-muted-foreground/35 rounded-lg text-[13px] focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
                                />
                            </div>

                            {/* Divider */}
                            <div className="hidden sm:block h-6 w-px bg-border/40" />

                            {/* Category pills */}
                            <div className="flex flex-wrap gap-2">
                                {blogCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide transition-all duration-200 ${
                                            activeCategory === cat
                                                ? "bg-primary text-primary-foreground"
                                                : "border border-border/50 text-muted-foreground/60 hover:border-primary/40 hover:text-foreground"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Articles ── */}
                <section className="pb-28">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16">
                        {filteredBlogs.length === 0 ? (
                            <div className="text-center py-28 border border-border/40 rounded-2xl">
                                <p className="text-muted-foreground/50 text-[15px]">No articles found for your search.</p>
                            </div>
                        ) : (
                            <>
                                {/* ── Featured post ── */}
                                {featuredPost && (
                                    <ScrollReveal direction="left">
                                        <article
                                            onClick={() => navigate(`/blog/${featuredPost.slug}`)}
                                            className="group cursor-pointer relative rounded-2xl border border-border/60 bg-card/50 overflow-hidden hover:border-primary/35 transition-all duration-500 mb-8"
                                        >
                                            {/* Top accent bar */}
                                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/80 via-primary/40 to-transparent z-10" />

                                            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                                                {/* Image */}
                                                <div className="relative h-64 lg:h-[400px] overflow-hidden bg-card">
                                                    <img
                                                        src={featuredPost.image}
                                                        alt={featuredPost.imageAlt}
                                                        className="w-full h-full object-cover opacity-75 group-hover:opacity-95 group-hover:scale-[1.03] transition-all duration-700"
                                                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 pointer-events-none" />
                                                    {/* Large index number watermark */}
                                                    <span className="absolute bottom-4 left-5 text-[80px] font-black leading-none text-white/[0.06] select-none">01</span>
                                                </div>

                                                {/* Content */}
                                                <div className="p-8 lg:p-10 flex flex-col">
                                                    {/* Top meta */}
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 text-primary border border-primary/25">
                                                            {featuredPost.category}
                                                        </span>
                                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground/30">Featured</span>
                                                    </div>

                                                    {/* Title */}
                                                    <h2 className="text-2xl lg:text-[1.75rem] font-black tracking-tight text-foreground leading-tight mb-5 group-hover:text-primary transition-colors duration-300">
                                                        {featuredPost.title}
                                                    </h2>

                                                    {/* Excerpt */}
                                                    <p className="text-[13.5px] text-muted-foreground/65 leading-relaxed line-clamp-4 flex-1 mb-8">
                                                        {featuredPost.introduction.substring(0, 220)}...
                                                    </p>

                                                    {/* Footer */}
                                                    <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                                                        <div className="flex items-center gap-4 text-[11px] text-muted-foreground/45">
                                                            <span className="flex items-center gap-1.5"><Calendar size={11} />{formatDate(featuredPost.date)}</span>
                                                            <span className="w-1 h-1 rounded-full bg-muted-foreground/25" />
                                                            <span className="flex items-center gap-1.5"><Clock size={11} />{featuredPost.readTime}</span>
                                                        </div>
                                                        <span className="flex items-center gap-2 text-primary text-[13px] font-bold group-hover:gap-3 transition-all duration-300">
                                                            Read article <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                )}

                                {/* ── Section label ── */}
                                {restPosts.length > 0 && (
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-muted-foreground/40">All articles</span>
                                        <div className="flex-1 h-px bg-border/40" />
                                        <span className="text-[11px] text-muted-foreground/30">{restPosts.length} more</span>
                                    </div>
                                )}

                                {/* ── Grid ── */}
                                {restPosts.length > 0 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                        {restPosts.map((blog, index) => (
                                            <ScrollReveal
                                                key={blog.slug}
                                                direction={index % 2 === 0 ? "left" : "right"}
                                            >
                                                <article
                                                    onClick={() => navigate(`/blog/${blog.slug}`)}
                                                    className="group cursor-pointer relative rounded-xl border border-border/50 bg-card/40 overflow-hidden hover:border-primary/30 hover:bg-card hover:-translate-y-1.5 hover:shadow-lg transition-all duration-400 h-full flex flex-col"
                                                >
                                                    {/* Top hover accent */}
                                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary/0 group-hover:bg-primary/60 transition-all duration-500 z-10" />

                                                    {/* Image */}
                                                    <div className="relative overflow-hidden bg-card shrink-0" style={{ aspectRatio: '16/9' }}>
                                                        <img
                                                            src={blog.image}
                                                            alt={blog.imageAlt}
                                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-95 group-hover:scale-[1.04] transition-all duration-700"
                                                            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                                                        />
                                                        {/* Index number watermark */}
                                                        <span className="absolute bottom-2 right-3 text-[52px] font-black leading-none text-white/[0.07] select-none">
                                                            {String(index + 2).padStart(2, "0")}
                                                        </span>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-5 flex flex-col flex-1">
                                                        {/* Category + time */}
                                                        <div className="flex items-center justify-between mb-3">
                                                            <span className="text-[10px] font-bold tracking-widest uppercase text-primary/70">
                                                                {blog.category}
                                                            </span>
                                                            <span className="flex items-center gap-1 text-[10px] text-muted-foreground/40">
                                                                <Clock size={9} />{blog.readTime}
                                                            </span>
                                                        </div>

                                                        {/* Title */}
                                                        <h3 className="text-[14.5px] font-black tracking-tight text-foreground/90 mb-2.5 leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                                            {blog.title}
                                                        </h3>

                                                        {/* Excerpt */}
                                                        <p className="text-[12.5px] text-muted-foreground/55 leading-relaxed line-clamp-2 flex-1 mb-4">
                                                            {blog.introduction.substring(0, 120)}...
                                                        </p>

                                                        {/* Footer */}
                                                        <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-auto">
                                                            <span className="text-[11px] text-muted-foreground/40 flex items-center gap-1">
                                                                <Calendar size={10} />{formatDate(blog.date)}
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
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 border-t border-border/40">
                    <div className="max-w-6xl mx-auto px-8 lg:px-16">
                        <div className="rounded-2xl border border-border/50 bg-card/40 px-10 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/70 mb-3">Let's build together</p>
                                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground leading-tight mb-3">
                                    Want to build something<br />
                                    <span className="text-primary">intelligent?</span>
                                </h2>
                                <p className="text-muted-foreground/60 text-[14px] leading-relaxed max-w-md">
                                    From AI-powered systems to scalable web platforms — let's engineer the solution your business needs.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 shrink-0">
                                <button
                                    onClick={() => {
                                        navigate("/");
                                        setTimeout(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }), 100);
                                    }}
                                    className="px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                                    style={{ background: "hsl(186, 80%, 42%)", color: "#02040A", boxShadow: "0 8px 30px -6px hsl(186 80% 42% / 0.4)" }}
                                >
                                    Contact Us
                                </button>
                                <button
                                    onClick={() => navigate("/services")}
                                    className="px-8 py-3 rounded-lg border border-border/60 text-muted-foreground text-sm font-medium hover:border-primary/40 hover:text-foreground transition-all duration-300 whitespace-nowrap"
                                >
                                    Explore Services
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;

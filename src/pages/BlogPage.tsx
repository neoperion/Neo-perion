import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ScrollReveal } from "@/components/ScrollReveal";
import { blogPosts, blogCategories, getBlogsByCategory } from "@/data/blogData";
import { ArrowRight, Clock, Calendar, Search } from "lucide-react";

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
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: "#02040A" }}>
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
                            }
                        ]
                    }
                ]}
            />
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Background gradient */}
                    <div
                        className="absolute inset-0 opacity-30"
                        style={{
                            background:
                                "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
                        }}
                    />

                    <div className="container mx-auto px-6 lg:px-12 relative z-10">
                        <ScrollReveal direction="left">
                            <div className="max-w-3xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 mb-6">
                                    <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
                                    <span className="text-[#00d4ff] text-sm font-medium">
                                        Engineering Insights
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                                    <span className="text-white">Our </span>
                                    <span className="gradient-text">Blog</span>
                                </h1>
                                <p className="text-[#00d4ff]/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                                    Deep dives into AI systems, data engineering, smart
                                    infrastructure, and the technology behind modern digital
                                    solutions.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Search & Filter */}
                <section className="pb-8">
                    <div className="container mx-auto px-6 lg:px-12">
                        {/* Search Bar */}
                        <div className="max-w-xl mx-auto mb-8">
                            <div className="relative">
                                <Search
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                                    size={20}
                                />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#00d4ff]/40 focus:outline-none focus:border-[#00d4ff]/50 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all"
                                />
                            </div>
                        </div>

                        {/* Category Tabs */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {blogCategories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? "bg-[#00d4ff] text-black shadow-lg shadow-[#00d4ff]/25"
                                        : "bg-white/5 text-[#00d4ff]/60 border border-white/10 hover:border-[#00d4ff]/30 hover:text-white"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-12 pb-24">
                    <div className="container mx-auto px-6 lg:px-12">
                        {filteredBlogs.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-gray-500 text-lg">
                                    No articles found matching your criteria.
                                </p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredBlogs.map((blog, index) => (
                                    <ScrollReveal
                                        key={blog.slug}
                                        direction={index % 2 === 0 ? "left" : "right"}
                                    >
                                        <article
                                            onClick={() => navigate(`/blog/${blog.slug}`)}
                                            className="group cursor-pointer rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] overflow-hidden hover:border-[#00d4ff]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00d4ff]/5 h-full flex flex-col"
                                        >
                                            {/* Image */}
                                            <div className="relative h-52 overflow-hidden bg-gradient-to-br from-[#0a1628] to-[#050816]">
                                                <img
                                                    src={blog.image}
                                                    alt={blog.imageAlt}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = "none";
                                                    }}
                                                />
                                                {/* Category pill */}
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20 backdrop-blur-sm">
                                                        {blog.category}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6 flex flex-col flex-1">
                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-xs text-[#00d4ff]/50 mb-4">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar size={13} />
                                                        {formatDate(blog.date)}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock size={13} />
                                                        {blog.readTime}
                                                    </span>
                                                </div>

                                                <h2 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-[#00d4ff] transition-colors duration-300 line-clamp-2">
                                                    {blog.title}
                                                </h2>

                                                <p className="text-[#00d4ff]/60 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                                    {blog.introduction.substring(0, 160)}...
                                                </p>

                                                <div className="flex items-center text-[#00d4ff] text-sm font-medium group-hover:gap-3 gap-2 transition-all duration-300 mt-auto">
                                                    Read More
                                                    <ArrowRight
                                                        size={16}
                                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </article>
                                    </ScrollReveal>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 border-t border-white/5">
                    <div className="container mx-auto px-6 lg:px-12 text-center">
                        <ScrollReveal direction="left">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Want to build something{" "}
                                <span className="gradient-text">intelligent?</span>
                            </h2>
                            <p className="text-[#00d4ff]/60 max-w-xl mx-auto mb-8">
                                From AI-powered systems to scalable web platforms — let's
                                engineer the solution your business needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate("/services")}
                                    className="px-8 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:border-[#00d4ff]/40 hover:bg-white/10 transition-all duration-300"
                                >
                                    Explore Services
                                </button>
                                <button
                                    onClick={() => {
                                        navigate("/");
                                        setTimeout(() => {
                                            document
                                                .querySelector("#contact")
                                                ?.scrollIntoView({ behavior: "smooth" });
                                        }, 100);
                                    }}
                                    className="px-8 py-3.5 rounded-xl bg-[#00d4ff] text-black font-semibold hover:bg-[#00d4ff]/90 shadow-lg shadow-[#00d4ff]/25 hover:shadow-[#00d4ff]/40 transition-all duration-300"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default BlogPage;

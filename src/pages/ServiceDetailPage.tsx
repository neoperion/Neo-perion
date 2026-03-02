import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";
import { getServiceBySlug, servicesData, ServiceData } from "@/data/servicesData";

/* ─────────── CSS UI Mockup ─────────── */
function UIMockup({ service }: { service: ServiceData }) {
    return (
        <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-card" style={{ minHeight: '320px' }}>
            {/* Browser chrome bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/50 bg-card/90">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                </div>
                <div className="flex-1 mx-3 h-5 rounded-md bg-background/50 flex items-center px-2">
                    <div className="w-20 h-1.5 rounded bg-muted-foreground/15" />
                </div>
                <div className="w-14 h-4 rounded-md" style={{ background: `${service.color}20`, border: `1px solid ${service.color}25` }} />
            </div>

            {/* Mockup body */}
            <div className="flex gap-0 h-full" style={{ minHeight: '274px' }}>
                {/* Sidebar */}
                <div className="w-[52px] shrink-0 border-r border-border/40 bg-card/60 flex flex-col items-center gap-3 pt-4 px-2">
                    <div className="w-7 h-7 rounded-lg" style={{ background: `${service.color}25`, border: `1px solid ${service.color}35` }} />
                    {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-5 h-1.5 rounded" style={{ background: i === 0 ? `${service.color}40` : 'hsl(var(--border) / 0.45)' }} />
                    ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-4 space-y-3 relative overflow-hidden">
                    {/* Top row: title + button */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <div className="h-2 w-24 rounded bg-foreground/10" />
                            <div className="h-1.5 w-16 rounded bg-muted-foreground/20" />
                        </div>
                        <div className="h-5 w-16 rounded-md" style={{ background: `${service.color}20`, border: `1px solid ${service.color}30` }} />
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-2">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="rounded-lg p-2.5 space-y-1"
                                style={{
                                    background: i === 1 ? `${service.color}09` : 'hsl(var(--card))',
                                    border: `1px solid ${i === 1 ? `${service.color}22` : 'hsl(var(--border) / 0.4)'}`,
                                }}
                            >
                                <div className="h-1.5 rounded" style={{ width: '55%', background: i === 1 ? `${service.color}45` : 'hsl(var(--border) / 0.5)' }} />
                                <div className="h-3 rounded" style={{ width: '80%', background: i === 1 ? `${service.color}30` : 'hsl(var(--border) / 0.3)' }} />
                            </div>
                        ))}
                    </div>

                    {/* Content block */}
                    <div className="rounded-xl border border-border/35 p-3 space-y-2" style={{ background: 'hsl(var(--card) / 0.5)' }}>
                        {[100, 75, 90, 55, 80].map((w, i) => (
                            <div key={i} className="h-1.5 rounded bg-border/30" style={{ width: `${w}%` }} />
                        ))}
                    </div>

                    {/* Bar chart */}
                    <div
                        className="rounded-xl border border-border/35 px-3 pt-2 pb-1 flex items-end gap-1"
                        style={{ background: 'hsl(var(--card) / 0.5)', height: '72px' }}
                    >
                        {[35, 58, 42, 76, 62, 88, 68].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 rounded-t transition-all"
                                style={{
                                    height: `${h}%`,
                                    background: i === 5 ? `${service.color}55` : `${service.color}18`,
                                }}
                            />
                        ))}
                    </div>

                    {/* Ambient glow */}
                    <div
                        className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl pointer-events-none"
                        style={{ background: `${service.color}12` }}
                    />
                </div>
            </div>
        </div>
    );
}

/* ─────────── Second Visual: Workflow Grid ─────────── */
function WorkflowVisual({ service }: { service: ServiceData }) {
    const rows = [
        ['Research', 'Wireframes', 'Prototype'],
        ['Testing', 'Handoff', 'Launch'],
    ];
    return (
        <div
            className="relative rounded-2xl border border-border/60 bg-card overflow-hidden"
            style={{ minHeight: '200px' }}
        >
            <div className="grid grid-cols-3 h-full">
                {rows.flat().map((label, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center gap-2 p-4 border-border/30"
                        style={{
                            borderRight: (i + 1) % 3 !== 0 ? '1px solid hsl(var(--border) / 0.3)' : 'none',
                            borderBottom: i < 3 ? '1px solid hsl(var(--border) / 0.3)' : 'none',
                            background: i === 2 ? `${service.color}06` : 'transparent',
                        }}
                    >
                        <div
                            className="w-7 h-7 rounded-lg"
                            style={{
                                background: i === 2 || i === 4 ? `${service.color}18` : 'hsl(var(--border) / 0.25)',
                                border: `1px solid ${i === 2 || i === 4 ? `${service.color}30` : 'hsl(var(--border) / 0.35)'}`,
                            }}
                        />
                        <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground/50">{label}</span>
                    </div>
                ))}
            </div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(circle at 80% 50%, ${service.color}08 0%, transparent 60%)` }}
            />
        </div>
    );
}

export default function ServiceDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const service = getServiceBySlug(slug || '');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo({ top: 0 });
        const handleScroll = () => {
            document.querySelectorAll('[data-fade]').forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 80) {
                    el.classList.add('fade-in');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [slug]);

    if (!service) {
        return (
            <div className="bg-background text-foreground min-h-screen">
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-8">
                    <h1 className="text-4xl font-bold mb-4 text-foreground">Service not found</h1>
                    <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/services')}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary-glow transition-all duration-300"
                    >
                        View all services
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    const Icon = service.icon;
    const currentIndex = servicesData.findIndex(s => s.slug === slug);
    const nextService = servicesData[(currentIndex + 1) % servicesData.length];
    const prevService = servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length];

    const approachHeadlines: Record<string, string[]> = {
        'ui-ux-design':           ['Research.', 'Design.', 'Iterate.'],
        'web-app-modernization':  ['Incremental.', 'Reliable.', 'Zero disruption.'],
        'data-analytics':         ['Structured.', 'Scalable.', 'Insight-driven.'],
        'mobile-app-development': ['Native.', 'Intuitive.', 'Cross-platform.'],
        'ai-automation':          ['Intelligent.', 'Adaptive.', 'Future-ready.'],
        'digital-marketing':      ['Targeted.', 'Measurable.', 'Growth-focused.'],
    };
    const approachLines = approachHeadlines[service.slug] ?? ['Proven.', 'Reliable.', 'Built to last.'];

    return (
        <div className="bg-background text-foreground">
            <SEO
                title={`${service.title} - NEO PERION | ${service.tagline}`}
                description={service.heroSubtext}
                keywords={`NEO PERION ${service.title}, ${service.title} services, ${service.title} company India, ${service.tagline}`}
                url={`https://www.neoperion.com/services/${service.slug}`}
            />
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        [data-fade] {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        [data-fade].fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        @keyframes heroHeadline {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroSubtext {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-headline { animation: heroHeadline 1s ease-out 0.2s both; }
        .animate-subtext { animation: heroSubtext 0.9s ease-out 0.5s both; }
        .animate-cta { animation: heroSubtext 0.9s ease-out 0.8s both; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 22s linear infinite; }
      `}</style>

            <Header />

            {/* ─────────── HERO ─────────── */}
            <section className="min-h-[80vh] flex items-center pt-32 pb-20 px-8 lg:px-16 bg-gradient-to-br from-card to-background relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
                    <FloatingLines
                        linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
                        enabledWaves={['middle', 'bottom']}
                        lineCount={[8, 6]}
                        lineDistance={[3, 4]}
                        middleWavePosition={{ x: 5.0, y: 0.0, rotate: 0.3 }}
                        bottomWavePosition={{ x: 2.0, y: -0.5, rotate: -0.2 }}
                        animationSpeed={0.5}
                        interactive={true}
                        bendRadius={3.0}
                        bendStrength={-0.3}
                        mouseDamping={0.08}
                        parallax={true}
                        parallaxStrength={0.15}
                        mixBlendMode="screen"
                    />
                </div>

                <div className="max-w-6xl mx-auto relative z-10 w-full">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground/50 mb-10 animate-subtext">
                        <button onClick={() => navigate('/')} className="hover:text-primary transition-colors">Home</button>
                        <span className="text-muted-foreground/30">/</span>
                        <button onClick={() => navigate('/services')} className="hover:text-primary transition-colors">Services</button>
                        <span className="text-muted-foreground/30">/</span>
                        <span className="text-primary/70">{service.title}</span>
                    </div>

                    <div className="max-w-2xl">
                        {/* Icon + tagline row */}
                        <div className="flex items-center gap-4 mb-6 animate-subtext">
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                style={{ background: `${service.color}15`, border: `1px solid ${service.color}30` }}
                            >
                                <Icon size={24} style={{ color: service.color }} />
                            </div>
                            <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary/70">
                                {service.tagline}
                            </p>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-foreground animate-headline">
                            {service.heroHeadline}
                        </h1>

                        <p className="text-[15px] text-muted-foreground/70 mb-10 leading-relaxed animate-subtext">
                            {service.heroSubtext}
                        </p>

                        <div className="flex flex-wrap gap-4 animate-cta">
                            <button
                                onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                                className="px-7 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                                style={{ background: 'hsl(186, 80%, 42%)', color: '#02040A', boxShadow: '0 8px 30px -6px hsl(186 80% 42% / 0.4)' }}
                            >
                                {service.ctaText} <ArrowRight size={15} />
                            </button>
                            <button
                                onClick={() => navigate('/services')}
                                className="px-7 py-3 bg-transparent text-muted-foreground border border-border/60 rounded-lg text-sm font-medium hover:text-foreground hover:border-primary/40 transition-all duration-300"
                            >
                                All services
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─────────── OVERVIEW ─────────── */}
            <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto space-y-24">

                {/* Row 1 — Content left | Visual right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div data-fade>
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">Overview</p>
                        <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-6 tracking-tight">What we deliver</h2>
                        <p className="leading-relaxed text-[15px] text-muted-foreground/80 mb-8">
                            {service.overview.split('\n\n')[0]}
                        </p>
                        <ul className="space-y-3">
                            {service.features.slice(0, 5).map((f, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: service.color }} />
                                    <span className="text-[14px] text-muted-foreground/75 leading-snug">{f.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual 1 */}
                    <div data-fade className="relative flex items-center">
                        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 60% 50%, ${service.color}16 0%, transparent 65%)` }} />
                        {service.slug === 'ui-ux-design' ? (
                            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-medium">
                                <img
                                    src="/images/BEST%20LANDING%20PAGE%20FOE%20WEBSITE%20OR%20GAMING%20WEBSITE%20LANDING%20PAGE.jpeg"
                                    alt="UI/UX Design — Landing page showcase"
                                    className="w-full object-cover object-top"
                                    style={{ maxHeight: '360px' }}
                                />
                                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 -60px 40px -20px hsl(var(--background) / 0.5)' }} />
                            </div>
                        ) : service.slug === 'web-app-modernization' ? (
                            <img
                                src="/images/Web_Development_Solutions_That_Grow_Your_Business-removebg-preview.PNG"
                                alt="Modern web development — website showcase"
                                className="relative w-full scale-110 drop-shadow-lg"
                            />
                        ) : service.slug === 'data-analytics' ? (
                            <img
                                src="/images/Global_Embedded_Analytics_Market_Growth_Factors-removebg-preview.png"
                                alt="Data & Analytics — market growth factors"
                                className="relative w-full drop-shadow-lg"
                            />
                        ) : service.slug === 'mobile-app-development' ? (
                            <img
                                src="/images/download__7_-removebg-preview.png"
                                alt="Mobile App Development — finance app showcase"
                                className="relative w-full scale-125 drop-shadow-xl"
                            />
                        ) : service.slug === 'digital-marketing' ? (
                            <img
                                src="/images/Power_of_SEO-removebg-preview.png"
                                alt="Digital Marketing — power of SEO"
                                className="relative w-full scale-110 drop-shadow-xl"
                            />
                        ) : service.slug === 'ai-automation' ? (
                            <img
                                src="/images/Happy_Web_Designer_Day_2025-removebg-preview.png"
                                alt="AI & Automation — intelligent robot assistant"
                                className="relative w-[80%] mx-auto block scale-110 drop-shadow-xl"
                            />
                        ) : (
                            <div className="relative w-full">
                                <UIMockup service={service} />
                            </div>
                        )}
                    </div>
                </div>

                {service.slug !== 'ai-automation' && (<>
                {/* Row divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

                {/* Row 2 — Visual left | Approach content right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Visual 2 */}
                    <div data-fade className="relative flex items-center order-2 lg:order-1">
                        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 50%, ${service.color}14 0%, transparent 65%)` }} />
                        {service.slug === 'ui-ux-design' ? (
                            <div className="relative w-full rounded-2xl overflow-hidden border border-border/60 shadow-soft">
                                <img
                                    src="/images/Transform%20your%20presentations%20with%20cutting-edge%20futuristic%20templates%20today.jpeg"
                                    alt="UI/UX Design — Futuristic presentation templates"
                                    className="w-full object-cover object-top"
                                    style={{ maxHeight: '320px' }}
                                />
                                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 -50px 30px -10px hsl(var(--background) / 0.45)' }} />
                            </div>
                        ) : service.slug === 'web-app-modernization' ? (
                            <img
                                src="/images/1062273B-8DAC-4152-94CD-174B85BC00FA_png-removebg-preview.png"
                                alt="Multi-device web & app showcase"
                                className="relative w-full drop-shadow-md"
                            />
                        ) : service.slug === 'data-analytics' ? (
                            <img
                                src="/images/programming_social_media_post-removebg-preview%20(1).png"
                                alt="Data & Analytics — programming and data engineering"
                                className="relative w-full drop-shadow-md"
                            />
                        ) : service.slug === 'mobile-app-development' ? (
                            <img
                                src="/images/Please_allow_us_to_assist_you_in_developing_a_design_that_will_amaze_your_users_and_keep_them___Appfynder__Appfinder__App__finder__fynder__digitaldesign__Innovation__John-removebg-preview.png"
                                alt="Mobile App Development — UI design showcase"
                                className="relative w-[75%] mx-auto block drop-shadow-xl"
                            />
                        ) : service.slug === 'digital-marketing' ? (
                            <img
                                src="/images/__Grow_Your_Business_with_Targeted_SEO__-removebg-preview.png"
                                alt="Digital Marketing — grow your business with SEO"
                                className="relative w-full scale-110 drop-shadow-xl"
                            />
                        ) : (
                            <div className="relative w-full">
                                <WorkflowVisual service={service} />
                            </div>
                        )}
                    </div>

                    {/* Approach content */}
                    <div data-fade className="order-1 lg:order-2">
                        <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">Our approach</p>
                        <h2 className="text-2xl lg:text-3xl font-black text-foreground mb-6 tracking-tight leading-tight">
                            {approachLines.map((line, i) => (
                                <React.Fragment key={i}>{line}{i < approachLines.length - 1 && <br />}</React.Fragment>
                            ))}
                        </h2>
                        <div className="space-y-5">
                            {service.overview.split('\n\n').slice(1).map((paragraph, i) => (
                                <p key={i} className="leading-relaxed text-[15px] text-muted-foreground/80">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        <div className="mt-8 h-[2px] w-10 rounded-full" style={{ background: service.color }} />
                    </div>
                </div>
                </>)}
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-5xl mx-auto" />
            </div>

            {/* ─────────── FEATURES ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">What's included</p>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Every capability, covered</h2>
                    <p className="text-[14px] text-muted-foreground/60 mt-3 max-w-md mx-auto">
                        A complete suite of {service.title.toLowerCase()} capabilities — engineered to work together.
                    </p>
                </div>

                {/* Image placement #2 — workflow visual strip */}
                <div className="mb-10" data-fade>
                    <WorkflowVisual service={service} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {service.features.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-7 rounded-2xl border border-border/60 bg-card/60 hover:bg-card hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                            data-fade
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            {/* Corner glow */}
                            <div
                                className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"
                                style={{ background: `${service.color}15` }}
                            />
                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-3">
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                                        style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                                    >
                                        <CheckCircle2 size={15} style={{ color: service.color }} />
                                    </div>
                                    <h3 className="text-base font-bold text-foreground/90 group-hover:text-white transition-colors duration-300 tracking-tight">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-[13px] leading-relaxed pl-12 text-muted-foreground/70 group-hover:text-foreground/75 transition-colors duration-300">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-5xl mx-auto" />
            </div>

            {/* ─────────── PROCESS ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">Our process</p>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">How we work</h2>
                </div>

                {/* Editorial list — each step is a full-width row */}
                <div data-fade>
                    {service.process.map((step, i) => {
                        const isLast = i === service.process.length - 1;
                        return (
                            <div key={i} className="group relative">
                                <div className="h-px bg-border/50 group-hover:bg-primary/20 transition-colors duration-500" />
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-primary/40 transition-all duration-500 rounded-r-full" />

                                <div className="flex items-center gap-6 lg:gap-10 py-7 pl-6 pr-4 group-hover:bg-primary/[0.025] transition-colors duration-300 rounded-r-xl">
                                    {/* Step number */}
                                    <div className="shrink-0 w-14 lg:w-18">
                                        <span className="block text-[9px] font-bold tracking-[0.3em] uppercase text-muted-foreground/25 group-hover:text-primary/40 transition-colors duration-500 mb-0.5">
                                            Step
                                        </span>
                                        <span className="text-[48px] lg:text-[60px] font-black text-foreground/[0.05] group-hover:text-primary/[0.13] transition-colors duration-700 leading-none select-none">
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Vertical separator */}
                                    <div className="hidden lg:block w-px self-stretch bg-border/30 shrink-0 group-hover:bg-primary/15 transition-colors duration-500" />

                                    {/* Title */}
                                    <div className="shrink-0 lg:w-48">
                                        <h3 className="text-lg lg:text-xl font-bold text-foreground/80 tracking-tight group-hover:text-foreground transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Description — desktop inline */}
                                    <p className="hidden lg:block flex-1 text-[13px] text-muted-foreground/65 leading-relaxed group-hover:text-foreground/65 transition-colors duration-300">
                                        {step.description}
                                    </p>

                                    {/* Step indicator */}
                                    <div
                                        className="shrink-0 ml-auto lg:ml-0 w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-black transition-all duration-500"
                                        style={{
                                            background: `${service.color}10`,
                                            border: `1px solid ${service.color}20`,
                                            color: service.color,
                                        }}
                                    >
                                        {step.step}
                                    </div>
                                </div>

                                {/* Mobile description */}
                                <p className="lg:hidden text-[12px] text-muted-foreground/65 leading-relaxed pl-6 pb-5 pr-4">
                                    {step.description}
                                </p>

                                {isLast && <div className="h-px bg-border/50" />}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-5xl mx-auto" />
            </div>

            {/* ─────────── TECH STACK ─────────── */}
            <section className="py-24">
                <div className="text-center mb-12 px-8 lg:px-16" data-fade>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">Technology</p>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Tools &amp; tech we use</h2>
                </div>

                <div className="relative overflow-hidden" data-fade>
                    {/* Left fade */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
                    {/* Right fade */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...service.technologies, ...service.technologies].map((tech, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center px-5 text-[13px] font-semibold tracking-widest uppercase text-muted-foreground/50 mx-3"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-5xl mx-auto" />
            </div>

            {/* ─────────── FAQ ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-3xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4 text-primary/70">FAQ</p>
                    <h2 className="text-3xl lg:text-4xl font-black text-foreground tracking-tight">Common questions</h2>
                </div>

                <div className="space-y-3" data-fade>
                    {service.faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-border/60 bg-card/60 overflow-hidden transition-all duration-300"
                            style={{ borderColor: openFaq === i ? `${service.color}30` : undefined }}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-card transition-colors duration-300"
                            >
                                <h3 className="text-[14px] font-semibold text-foreground/90 pr-4 leading-snug">{faq.question}</h3>
                                {openFaq === i
                                    ? <ChevronUp size={16} style={{ color: service.color }} className="shrink-0" />
                                    : <ChevronDown size={16} className="shrink-0 text-muted-foreground/50" />
                                }
                            </button>
                            <div
                                className="overflow-hidden transition-all duration-300"
                                style={{ maxHeight: openFaq === i ? '400px' : '0px', opacity: openFaq === i ? 1 : 0 }}
                            >
                                <p className="px-6 pb-6 text-[13px] leading-relaxed text-muted-foreground/75">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16">
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-5xl mx-auto" />
            </div>

            {/* ─────────── NAVIGATE BETWEEN SERVICES ─────────── */}
            <section className="px-8 lg:px-16 py-16 max-w-5xl mx-auto">
                <div className="flex justify-between items-center" data-fade>
                    <button
                        onClick={() => navigate(`/services/${prevService.slug}`)}
                        className="group flex items-center gap-3 text-left hover:-translate-x-1 transition-all duration-300"
                    >
                        <ArrowLeft size={18} className="text-primary/60 group-hover:text-foreground transition-colors" />
                        <div>
                            <p className="text-[11px] mb-0.5 text-muted-foreground/50 uppercase tracking-wider">Previous</p>
                            <p className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{prevService.title}</p>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate(`/services/${nextService.slug}`)}
                        className="group flex items-center gap-3 text-right hover:translate-x-1 transition-all duration-300"
                    >
                        <div>
                            <p className="text-[11px] mb-0.5 text-muted-foreground/50 uppercase tracking-wider">Next</p>
                            <p className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors">{nextService.title}</p>
                        </div>
                        <ArrowRight size={18} className="text-primary/60 group-hover:text-foreground transition-colors" />
                    </button>
                </div>
            </section>

            {/* ─────────── CTA ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-4xl mx-auto text-center">
                <div data-fade>
                    <h2 className="text-3xl lg:text-5xl font-black mb-6 text-foreground tracking-tight">
                        Ready to get started?
                    </h2>
                    <p className="text-[15px] text-muted-foreground/75 mb-10 max-w-xl mx-auto leading-relaxed">
                        Let's discuss how our {service.title.toLowerCase()} services can move your business forward. Free consultation — response within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
                            className="px-7 py-3 rounded-lg text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 justify-center"
                            style={{ background: service.color, color: '#02040A', boxShadow: `0 8px 30px -6px ${service.color}40` }}
                        >
                            {service.ctaText} <ArrowRight size={15} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-7 py-3 bg-transparent text-muted-foreground border border-border/60 rounded-lg text-sm font-medium hover:text-foreground hover:bg-card transition-all duration-300"
                        >
                            Explore other services
                        </button>
                    </div>
                </div>
            </section>

            <div className="h-24" />
            <Footer />
        </div>
    );
}

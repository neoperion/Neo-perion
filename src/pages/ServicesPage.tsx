import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, BarChart3, Code2, Zap, Users, CheckCircle2, ExternalLink } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";
import { useNavigate } from 'react-router-dom';
import { servicesData } from "@/data/servicesData";

const processSteps = [
    { num: "01", title: "Discovery Call", desc: "We understand your goals, challenges, and current setup.", icon: Users },
    { num: "02", title: "Strategic Planning", desc: "We design the architecture and roadmap tailored to your needs.", icon: BarChart3 },
    { num: "03", title: "Agile Development", desc: "We build in sprints with visible progress at every milestone.", icon: Code2 },
    { num: "04", title: "Launch & Support", desc: "We deploy, monitor, and continue to improve post-launch.", icon: Zap },
];

/* ──────── Bento Service Card ──────── */
function BentoCard({ service, index, isLarge, navigate }: { service: typeof servicesData[0]; index: number; isLarge: boolean; navigate: any }) {
    const Icon = service.icon;
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    // Unified accent color — all cards use the theme primary
    const accent = 'hsl(186, 80%, 42%)';

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    return (
        <div
            ref={cardRef}
            className={`group relative rounded-2xl cursor-pointer transition-all duration-700 ease-out overflow-hidden ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
            style={{ minHeight: isLarge ? '420px' : '280px' }}
            onClick={() => navigate(`/services/${service.slug}`)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-fade
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden">
                <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                        background: isHovered
                            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${accent}50, transparent 50%)`
                            : 'transparent',
                        opacity: isHovered ? 1 : 0,
                    }}
                />
            </div>

            {/* Card body */}
            <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-card via-card/90 to-background overflow-hidden">
                {/* Floating orb → follows mouse on hover */}
                <div
                    className="absolute w-[200px] h-[200px] rounded-full transition-all duration-700 blur-[80px] pointer-events-none"
                    style={{
                        background: accent,
                        opacity: isHovered ? 0.12 : 0.04,
                        left: isHovered ? `calc(${mousePos.x}% - 100px)` : '-40px',
                        top: isHovered ? `calc(${mousePos.y}% - 100px)` : '-40px',
                    }}
                />

                {/* Big number watermark */}
                <span
                    className="absolute font-black select-none pointer-events-none transition-all duration-700 tracking-tighter"
                    style={{
                        fontSize: isLarge ? '200px' : '140px',
                        lineHeight: 1,
                        right: isLarge ? '20px' : '10px',
                        bottom: isLarge ? '-30px' : '-25px',
                        color: accent,
                        opacity: isHovered ? 0.08 : 0.03,
                    }}
                >
                    {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className={`relative z-10 h-full flex flex-col ${isLarge ? 'p-10 lg:p-12' : 'p-7 lg:p-8'} justify-between`}>
                    <div>
                        {/* Top row: icon + arrow */}
                        <div className="flex items-start justify-between mb-6">
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                                style={{
                                    background: `linear-gradient(135deg, ${accent}18, ${accent}08)`,
                                    border: `1px solid ${accent}25`,
                                    boxShadow: isHovered ? `0 0 24px -4px ${accent}30` : 'none',
                                }}
                            >
                                <Icon size={24} style={{ color: accent }} />
                            </div>

                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-500 ease-out opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
                                style={{ borderColor: `${accent}40`, background: `${accent}10` }}
                            >
                                <ExternalLink size={14} style={{ color: accent }} />
                            </div>
                        </div>

                        {/* Tagline */}
                        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 text-primary/60 group-hover:text-primary/80 transition-colors duration-300">
                            {service.tagline}
                        </p>

                        {/* Title */}
                        <h3 className={`font-bold text-foreground/90 mb-3 tracking-tight transition-colors duration-300 group-hover:text-white ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                            {service.title}
                        </h3>

                        {/* Description — only on large cards */}
                        {isLarge && (
                            <p className="text-sm text-muted-foreground/70 leading-relaxed mb-6 max-w-lg group-hover:text-foreground/70 transition-colors duration-500">
                                {service.shortDescription}
                            </p>
                        )}

                        {/* Feature chips */}
                        <div className={`flex flex-wrap gap-2 ${isLarge ? '' : 'mt-3'}`}>
                            {service.features.slice(0, isLarge ? 4 : 2).map((f, j) => (
                                <span
                                    key={j}
                                    className="inline-flex items-center gap-1 text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-300"
                                    style={{
                                        background: `${accent}08`,
                                        border: `1px solid ${accent}15`,
                                        color: `${accent}cc`,
                                    }}
                                >
                                    <CheckCircle2 size={10} style={{ color: accent }} />
                                    {f.title}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: learn more */}
                    <div className="flex items-center gap-2 mt-4">
                        <span className="text-sm font-medium text-primary/60 transition-colors duration-300 group-hover:text-primary">
                            Explore service
                        </span>
                        <ArrowRight
                            size={14}
                            className="text-primary/60 transition-all duration-400 ease-out group-hover:text-primary group-hover:translate-x-1.5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPage() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0 });
        const handleScroll = () => {
            const elements = document.querySelectorAll('[data-fade]');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 80) {
                    el.classList.add('fade-in');
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        setTimeout(handleScroll, 100);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isLargeCard = (i: number) => i === 0 || i === 4;

    return (
        <div className="bg-background text-foreground">
            <SEO
                title="Services - NEO PERION | UI/UX, SaaS, Web Modernization, AI, Data Analytics & Digital Marketing"
                description="Explore NEO PERION's full range of services: UI/UX Design, Custom SaaS Solutions, Web & App Modernization, Data Analytics, Mobile Development, AI Automation, and Digital Marketing."
                keywords="NEO PERION services, UI UX design, custom SaaS development, web modernization, data analytics, mobile app development, AI automation, digital marketing"
                url="https://www.neoperion.com/services"
            />
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
                * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
                [data-fade] {
                    opacity: 0;
                    transform: translateY(18px);
                    transition: opacity 0.7s ease-out, transform 0.7s ease-out;
                }
                [data-fade].fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                @keyframes heroHeadline {
                    0% { opacity: 0; transform: translateY(30px) scale(0.97); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes heroSubtext {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-hero-headline { animation: heroHeadline 1s ease-out 0.2s both; }
                .animate-hero-subtext { animation: heroSubtext 0.9s ease-out 0.5s both; }
                .animate-hero-cta { animation: heroSubtext 0.9s ease-out 0.8s both; }
                .animate-marquee { animation: marquee 25s linear infinite; }
            `}</style>

            <Header />

            {/* ═══════ HERO ═══════ */}
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
                    <div className="max-w-2xl">
                        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-primary/70 mb-6 animate-hero-subtext">
                            Our Services
                        </p>

                        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-none mb-6 text-foreground animate-hero-headline">
                            Solutions that<br />
                            <span className="text-primary">drive growth</span>
                        </h1>

                        <p className="text-[15px] text-muted-foreground/70 mb-10 leading-relaxed animate-hero-subtext">
                            From design to deployment — we build, modernize, and scale software systems that move your business forward.
                        </p>

                        <div className="flex flex-wrap gap-4 animate-hero-cta">
                            <button
                                onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                                className="group px-7 py-3.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                                style={{ background: 'hsl(186, 80%, 42%)', color: '#02040A', boxShadow: '0 8px 30px -6px hsl(186 80% 42% / 0.4)' }}
                            >
                                Start a project
                                <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={() => navigate('/about')}
                                className="px-7 py-3.5 rounded-xl text-sm font-medium text-muted-foreground border border-border/60 hover:border-primary/40 hover:text-foreground hover:bg-primary/5 transition-all duration-300"
                            >
                                Learn about us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════ SCROLLING MARQUEE ═══════ */}
            <div className="overflow-hidden border-y border-border/50 py-4 bg-card/30">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...servicesData, ...servicesData].map((s, i) => (
                        <span key={i} className="inline-flex items-center gap-3 mx-8 text-sm font-medium text-muted-foreground/50">
                            <span className="w-1 h-1 rounded-full bg-primary/50" />
                            {s.title}
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══════ BENTO GRID ═══════ */}
            <section className="px-6 lg:px-12 py-28 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16" data-fade>
                    <div>
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-3">What we build</p>
                        <h2 className="text-4xl lg:text-5xl font-black text-foreground">Our Services</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                    {servicesData.map((service, i) => (
                        <BentoCard
                            key={service.slug}
                            service={service}
                            index={i}
                            isLarge={isLargeCard(i)}
                            navigate={navigate}
                        />
                    ))}
                </div>
            </section>

            {/* ═══════ DIVIDER ═══════ */}
            <div className="px-8 lg:px-16">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-border to-transparent max-w-6xl mx-auto" />
            </div>

            {/* ═══════ PROCESS ═══════ */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-3">How it works</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-foreground">Our Process</h2>
                </div>

                <div data-fade>
                    {processSteps.map((step, i) => {
                        const StepIcon = step.icon;
                        const isLast = i === processSteps.length - 1;
                        return (
                            <div key={i} className="group relative">
                                {/* Top divider */}
                                <div className="h-px bg-border/50 group-hover:bg-primary/20 transition-colors duration-500" />

                                {/* Left accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-transparent group-hover:bg-primary/40 transition-all duration-500 rounded-r-full" />

                                {/* Row */}
                                <div className="flex items-center gap-6 lg:gap-10 py-7 pl-6 pr-4 group-hover:bg-primary/[0.025] transition-colors duration-300 rounded-r-xl">

                                    {/* Step number */}
                                    <div className="shrink-0 w-16 lg:w-20">
                                        <span className="block text-[9px] font-bold tracking-[0.3em] uppercase text-muted-foreground/25 group-hover:text-primary/40 transition-colors duration-500 mb-0.5">
                                            Step
                                        </span>
                                        <span className="text-[52px] lg:text-[64px] font-black text-foreground/[0.05] group-hover:text-primary/[0.13] transition-colors duration-700 leading-none select-none">
                                            {step.num}
                                        </span>
                                    </div>

                                    {/* Vertical separator */}
                                    <div className="hidden lg:block w-px self-stretch bg-border/30 shrink-0 group-hover:bg-primary/15 transition-colors duration-500" />

                                    {/* Title */}
                                    <div className="shrink-0 lg:w-52">
                                        <h3 className="text-lg lg:text-xl font-bold text-foreground/80 tracking-tight group-hover:text-foreground transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                    </div>

                                    {/* Description — desktop inline */}
                                    <p className="hidden lg:block flex-1 text-[13px] text-muted-foreground/65 leading-relaxed group-hover:text-foreground/65 transition-colors duration-300">
                                        {step.desc}
                                    </p>

                                    {/* Icon */}
                                    <div className="shrink-0 ml-auto lg:ml-0 w-11 h-11 rounded-xl bg-card border border-border/50 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/25 group-hover:shadow-[0_0_16px_-4px_hsl(186_80%_42%_/_0.18)] transition-all duration-500">
                                        <StepIcon size={17} className="text-primary/50 group-hover:text-primary group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Mobile description */}
                                <p className="lg:hidden text-[12px] text-muted-foreground/65 leading-relaxed pl-6 pb-5 pr-4">
                                    {step.desc}
                                </p>

                                {isLast && <div className="h-px bg-border/50" />}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section className="px-8 lg:px-16 py-28 max-w-4xl mx-auto text-center">
                <div data-fade>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6 text-foreground">
                        Ready to build something great?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                        Tell us about your project — we'll get back within 24 hours with a clear plan and honest timeline.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                            className="group px-7 py-3.5 bg-foreground text-background rounded-xl text-sm font-bold hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(255,255,255,0.15)] flex items-center gap-2 justify-center"
                        >
                            Start a project <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-7 py-3.5 text-muted-foreground border border-border hover:border-primary/30 rounded-xl text-sm font-medium hover:text-foreground hover:bg-primary/5 transition-all duration-300"
                        >
                            Learn about us
                        </button>
                    </div>
                </div>
            </section>

            <div className="h-20" />
            <Footer />
        </div>
    );
}

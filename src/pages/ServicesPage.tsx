import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, BarChart3, Shield, Code2, Zap, Users, CheckCircle2, ExternalLink } from 'lucide-react';
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
            className={`group relative rounded-3xl cursor-pointer transition-all duration-700 ease-out overflow-hidden ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                }`}
            style={{
                minHeight: isLarge ? '420px' : '280px',
            }}
            onClick={() => navigate(`/services/${service.slug}`)}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            data-fade
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden">
                <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                        background: isHovered
                            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${service.color}50, transparent 50%)`
                            : 'transparent',
                        opacity: isHovered ? 1 : 0,
                    }}
                />
            </div>

            {/* Card body */}
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#080e1c] to-[#060a14] overflow-hidden">
                {/* Floating orb → follows mouse on hover */}
                <div
                    className="absolute w-[200px] h-[200px] rounded-full transition-all duration-700 blur-[80px] pointer-events-none"
                    style={{
                        background: service.color,
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
                        color: service.color,
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
                                    background: `linear-gradient(135deg, ${service.color}18, ${service.color}08)`,
                                    border: `1px solid ${service.color}25`,
                                    boxShadow: isHovered ? `0 0 24px -4px ${service.color}30` : 'none',
                                }}
                            >
                                <Icon size={24} style={{ color: service.color }} />
                            </div>

                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-500 opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0"
                                style={{ borderColor: `${service.color}40`, background: `${service.color}10` }}
                            >
                                <ExternalLink size={14} style={{ color: service.color }} />
                            </div>
                        </div>

                        {/* Tagline */}
                        <p
                            className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 transition-colors duration-300"
                            style={{ color: '#00d4ff', opacity: 0.8 }}
                        >
                            {service.tagline}
                        </p>

                        {/* Title */}
                        <h3 className={`font-bold text-white mb-3 transition-colors duration-300 ${isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                            {service.title}
                        </h3>

                        {/* Description — only on large cards */}
                        {isLarge && (
                            <p className="text-sm text-[#00d4ff]/60 leading-relaxed mb-6 max-w-lg group-hover:text-[#00d4ff]/80 transition-colors duration-500">
                                {service.shortDescription}
                            </p>
                        )}

                        {/* Feature chips — show on large cards, or on hover for small */}
                        <div className={`flex flex-wrap gap-2 ${isLarge ? '' : 'mt-3'}`}>
                            {service.features.slice(0, isLarge ? 4 : 2).map((f, j) => (
                                <span
                                    key={j}
                                    className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-full transition-all duration-300"
                                    style={{
                                        background: `${service.color}08`,
                                        border: `1px solid ${service.color}15`,
                                        color: `${service.color}cc`,
                                    }}
                                >
                                    <CheckCircle2 size={10} style={{ color: service.color }} />
                                    {f.title}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Bottom: learn more */}
                    <div className="flex items-center gap-2 mt-4">
                        <span
                            className="text-sm font-medium transition-all duration-300 group-hover:tracking-wide"
                            style={{ color: '#00d4ff', opacity: 0.8 }}
                        >
                            Explore service
                        </span>
                        <ArrowRight
                            size={14}
                            className="transition-all duration-500 group-hover:translate-x-2"
                            style={{ color: '#00d4ff', opacity: 0.8 }}
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

    // Bento layout: indices 0, 3, 6 are large
    const isLargeCard = (i: number) => i === 0 || i === 4;

    return (
        <div className="bg-[#02040A] text-[#E5E7EB]">
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
            <section className="min-h-[75vh] flex items-center justify-center px-8 lg:px-16 py-36 bg-gradient-to-b from-[#050816] via-[#030710] to-[#02040A] relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
                    <FloatingLines
                        linesGradient={['#00d4ff', '#0099cc', '#006699']}
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

                <div className="max-w-3xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff]/80 text-xs font-medium tracking-wider uppercase mb-8 animate-hero-subtext" style={{ animationDelay: '0s' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                        Our Services
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] mb-6 animate-hero-headline">
                        <span className="text-white">Solutions that</span>
                        <br />
                        <span className="bg-gradient-to-r from-[#00d4ff] via-[#a855f7] to-[#f97316] text-transparent bg-clip-text">
                            drive growth
                        </span>
                    </h1>

                    <p className="text-lg text-[#00d4ff]/60 mb-10 leading-relaxed max-w-xl mx-auto animate-hero-subtext">
                        From design to deployment — we build, modernize, and scale software systems that move your business forward.
                    </p>

                    <div className="flex gap-4 justify-center animate-hero-cta">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                            className="group px-7 py-3.5 bg-white text-[#02040A] rounded-xl text-sm font-bold hover:bg-[#E5E7EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(255,255,255,0.15)] flex items-center gap-2"
                        >
                            Start a project
                            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </section>

            {/* ═══════ SCROLLING MARQUEE ═══════ */}
            <div className="overflow-hidden border-y border-[#1a1d2e]/50 py-4 bg-[#050816]/30">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...servicesData, ...servicesData].map((s, i) => (
                        <span key={i} className="inline-flex items-center gap-3 mx-8 text-sm font-medium text-[#00d4ff]/30">
                            <span className="w-1 h-1 rounded-full" style={{ background: s.color }} />
                            {s.title}
                        </span>
                    ))}
                </div>
            </div>

            {/* ═══════ BENTO GRID ═══════ */}
            <section className="px-6 lg:px-12 py-28 max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-16" data-fade>
                    <div>
                        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00d4ff]/80 mb-3">What we build</p>
                        <h2 className="text-4xl lg:text-5xl font-black text-white">Our Services</h2>
                    </div>
                    <p className="text-sm text-[#00d4ff]/50 max-w-xs hidden lg:block leading-relaxed">
                        Click any service to explore capabilities, process, and technologies in detail.
                    </p>
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
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1a1d2e] to-transparent max-w-6xl mx-auto" />
            </div>

            {/* ═══════ PROCESS ═══════ */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-20" data-fade>
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00d4ff]/80 mb-3">How it works</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Our Process</h2>
                </div>

                <div className="relative" data-fade>
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1a1d2e] to-transparent -translate-y-1/2" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, i) => {
                            const StepIcon = step.icon;
                            return (
                                <div key={i} className="group relative text-center p-8 rounded-2xl border border-[#1a1d2e]/60 bg-[#060a14]/80 hover:border-[#00d4ff]/20 hover:bg-[#0c1222] transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm">
                                    <span className="text-[56px] font-black leading-none text-white/[0.02] group-hover:text-[#00d4ff]/[0.06] transition-all duration-700 absolute top-2 right-4 select-none pointer-events-none">
                                        {step.num}
                                    </span>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-[#00d4ff]/8 border border-[#00d4ff]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#00d4ff]/12 group-hover:border-[#00d4ff]/30 group-hover:shadow-[0_0_24px_-6px_rgba(0,212,255,0.2)] transition-all duration-500">
                                            <StepIcon size={20} className="text-[#00d4ff] opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                        <h3 className="text-base font-bold text-white/90 mb-2 group-hover:text-white transition-colors duration-300">{step.title}</h3>
                                        <p className="text-[13px] text-[#00d4ff]/60 leading-relaxed group-hover:text-[#00d4ff]/80 transition-colors duration-300">{step.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════ DIVIDER ═══════ */}
            <div className="px-8 lg:px-16">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-[#1a1d2e] to-transparent max-w-6xl mx-auto" />
            </div>

            {/* ═══════ WHY CHOOSE US ═══════ */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#00d4ff]/80 mb-3">Why NEO PERION</p>
                    <h2 className="text-4xl lg:text-5xl font-black text-white">Why teams choose us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-fade>
                    {[
                        { icon: Shield, title: "Reliable & Stable", desc: "We build systems that don't break. Stability is engineered into everything we deliver.", color: "#10b981" },
                        { icon: Zap, title: "Fast Execution", desc: "From kickoff to launch in weeks, not months. We move fast without cutting corners.", color: "#f59e0b" },
                        { icon: Users, title: "Long-term Partners", desc: "We don't disappear after launch. Support, iteration, and scaling are part of the deal.", color: "#a855f7" },
                    ].map((item, i) => {
                        const ItemIcon = item.icon;
                        return (
                            <div key={i} className="group text-center p-8 rounded-2xl border border-[#1a1d2e]/60 bg-[#060a14]/80 hover:bg-[#0c1222] transition-all duration-500 hover:-translate-y-1">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110"
                                    style={{ background: `${item.color}10`, border: `1px solid ${item.color}20` }}
                                >
                                    <ItemIcon size={22} style={{ color: item.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h3 className="text-lg font-bold text-white/90 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="text-[13px] text-[#00d4ff]/60 leading-relaxed group-hover:text-[#00d4ff]/80 transition-colors">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ═══════ CTA ═══════ */}
            <section className="px-8 lg:px-16 py-28 max-w-4xl mx-auto text-center">
                <div data-fade>
                    <h2 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                        Ready to build something great?
                    </h2>
                    <p className="text-lg text-[#00d4ff]/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Tell us about your project — we'll get back within 24 hours with a clear plan and honest timeline.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 100); }}
                            className="group px-7 py-3.5 bg-white text-[#02040A] rounded-xl text-sm font-bold hover:bg-[#E5E7EB] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(255,255,255,0.15)] flex items-center gap-2 justify-center"
                        >
                            Start a project <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => navigate('/about')}
                            className="px-7 py-3.5 text-[#00d4ff]/70 border border-[#00d4ff]/20 rounded-xl text-sm font-medium hover:border-[#00d4ff]/40 hover:text-white hover:bg-[#00d4ff]/10 transition-all duration-300"
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

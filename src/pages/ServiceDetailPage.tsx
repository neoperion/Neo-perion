import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import FloatingLines from "@/components/FloatingLines";
import { getServiceBySlug, servicesData } from "@/data/servicesData";

export default function ServiceDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const service = getServiceBySlug(slug || '');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    }, [slug]);

    if (!service) {
        return (
            <div className="bg-[#02040A] text-[#E5E7EB] min-h-screen">
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-8">
                    <h1 className="text-4xl font-bold mb-4">Service not found</h1>
                    <p className="text-[#9CA3AF] mb-8">The service you're looking for doesn't exist.</p>
                    <button
                        onClick={() => navigate('/services')}
                        className="px-6 py-3 bg-[#00d4ff] text-[#02040A] rounded-lg text-sm font-semibold hover:bg-[#00b8e6] transition-all duration-300"
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

    return (
        <div className="bg-[#02040A] text-[#E5E7EB]">
            <SEO
                title={`${service.title} - NEO PERION | ${service.tagline}`}
                description={service.heroSubtext}
                keywords={`NEO PERION ${service.title}, ${service.title} services, ${service.title} company India, ${service.tagline}`}
                url={`https://www.neoperion.com/services/${service.slug}`}
            />
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
      `}</style>

            <Header />

            {/* ─────────── HERO ─────────── */}
            <section className="min-h-[75vh] flex items-center px-8 lg:px-16 py-32 bg-gradient-to-br from-[#050816] to-[#02040A] relative overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
                    <FloatingLines
                        linesGradient={[service.color, `${service.color}99`, `${service.color}55`]}
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

                <div className="max-w-3xl relative z-10 mx-auto text-center">
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-xs text-[#00d4ff]/80 mb-6 animate-subtext" style={{ animationDelay: '0s' }}>
                        <button onClick={() => navigate('/')} className="hover:text-white transition-colors">Home</button>
                        <span>/</span>
                        <button onClick={() => navigate('/services')} className="hover:text-white transition-colors">Services</button>
                        <span>/</span>
                        <span style={{ color: service.color }}>{service.title}</span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-subtext" style={{ background: `${service.color}15`, border: `1px solid ${service.color}30`, animationDelay: '0.1s' }}>
                        <Icon size={32} style={{ color: service.color }} />
                    </div>

                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4 animate-subtext" style={{ color: '#00d4ff', opacity: 0.8, animationDelay: '0.15s' }}>{service.tagline}</p>

                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 text-[#E5E7EB] animate-headline">
                        {service.heroHeadline}
                    </h1>

                    <p className="text-lg mb-10 leading-relaxed max-w-2xl mx-auto animate-subtext" style={{ color: '#00d4ff', opacity: 0.6 }}>
                        {service.heroSubtext}
                    </p>

                    <div className="flex gap-4 justify-center animate-cta">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                            style={{ background: service.color, color: '#02040A', boxShadow: `0 8px 30px -6px ${service.color}40` }}
                        >
                            {service.ctaText} <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-7 py-3 bg-transparent text-[#E5E7EB]/80 border border-[#2F3138] rounded-lg text-sm font-medium hover:text-white hover:bg-[#050816] transition-all duration-300"
                            style={{ ['--hover-border' as string]: service.color, borderColor: `${service.color}30` }}
                        >
                            All services
                        </button>
                    </div>
                </div>
            </section>

            {/* ─────────── OVERVIEW ─────────── */}
            <section className="px-8 lg:px-16 py-24 max-w-4xl mx-auto">
                <div data-fade>
                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.8 }}>Overview</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#E5E7EB] mb-8">What we deliver</h2>
                    <div className="space-y-5">
                        {service.overview.split('\n\n').map((paragraph, i) => (
                            <p key={i} className="leading-relaxed text-base" style={{ color: '#00d4ff', opacity: 0.6 }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F3138] to-transparent max-w-5xl mx-auto" /></div>

            {/* ─────────── FEATURES / WHAT'S INCLUDED ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.8 }}>What's included</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#E5E7EB]">Everything you need</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.features.map((feature, i) => (
                        <div
                            key={i}
                            className="group p-7 rounded-2xl border border-[#1a1d2e] bg-[#050816]/60 hover:bg-[#0a0f1e] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
                            data-fade
                            style={{ transitionDelay: `${i * 60}ms` }}
                        >
                            {/* Corner glow on hover */}
                            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-2xl" style={{ background: service.color }} />

                            <div className="relative z-10">
                                <div className="flex items-start gap-4 mb-3">
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}>
                                        <CheckCircle2 size={16} style={{ color: service.color }} />
                                    </div>
                                    <h3 className="text-lg font-bold text-[#E5E7EB] group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed pl-12 group-hover:text-white/90 transition-colors duration-300" style={{ color: '#00d4ff', opacity: 0.6 }}>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F3138] to-transparent max-w-5xl mx-auto" /></div>

            {/* ─────────── PROCESS ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-6xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.8 }}>Our process</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#E5E7EB]">How we work</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-fade>
                    {service.process.map((step, i) => (
                        <div key={i} className="group relative text-center p-8 rounded-2xl border border-[#1a1d2e] bg-[#050816]/60 hover:bg-[#0a0f1e] transition-all duration-500 hover:-translate-y-1" style={{ ['--border-hover' as string]: `${service.color}40` }}>
                            <span className="text-[72px] font-black leading-none text-white/[0.03] group-hover:text-white/[0.06] transition-all duration-700 absolute top-2 right-4 select-none pointer-events-none">
                                {step.step}
                            </span>
                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-5 text-sm font-bold" style={{ background: `${service.color}15`, border: `1px solid ${service.color}25`, color: service.color }}>
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-bold text-[#E5E7EB] mb-2 group-hover:text-white transition-colors">{step.title}</h3>
                                <p className="text-sm leading-relaxed group-hover:text-white/90 transition-colors" style={{ color: '#00d4ff', opacity: 0.6 }}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F3138] to-transparent max-w-5xl mx-auto" /></div>

            {/* ─────────── TECH STACK ─────────── */}
            <section className="px-8 lg:px-16 py-24 max-w-5xl mx-auto">
                <div className="text-center mb-12" data-fade>
                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.8 }}>Technology</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#E5E7EB]">Tools & Tech we use</h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3" data-fade>
                    {service.technologies.map((tech, i) => (
                        <span
                            key={i}
                            className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 hover:-translate-y-0.5"
                            style={{ borderColor: `${service.color}25`, color: service.color, background: `${service.color}08` }}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F3138] to-transparent max-w-5xl mx-auto" /></div>

            {/* ─────────── FAQ ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-3xl mx-auto">
                <div className="text-center mb-16" data-fade>
                    <p className="text-sm font-medium tracking-[0.2em] uppercase mb-4" style={{ color: '#00d4ff', opacity: 0.8 }}>FAQ</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#E5E7EB]">Common questions</h2>
                </div>

                <div className="space-y-4" data-fade>
                    {service.faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-2xl border border-[#1a1d2e] bg-[#050816]/60 overflow-hidden transition-all duration-300"
                            style={{ borderColor: openFaq === i ? `${service.color}30` : undefined }}
                        >
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#0a0f1e] transition-colors duration-300"
                            >
                                <h3 className="text-base font-semibold text-[#E5E7EB] pr-4">{faq.question}</h3>
                                {openFaq === i ? (
                                    <ChevronUp size={18} style={{ color: service.color }} className="flex-shrink-0" />
                                ) : (
                                    <ChevronDown size={18} style={{ color: `${service.color}60` }} className="flex-shrink-0" />
                                )}
                            </button>
                            <div
                                className="overflow-hidden transition-all duration-300"
                                style={{ maxHeight: openFaq === i ? '400px' : '0px', opacity: openFaq === i ? 1 : 0 }}
                            >
                                <p className="px-6 pb-6 text-sm leading-relaxed" style={{ color: '#00d4ff', opacity: 0.6 }}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─────────── DIVIDER ─────────── */}
            <div className="px-8 lg:px-16"><div className="h-[1px] bg-gradient-to-r from-transparent via-[#2F3138] to-transparent max-w-5xl mx-auto" /></div>

            {/* ─────────── NAVIGATE BETWEEN SERVICES ─────────── */}
            <section className="px-8 lg:px-16 py-16 max-w-5xl mx-auto">
                <div className="flex justify-between items-center" data-fade>
                    <button
                        onClick={() => navigate(`/services/${prevService.slug}`)}
                        className="group flex items-center gap-3 text-left hover:-translate-x-1 transition-all duration-300"
                    >
                        <ArrowLeft size={20} style={{ color: '#00d4ff', opacity: 0.8 }} className="group-hover:text-white transition-colors" />
                        <div>
                            <p className="text-xs mb-1" style={{ color: '#00d4ff', opacity: 0.6 }}>Previous</p>
                            <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{prevService.title}</p>
                        </div>
                    </button>

                    <button
                        onClick={() => navigate(`/services/${nextService.slug}`)}
                        className="group flex items-center gap-3 text-right hover:translate-x-1 transition-all duration-300"
                    >
                        <div>
                            <p className="text-xs mb-1" style={{ color: '#00d4ff', opacity: 0.6 }}>Next</p>
                            <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">{nextService.title}</p>
                        </div>
                        <ArrowRight size={20} style={{ color: '#00d4ff', opacity: 0.8 }} className="group-hover:text-white transition-colors" />
                    </button>
                </div>
            </section>

            {/* ─────────── CTA ─────────── */}
            <section className="px-8 lg:px-16 py-28 max-w-4xl mx-auto text-center">
                <div data-fade>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#E5E7EB]">
                        Ready to get started?
                    </h2>
                    <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: '#00d4ff', opacity: 0.6 }}>
                        Let's discuss how our {service.title.toLowerCase()} services can help your business grow. Get a free consultation within 24 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => { navigate('/'); setTimeout(() => { document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                            className="px-7 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 justify-center"
                            style={{ background: service.color, color: '#02040A', boxShadow: `0 8px 30px -6px ${service.color}40` }}
                        >
                            {service.ctaText} <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => navigate('/services')}
                            className="px-7 py-3 bg-transparent text-[#E5E7EB]/70 border border-[#2F3138] rounded-lg text-sm font-medium hover:text-white hover:bg-[#050816] transition-all duration-300"
                            style={{ borderColor: `${service.color}30` }}
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

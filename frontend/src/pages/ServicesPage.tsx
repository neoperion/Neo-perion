import React, { useEffect } from 'react';
import { ArrowRight, BarChart3, Code2, Zap, Users, CheckCircle2 } from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useNavigate } from 'react-router-dom';
import { servicesData } from "@/data/servicesData";
import { motion } from 'framer-motion';
import { MobileGate, MobileShell } from "@/components/mobile";

const processSteps = [
    { num: "01", title: "Discovery & Architecture", desc: "We dive deep into your business logic, mapping out technical requirements and system architecture before writing a single line of code.", icon: Users },
    { num: "02", title: "Agile Engineering", desc: "Rapid, iterative development sprints. You see working software every two weeks, ensuring we stay aligned with your vision.", icon: Code2 },
    { num: "03", title: "Testing & QA", desc: "Rigorous automated testing, security audits, and performance profiling to guarantee enterprise-grade stability.", icon: BarChart3 },
    { num: "04", title: "Deployment & Scale", desc: "Seamless CI/CD deployment, infrastructure scaling, and ongoing DevOps support to keep your systems running flawlessly.", icon: Zap },
];

export default function ServicesPage() {
    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    return (
        <MobileGate mobileOnly fallback={
        <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans selection:bg-neo-blue selection:text-white">
            <SEO
                title="Enterprise Services | Neo Perion"
                description="Explore NEO PERION's full range of services: AI Systems, Web Platforms, Mobile Products, and Cloud Architecture."
                keywords="NEO PERION services, SaaS development, web modernization, mobile app development, AI automation"
                url="https://www.neoperion.com/services"
            />
            <Header />

            <main className="flex-grow">
                {/* ═══════ HERO SECTION ═══════ */}
                <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-12 overflow-hidden border-b border-slate-200 bg-white">
                    {/* Abstract Light Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neo-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="max-w-4xl"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-8">
                                <div className="w-2 h-2 rounded-full bg-neo-blue animate-pulse" />
                                <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-600">Our Capabilities</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-8 text-slate-900">
                                Engineering that <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-indigo-600">scales globally.</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 max-w-2xl font-medium">
                                We architect, build, and deploy enterprise-grade software and AI systems designed for extreme performance and reliability.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-8 py-4 bg-slate-900 hover:bg-neo-blue text-white rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_24px_-8px_rgba(37,99,255,0.5)] flex items-center gap-3 group"
                                >
                                    Start a project
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button
                                    onClick={() => {
                                        document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl text-lg font-bold transition-all duration-300"
                                >
                                    View capabilities
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ═══════ SERVICES STICKY SCROLL ═══════ */}
                <section id="services-list" className="py-12 bg-slate-50 relative">
                    <div className="max-w-7xl mx-auto px-6 lg:px-12">
                        
                        {servicesData.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.slug} className="py-24 border-b border-slate-200 last:border-0 relative">
                                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                                        
                                        {/* Left Column (Sticky Title & Overview) */}
                                        <div className="lg:col-span-5 relative">
                                            <div className="lg:sticky lg:top-32">
                                                {/* Big Number Watermark */}
                                                <div className="absolute -top-12 -left-8 text-[120px] font-black text-slate-900/[0.03] select-none pointer-events-none leading-none">
                                                    {String(index + 1).padStart(2, '0')}
                                                </div>
                                                
                                                <div className="relative z-10">
                                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8">
                                                        <Icon className="w-8 h-8 text-neo-blue" />
                                                    </div>
                                                    
                                                    <p className="text-sm font-bold tracking-[0.2em] uppercase text-neo-blue mb-4">
                                                        {service.tagline}
                                                    </p>
                                                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                                                        {service.title}
                                                    </h2>
                                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                                        {service.overview}
                                                    </p>
                                                    
                                                    <button
                                                        onClick={() => navigate(`/services/${service.slug}`)}
                                                        className="inline-flex items-center gap-2 text-lg font-bold text-slate-900 hover:text-neo-blue transition-colors group"
                                                    >
                                                        Explore detailed capabilities
                                                        <span className="w-8 h-8 rounded-full bg-slate-200 group-hover:bg-neo-blue/10 flex items-center justify-center transition-colors">
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Column (Features Grid) */}
                                        <div className="lg:col-span-7">
                                            <div className="mb-10 p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
                                                {/* Decorative background element */}
                                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-neo-blue/20 rounded-full blur-[60px]" />
                                                <h3 className="text-2xl font-bold mb-4 relative z-10">{service.heroHeadline}</h3>
                                                <p className="text-slate-300 text-lg relative z-10">{service.heroSubtext}</p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                {service.features.map((feature, fIndex) => (
                                                    <motion.div 
                                                        key={fIndex}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true, margin: "-50px" }}
                                                        transition={{ duration: 0.5, delay: (fIndex % 4) * 0.1 }}
                                                        className="bg-white p-8 rounded-3xl border border-slate-200 hover:border-neo-blue/30 hover:shadow-[0_8px_30px_-12px_rgba(37,99,255,0.15)] transition-all duration-300 group"
                                                    >
                                                        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-neo-blue/5 group-hover:border-neo-blue/20 transition-colors">
                                                            <CheckCircle2 className="w-5 h-5 text-neo-blue" />
                                                        </div>
                                                        <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </section>

                {/* ═══════ PROCESS TIMELINE ═══════ */}
                <section className="py-32 px-6 lg:px-12 bg-white border-t border-slate-200">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-24">
                            <p className="text-sm font-bold tracking-[0.2em] uppercase text-neo-blue mb-4">How We Work</p>
                            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Enterprise Engineering Process</h2>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-slate-100 -z-10" />

                            {processSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div key={index} className="relative">
                                        <div className="w-24 h-24 bg-slate-50 border-2 border-white shadow-sm rounded-3xl flex items-center justify-center mb-8 mx-auto md:mx-0 relative">
                                            {/* Number Badge */}
                                            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-4 border-white shadow-sm">
                                                {step.num}
                                            </div>
                                            <Icon className="w-8 h-8 text-neo-blue" />
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-slate-900 mb-4 text-center md:text-left">{step.title}</h3>
                                        <p className="text-slate-600 text-center md:text-left leading-relaxed">{step.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ═══════ CALL TO ACTION ═══════ */}
                <section className="py-32 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
                    <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl">
                        {/* Abstract Backgrounds */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neo-blue/20 via-slate-900 to-slate-900 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                Ready to scale your technical infrastructure?
                            </h2>
                            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                                Schedule a technical strategy call with our senior architects. No sales pressure, just actionable engineering advice.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="px-8 py-4 bg-neo-gradient hover:bg-neo-gradient-hover text-white rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_30px_rgba(37,99,255,0.3)] hover:shadow-[0_0_40px_rgba(37,99,255,0.5)] flex items-center justify-center gap-3"
                                >
                                    Book a Strategy Call <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
        }>
          <MobileShell nav="bottom" showFooter>
            <div className="w-full pb-8">
              <div className="px-mobile-base pt-8">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-2">Services</p>
                <h1 className="text-display-lg text-white tracking-tight">Engineering capabilities.</h1>
                <p className="text-base text-white/70 mt-3 mb-6">AI-first architecture, scalable systems, and premium product engineering.</p>
              </div>
              <div className="px-mobile-base space-y-4 pb-8">
                {servicesData.map((s) => (
                  <button key={s.slug} onClick={() => navigate(`/services/${s.slug}`)}
                    className="w-full text-left p-5 rounded-3xl border border-white/[0.10] bg-gradient-to-br from-white/[0.04] to-white/[0.02] backdrop-blur-glass-1 active:scale-[0.98] transition-transform">
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-neo-highlight mb-1">{s.tagline}</p>
                    <h3 className="text-[17px] font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-[12px] text-white/65 line-clamp-3">{s.overview}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-[12px] text-neo-highlight font-semibold">Explore <ArrowRight size={12} /></span>
                  </button>
                ))}
              </div>
            </div>
          </MobileShell>
        </MobileGate>
    );
}

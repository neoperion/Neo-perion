import React, { useEffect } from 'react';
import { 
  ArrowRight, Brain, Sparkles, Database, Cloud, Smartphone, Workflow, Rocket, 
  Compass, MonitorPlay, Code, ShieldCheck, Cpu 
} from 'lucide-react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MobileGate, MobileShell } from "@/components/mobile";

const servicesList = [
  {
    title: "AI Systems",
    slug: "ai-systems-automation",
    icon: Brain,
    desc: "Enterprise-grade RAG architectures, AI agents, and contextual intelligence platforms.",
    tech: "RAG • LLM • Agents • Vector DB"
  },
  {
    title: "Deep AI Engineering",
    slug: "deep-ai-engineering",
    icon: Sparkles,
    desc: "Custom fine-tuned models, neural networks, and portable, auditable AI systems.",
    tech: "PyTorch • PyTorch Lightning • TensorFlow • MLFlow"
  },
  {
    title: "Enterprise Product Engineering",
    slug: "enterprise-product-engineering",
    icon: Database,
    desc: "End-to-end scalable product development, multi-tenant architectures, and robust engineering.",
    tech: "React • Node.js • PostgreSQL • Redis"
  },
  {
    title: "Cloud Native Platforms",
    slug: "cloud-native-web-platforms",
    icon: Cloud,
    desc: "High-performance, secure, and autoscaling cloud infrastructure with edge routing.",
    tech: "AWS • Docker • Kubernetes • Terraform"
  },
  {
    title: "Mobile Engineering",
    slug: "mobile-product-engineering",
    icon: Smartphone,
    desc: "Native and React Native mobile experiences built for fluid 60fps performance and offline state sync.",
    tech: "React Native • iOS (Swift) • Android (Kotlin) • Supabase"
  },
  {
    title: "Business Automation",
    slug: "intelligent-operations-automation",
    icon: Workflow,
    desc: "Intelligent operations, automatic data ingestion, and custom internal tools to eliminate manual labor.",
    tech: "Retool • Zapier • n8n • Python"
  },
  {
    title: "Startup-to-Scale CTO",
    slug: "startup-to-scale-engineering",
    icon: Rocket,
    desc: "Strategic technical leadership, fractional CTO advisory, and technical due diligence scaling for founders.",
    tech: "System Design • Scalability • Technical Diligence • AWS"
  }
];

const howWeWorkSteps = [
  {
    num: "01",
    title: "Discover",
    icon: Compass,
    desc: "We analyze your system requirements, data availability, and business logic to establish clear boundaries.",
    deliverable: "Technical Architecture Document"
  },
  {
    num: "02",
    title: "Design",
    icon: MonitorPlay,
    desc: "We design data pipelines, API models, schema topologies, and interactive client prototypes.",
    deliverable: "High-Fidelity Interactive Prototypes"
  },
  {
    num: "03",
    title: "Build",
    icon: Code,
    desc: "We execute bi-weekly development sprints with continuous integrations and feature flags.",
    deliverable: "Bi-weekly Working Sprints & Demos"
  },
  {
    num: "04",
    title: "Deploy",
    icon: ShieldCheck,
    desc: "We configure Kubernetes pods, automated pipelines, secure VPC networking, and secret storage.",
    deliverable: "Secure Automated CI/CD Pipelines"
  },
  {
    num: "05",
    title: "Scale",
    icon: Cpu,
    desc: "We perform automated profiling, resource budgeting, load simulations, and query index scaling.",
    deliverable: "Ongoing Monitoring & Cloud Optimization"
  }
];

export default function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  const renderServiceCard = (service: typeof servicesList[0]) => {
    const Icon = service.icon;
    return (
      <motion.div 
        key={service.slug}
        variants={cardVariants}
        className="bg-white border border-slate-900/[0.08] rounded-[28px] p-6 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(15,23,42,0.05)] transition-all duration-300 flex flex-col justify-between h-full group"
      >
        <div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 transition-colors group-hover:bg-[#3B82F6]/10">
            <Icon size={24} className="text-[#3B82F6]" />
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-3">{service.title}</h3>
          <p className="text-sm text-[#475569] leading-relaxed mb-6">{service.desc}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-[#3B82F6] tracking-wide mb-6">{service.tech}</p>
          <button 
            onClick={() => navigate(`/services/${service.slug}`)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors group/btn"
          >
            Explore Capability <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </motion.div>
    );
  };

  const renderProcessCard = (step: typeof howWeWorkSteps[0]) => {
    const Icon = step.icon;
    return (
      <div 
        key={step.num}
        className="bg-white border border-slate-900/[0.08] rounded-[28px] p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-extrabold text-[#3B82F6] tracking-widest">{step.num}</span>
            <Icon size={20} className="text-[#3B82F6]" />
          </div>
          <h3 className="text-lg font-bold text-[#0F172A] mb-2">{step.title}</h3>
          <p className="text-xs text-[#475569] leading-relaxed mb-6">{step.desc}</p>
        </div>
        <div className="pt-3 border-t border-slate-100">
          <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Deliverable</p>
          <p className="text-xs font-bold text-[#0F172A]">{step.deliverable}</p>
        </div>
      </div>
    );
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-[#F8FAFC] text-slate-900 min-h-[auto] flex flex-col font-sans selection:bg-[#3B82F6] selection:text-white">
        <SEO
          title="Engineering Capabilities & Services | Neo Perion"
          description="Explore Neo Perion's enterprise-grade capabilities: AI Systems, Deep AI Engineering, Cloud Platforms, and Mobile Engineering built for scale."
          url="https://www.neoperion.com/services"
        />
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative pt-40 pb-20 px-8 overflow-hidden bg-white border-b border-slate-900/[0.05]">
            {/* Ambient Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl text-left"
              >
                <p className="text-xs font-extrabold tracking-[0.25em] uppercase text-[#3B82F6] mb-4">SERVICES</p>
                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[1.05] mb-4 text-[#0F172A]">
                  Engineering Capabilities
                </h1>
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B82F6] mb-8 tracking-tight">
                  Built for Scale.
                </h2>
                
                <p className="text-lg md:text-xl text-[#475569] leading-relaxed mb-12 max-w-2xl font-medium">
                  From AI systems and enterprise software to mobile applications and startup acceleration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl text-sm font-bold transition-all shadow-[0_8px_20px_rgba(15,23,42,0.1)] flex items-center gap-2 group"
                  >
                    Book Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-200 rounded-xl text-sm font-bold transition-all"
                  >
                    Explore Services
                  </button>
                </div>

                {/* Statistics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-16 pt-12 border-t border-slate-200/60 max-w-4xl">
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">150+</p>
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mt-1">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">95%</p>
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mt-1">Client Retention</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-[#3B82F6] tracking-tight">AI-First</p>
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mt-1">Engineering Focus</p>
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">Ready</p>
                    <p className="text-xs font-bold text-[#475569] uppercase tracking-wider mt-1">Enterprise Ready</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services-grid" className="py-20 px-8 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto">
              <div className="text-left mb-12">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#3B82F6] mb-3">CAPABILITIES</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">Built for High-Growth Teams</h2>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {servicesList.map(renderServiceCard)}
              </motion.div>
            </div>
          </section>

          {/* How We Work Section */}
          <section className="py-20 px-8 bg-white border-t border-slate-900/[0.05]">
            <div className="max-w-7xl mx-auto">
              <div className="text-left mb-12">
                <p className="text-xs font-extrabold tracking-[0.2em] uppercase text-[#3B82F6] mb-3">PROCESS</p>
                <h2 className="text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight">How We Work</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {howWeWorkSteps.map(renderProcessCard)}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 px-8 bg-[#F8FAFC] border-t border-slate-900/[0.05]">
            <div className="max-w-5xl mx-auto bg-slate-950 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl border border-white/5 backdrop-blur-md">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                  Ready to Build Something Exceptional?
                </h2>
                <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                  Work with Neo Perion's AI-first engineering team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold transition-all shadow-[0_8px_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                  >
                    Book Strategy Call <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate('/company/case-studies')}
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-bold transition-all"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter bgClass="bg-[#F8FAFC]">
        <div className="w-full pb-8 bg-[#F8FAFC] text-slate-900">
          
          {/* Hero Section */}
          <section className="px-5 pt-8 pb-10 bg-white border-b border-slate-900/[0.05]">
            <p className="text-[10px] font-extrabold tracking-[0.25em] uppercase text-[#3B82F6] mb-3">SERVICES</p>
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] leading-tight mb-2">
              Engineering Capabilities
            </h1>
            <h2 className="text-2xl font-extrabold text-[#3B82F6] mb-5 tracking-tight">
              Built for Scale.
            </h2>
            <p className="text-sm text-[#475569] leading-relaxed mb-6 font-medium">
              From AI systems and enterprise software to mobile applications and startup acceleration.
            </p>
            
            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-4 bg-[#0F172A] hover:bg-slate-800 text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-sm"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  document.getElementById('mobile-services-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 bg-white border border-slate-200 text-[#0F172A] rounded-xl text-[14px] font-bold flex items-center justify-center active:scale-[0.98] transition-all"
              >
                Explore Services
              </button>
            </div>

            {/* Statistics Stacks */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200/60">
              <div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">150+</p>
                <p className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">95%</p>
                <p className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">Retention</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#3B82F6] tracking-tight">AI-First</p>
                <p className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">Engineering</p>
              </div>
              <div>
                <p className="text-2xl font-black text-[#0F172A] tracking-tight">Ready</p>
                <p className="text-[10px] font-bold text-[#475569] uppercase tracking-wider">Enterprise</p>
              </div>
            </div>
          </section>

          {/* Mobile Services Grid */}
          <section id="mobile-services-grid" className="px-5 py-10 bg-[#F8FAFC]">
            <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#3B82F6] mb-2">CAPABILITIES</p>
            <h2 className="text-xl font-black text-[#0F172A] mb-6 tracking-tight">Our Engineering Capabilities</h2>
            
            <div className="space-y-[24px]">
              {servicesList.map((service) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.slug}
                    className="bg-white border border-slate-900/[0.08] rounded-[28px] p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                        <Icon size={20} className="text-[#3B82F6]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed mb-4">{service.desc}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#3B82F6] tracking-wide mb-4">{service.tech}</p>
                      <button 
                        onClick={() => navigate(`/services/${service.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors"
                      >
                        Explore Capability <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* How We Work Section (Mobile) */}
          <section className="px-5 py-10 bg-white border-t border-slate-900/[0.05]">
            <p className="text-[10px] font-extrabold tracking-[0.2em] uppercase text-[#3B82F6] mb-2">PROCESS</p>
            <h2 className="text-xl font-black text-[#0F172A] mb-6 tracking-tight">How We Work</h2>

            <div className="space-y-6">
              {howWeWorkSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={step.num}
                    className="bg-[#F8FAFC] border border-slate-900/[0.08] rounded-[28px] p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-extrabold text-[#3B82F6] tracking-widest">{step.num}</span>
                        <Icon size={18} className="text-[#3B82F6]" />
                      </div>
                      <h3 className="text-base font-bold text-[#0F172A] mb-2">{step.title}</h3>
                      <p className="text-xs text-[#475569] leading-relaxed mb-4">{step.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-200/60">
                      <p className="text-[8px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Deliverable</p>
                      <p className="text-xs font-bold text-[#0F172A]">{step.deliverable}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Final CTA Section (Mobile) */}
          <section className="px-5 py-10 bg-[#F8FAFC] border-t border-slate-900/[0.05]">
            <div className="bg-slate-950 border border-white/10 rounded-[2rem] p-8 text-center relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">
                  Ready to Build Something Exceptional?
                </h2>
                <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                  Work with Neo Perion's AI-first engineering team.
                </p>
                
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="w-full py-4 bg-[#3B82F6] hover:bg-blue-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
                  >
                    Book Strategy Call <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => navigate('/company/case-studies')}
                    className="w-full py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl text-sm font-bold active:scale-[0.98] transition-all"
                  >
                    View Case Studies
                  </button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </MobileShell>
    </MobileGate>
  );
}


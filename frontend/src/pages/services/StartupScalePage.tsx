import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Rocket, ShieldCheck, Database, Code2, Network, ArrowRight, ShieldAlert, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  service: ServiceData;
}

export function StartupScalePage({ service }: Props) {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      name: "Pre-Seed",
      focus: "MVP with core loop only",
      desc: "Speed is everything. We build the monolithic MVP that validates your hypothesis without over-engineering.",
      icon: Code2
    },
    {
      name: "Seed",
      focus: "Multi-tenant SaaS foundation",
      desc: "The architecture shifts to support B2B logic, role-based access control, and secure data separation.",
      icon: Database
    },
    {
      name: "Series A",
      focus: "Scalable microservices & analytics",
      desc: "Breaking the monolith. Introducing event-driven architectures and deep data pipelines to handle growth.",
      icon: Network
    },
    {
      name: "Series B+",
      focus: "Enterprise compliance & global CDN",
      desc: "SOC2/HIPAA compliance, distributed global infrastructure, and SLA-driven performance guarantees.",
      icon: ShieldCheck
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      <SEO 
        title={`${service.title} | Neo Perion Solutions`}
        description={service.description}
      />
      <Header />
      
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
              {service.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              {service.heroSubtext}
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-neo-blue transition-colors duration-300"
            >
              {service.ctaText}
            </button>
          </div>

          {/* Architecture Evolution Diagram */}
          <div className="relative premium-card p-8 bg-slate-900 text-white min-h-[480px]">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-10 text-center">Architecture Evolution</h3>
            
            <div className="flex gap-4 mb-10">
              {stages.map((stage, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all ${activeStage === i ? 'bg-neo-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                >
                  {stage.name}
                </button>
              ))}
            </div>

            <div className="relative h-48 bg-slate-800 rounded-2xl border border-slate-700 p-8 overflow-hidden">
              {/* Background grid */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <div 
                    key={i} 
                    className={`absolute inset-0 p-8 flex flex-col items-center justify-center text-center transition-all duration-500 ${activeStage === i ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-8 z-0'}`}
                  >
                    <Icon className="text-neo-blue mb-4" size={40} />
                    <h4 className="text-xl font-bold mb-2">{stage.focus}</h4>
                    <p className="text-sm text-slate-400 max-w-sm">{stage.desc}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-widest">
              <span>Time / Funding</span>
              <ArrowRight size={16} />
              <span>Complexity / Scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Due Diligence Readiness */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Technical Due Diligence Readiness</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">When VCs evaluate your startup for funding, their technical auditors will scrutinize your systems. We ensure you pass with flying colors.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <ShieldAlert className="text-red-500" size={24} />
                <h3 className="text-xl font-bold text-slate-900">What Investors Flag</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></div>"Spaghetti code" with no documentation</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></div>Hardcoded secrets and poor security posture</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></div>Database schemas that can't handle scale</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></div>Over-dependence on single freelance developers</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2"></div>No automated testing or CI/CD pipelines</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-emerald-500" size={24} />
                <h3 className="text-xl font-bold text-slate-900">How We Prepare You</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>Comprehensive architecture diagrams and docs</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>Enterprise-grade auth (Supabase/Auth0)</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>Scalable PostgreSQL schemas with indexing</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>Institutional knowledge transfer</li>
                <li className="flex gap-3 text-slate-700"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></div>100% automated deployment pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Fractional CTO Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl">{service.overview}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="text-neo-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}

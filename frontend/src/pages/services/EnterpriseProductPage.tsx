import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Code, Box, GitBranch, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  service: ServiceData;
}

export function EnterpriseProductPage({ service }: Props) {
  const navigate = useNavigate();

  const timelineData = [
    { weeks: "Week 1-2", phase: "Discovery & Architecture Planning", width: "15%", offset: "0%", color: "bg-slate-300" },
    { weeks: "Week 3-4", phase: "Technical Specification & Design System", width: "15%", offset: "15%", color: "bg-slate-400" },
    { weeks: "Week 5-10", phase: "Core Development Sprints (Bi-weekly demos)", width: "40%", offset: "30%", color: "bg-neo-blue" },
    { weeks: "Week 11-12", phase: "QA, Security Audit, Performance Testing", width: "15%", offset: "70%", color: "bg-amber-400" },
    { weeks: "Week 13", phase: "Staged Launch & Monitoring", width: "8%", offset: "85%", color: "bg-emerald-400" },
    { weeks: "Week 14+", phase: "Scale & Iterate Partnership", width: "7%", offset: "93%", color: "bg-slate-900" },
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

          {/* Interactive Gantt Chart Visual */}
          <div className="relative premium-card p-8 bg-white border border-slate-200">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Engineering Lifecycle</h3>
            
            <div className="space-y-6 relative">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex justify-between pointer-events-none opacity-5">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-full w-px bg-slate-900"></div>
                ))}
              </div>

              {timelineData.map((item, i) => (
                <div key={i} className="relative h-14 group">
                  <div 
                    className={`absolute h-full rounded-lg ${item.color} shadow-sm flex items-center px-4 overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-default`}
                    style={{ left: item.offset, width: item.width }}
                  >
                    <span className="text-xs font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.weeks}
                    </span>
                  </div>
                  {/* Label outside the bar for narrow ones, or a tooltip */}
                  <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-slate-900 text-white text-xs py-1 px-2 rounded whitespace-nowrap shadow-xl pointer-events-none" style={{ left: `calc(${item.offset} + (${item.width} / 2))` }}>
                    {item.phase}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mt-4">
              <span>Kickoff</span>
              <span>Launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery to Launch Timeline */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Discovery to Launch Timeline</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our proven methodology ensures your product is built right the first time, without missing deadlines.</p>
          </div>

          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-10 space-y-12">
            {timelineData.map((item, i) => (
              <div key={i} className="relative pl-10 md:pl-16 group">
                <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ${item.color} border-4 border-white shadow-sm transition-transform group-hover:scale-125`}></div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-neo-blue/20 transition-colors">
                  <span className="text-neo-blue font-bold text-sm tracking-widest uppercase mb-2 block">{item.weeks}</span>
                  <h3 className="text-xl font-bold text-slate-900">{item.phase}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Engineering Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl">{service.overview}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, i) => {
              const icons = [Box, GitBranch, Terminal, Code];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-neo-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
}

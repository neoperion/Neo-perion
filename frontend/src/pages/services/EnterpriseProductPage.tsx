import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { Code, Box, GitBranch, Terminal, ArrowRight } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import { useNavigate } from 'react-router-dom';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

interface Props {
  service: ServiceData;
}

const enterpriseProductFaqs: FAQItem[] = [
  {
    question: 'What does "enterprise product engineering" actually mean?',
    answer:
      'It means taking a product from discovery through architecture, build, launch, and post-launch iteration — with the team accountable for the whole arc, not a slice. We design multi-tenant data models, build clean APIs, and ship the operational tooling (observability, deployment, runbooks) that production systems actually need.',
  },
  {
    question: 'How do you handle multi-tenancy and data isolation?',
    answer:
      'We choose between shared database with row-level security, schema-per-tenant, or database-per-tenant based on your isolation, compliance, and cost requirements. The architecture is documented in the written agreement and reviewed with your security team before any code is written.',
  },
  {
    question: 'What does the handover look like at the end?',
    answer:
      'You receive the full codebase, infrastructure-as-code, runbooks, and operational documentation. Production credentials are transferred on final payment. We offer a post-launch maintenance window (scope-dependent) and are happy to hand off to an internal team or stay on for ongoing iteration.',
  },
];

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
    <MobileGate mobileOnly fallback={
      <div className="bg-neutral-900 text-white min-h-[auto] flex flex-col">
        <SEO
          title={`${service.title} | AINCURU Solutions`}
          description={service.description}
          url={`${SITE_URL}/services/${service.slug}`}
          keywords="enterprise product engineering, SaaS development, multi-tenant architecture, API development, full-stack engineering"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "serviceType": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "AINCURU Solutions",
                "image": `${SITE_URL}/images/np-logo.png`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                }
              },
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Global" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
              ]
            },
            buildFAQSchema(enterpriseProductFaqs)
          ]}
        />
        <Header />
        
        <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
                {service.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed font-medium">
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
            <div className="relative premium-card p-8 bg-neutral-900 border border-neutral-800">
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
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Discovery to Launch Timeline</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Our proven methodology ensures your product is built right the first time, without missing deadlines.</p>
            </div>

            <div className="relative border-l-2 border-neutral-800 ml-4 md:ml-10 space-y-12">
              {timelineData.map((item, i) => (
                <div key={i} className="relative pl-10 md:pl-16 group">
                  <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ${item.color} border-4 border-white shadow-sm transition-transform group-hover:scale-125`}></div>
                  <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 group-hover:border-neo-blue/20 transition-colors">
                    <span className="text-neo-blue font-bold text-sm tracking-widest uppercase mb-2 block">{item.weeks}</span>
                    <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Engineering Capabilities</h2>
              <p className="text-lg text-neutral-400 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => {
                const icons = [Box, GitBranch, Terminal, Code];
                const Icon = icons[i % icons.length];
                return (
                  <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-neo-blue" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-neutral-400">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <TechStack />
        <BusinessOutcomes />
        <FAQBlock items={enterpriseProductFaqs} heading={`${service.title}: FAQ`} />
        <EnterpriseCTA />
        <FooterTransition />
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter bgClass="bg-[#030B1D]">
        {/* Hero */}
        <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[60%] blur-[100px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: service.color }} />
          
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: service.color }}>
            {service.tagline}
          </p>
          <h1 className="text-display-lg text-white tracking-tight mb-4">{service.heroHeadline}</h1>
          <p className="text-base text-white/70 mb-8">{service.heroSubtext}</p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: service.color }} />
            <span className="relative z-10 flex items-center gap-2">{service.ctaText} <ArrowRight size={16} /></span>
          </button>
        </section>

        {/* Interactive Gantt Chart Visual (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Engineering Lifecycle</p>
          
          <div className="space-y-4 relative bg-white/[0.02] p-4 rounded-3xl border border-white/[0.05] backdrop-blur-glass-1">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none opacity-[0.03] px-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-full w-px bg-neutral-900"></div>
              ))}
            </div>

            {timelineData.map((item, i) => (
              <div key={i} className="relative h-10 group">
                <div 
                  className={`absolute h-full rounded-lg shadow-sm flex items-center px-3 overflow-hidden active:scale-[0.98] transition-all`}
                  style={{ 
                    left: item.offset, 
                    width: item.width,
                    backgroundColor: i === 2 ? service.color : 'rgba(255,255,255,0.1)'
                  }}
                >
                  <span className="text-[10px] font-bold text-white whitespace-nowrap">
                    {item.weeks}
                  </span>
                </div>
              </div>
            ))}
            
            <div className="flex justify-between text-[10px] font-bold text-white/30 uppercase pt-2">
              <span>Kickoff</span>
              <span>Launch</span>
            </div>
          </div>
        </section>

        {/* Discovery to Launch Timeline (Mobile) */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-2">Discovery to Launch</h2>
          <p className="text-[13px] text-white/60 mb-10">Our proven methodology ensures your product is built right the first time, without missing deadlines.</p>

          <div className="relative border-l-2 border-white/[0.1] ml-3 space-y-8">
            {timelineData.map((item, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-[#02040A]" style={{ backgroundColor: i === 2 ? service.color : '#334155' }}></div>
                <div className="bg-white/[0.02] p-5 rounded-2xl border border-white/[0.05] backdrop-blur-glass-1">
                  <span className="font-bold text-[10px] tracking-widest uppercase mb-1 block" style={{ color: service.color }}>{item.weeks}</span>
                  <h3 className="text-[14px] font-bold text-white leading-tight">{item.phase}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
          <div className="space-y-3">
            {service.features.map((feature, i) => {
              const icons = [Box, GitBranch, Terminal, Code];
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                  <div className="flex items-start gap-3">
                    <Icon size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-[13px] text-white/60 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <TechStack />
        <BusinessOutcomes />
        <EnterpriseCTA />
        <FooterTransition />
      </MobileShell>
    </MobileGate>
  );
}


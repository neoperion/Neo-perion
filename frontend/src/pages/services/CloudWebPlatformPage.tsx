import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Globe, Zap, Shield, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';


interface Props {
  service: ServiceData;
}

// Helper to animate numbers
const AnimatedNumber = ({ end, duration = 2000 }: { end: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
};

// Circular Progress Component
const CircularProgress = ({ value, label }: { value: number, label: string }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const [strokeDashoffset, setStrokeDashoffset] = useState(circumference);

  useEffect(() => {
    // Animate the circle
    setTimeout(() => {
      const offset = circumference - (value / 100) * circumference;
      setStrokeDashoffset(offset);
    }, 500);
  }, [value, circumference]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24 mb-3">
        {/* Background circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r={radius} fill="none" stroke="#f1f5f9" strokeWidth="6" />
          {/* Progress circle */}
          <circle 
            cx="40" cy="40" r={radius} 
            fill="none" 
            stroke="#10b981" // Emerald green for high scores
            strokeWidth="6" 
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-black text-slate-900"><AnimatedNumber end={value} /></span>
        </div>
      </div>
      <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{label}</span>
    </div>
  );
};

export function CloudWebPlatformPage({ service }: Props) {
  const navigate = useNavigate();

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-slate-50 text-slate-900 min-h-[auto] flex flex-col">
        <SEO 
          title={`${service.title} | Neo Perion Solutions`}
          description={service.description}
          jsonLd={{
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "serviceType": service.title,
            "description": service.description,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Neo Perion Solutions",
              "image": "https://www.neoperion.com/images/np-logo.png",
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
          }}
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

            {/* Performance Metrics Dashboard Visual */}
            <div className="relative premium-card p-8 bg-white border border-slate-200">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="bg-slate-100 rounded text-[10px] px-3 py-1 font-mono text-slate-500 flex-1 ml-2 text-center">
                  Lighthouse Performance Report
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <CircularProgress value={99} label="Performance" />
                <CircularProgress value={100} label="Accessibility" />
                <CircularProgress value={100} label="Best Practices" />
                <CircularProgress value={100} label="SEO" />
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 flex items-center gap-2"><Zap size={14} className="text-emerald-500" /> First Contentful Paint</span>
                  <span className="font-bold text-emerald-600">0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500 flex items-center gap-2"><Globe size={14} className="text-emerald-500" /> Time to Interactive</span>
                  <span className="font-bold text-emerald-600">1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Performance Standard */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Performance Standard</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We do not ship slow websites. Every web platform we engineer must pass rigorous Core Web Vitals checks.</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sub-Second Loads</h3>
              <p className="text-slate-600">Optimized asset delivery and edge computing ensure your site loads instantly worldwide.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Unbreakable Security</h3>
              <p className="text-slate-600">Enterprise-grade security headers, CSRF protection, and strictly typed APIs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical SEO</h3>
              <p className="text-slate-600">Server-side rendering and structured data built directly into the architecture.</p>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Web Engineering Services</h2>
              <p className="text-lg text-slate-600 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="text-neo-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TechStack />
        <BusinessOutcomes />
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

        {/* Performance Dashboard Visual (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Performance Metrics</p>
          
          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-6 backdrop-blur-glass-1">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.05]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
              </div>
              <div className="bg-white/[0.05] rounded text-[9px] px-2 py-0.5 font-mono text-white/60 flex-1 ml-2 text-center uppercase tracking-wider">
                Lighthouse
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6">
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-black text-emerald-400 leading-none mb-1">99</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Performance</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-black text-emerald-400 leading-none mb-1">100</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Accessibility</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-black text-emerald-400 leading-none mb-1">100</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Best Practices</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[28px] font-black text-emerald-400 leading-none mb-1">100</span>
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">SEO</span>
              </div>
            </div>

            <div className="space-y-3 pt-5 border-t border-white/[0.05] font-mono text-[11px]">
              <div className="flex justify-between items-center">
                <span className="text-white/40 flex items-center gap-1.5"><Zap size={12} className="text-emerald-400" /> FCP</span>
                <span className="font-bold text-emerald-400">0.8s</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 flex items-center gap-1.5"><Globe size={12} className="text-emerald-400" /> TTI</span>
                <span className="font-bold text-emerald-400">1.2s</span>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Standard (Mobile) */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-2">Our Standard</h2>
          <p className="text-[13px] text-white/60 mb-8">We do not ship slow websites. Every web platform must pass rigorous Core Web Vitals checks.</p>

          <div className="space-y-4">
            <div className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
              <div className="flex items-start gap-3">
                <Zap size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Sub-Second Loads</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">Optimized asset delivery and edge computing ensure your site loads instantly worldwide.</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
              <div className="flex items-start gap-3">
                <Shield size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Unbreakable Security</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">Enterprise-grade security headers, CSRF protection, and strictly typed APIs.</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
              <div className="flex items-start gap-3">
                <Search size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">Technical SEO</h3>
                  <p className="text-[13px] text-white/60 leading-relaxed">Server-side rendering and structured data built directly into the architecture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                <div className="flex items-start gap-3">
                  <Globe size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
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


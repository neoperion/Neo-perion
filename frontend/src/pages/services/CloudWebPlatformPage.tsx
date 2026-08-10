import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { Globe, Zap, Shield, Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

const cloudWebFaqs: FAQItem[] = [
  {
    question: 'What frontend stack do you ship?',
    answer:
      'React with Next.js for server-rendered marketing sites and SEO-critical web apps; React + Vite for dashboard-style SPAs. TypeScript is the default. We choose the lightest stack that meets the SEO, performance, and team-experience requirements of the project.',
  },
  {
    question: 'How do you hit good Core Web Vitals scores?',
    answer:
      'We optimize LCP by lazy-loading below-the-fold media and serving responsive images in WebP/AVIF. CLS is controlled with explicit dimensions on every image and aspect-ratio reservations. INP is kept low by minimizing client-side JS and shipping to the edge. Lighthouse performance is verified before every launch.',
  },
  {
    question: 'Do you build SEO-friendly marketing sites?',
    answer:
      'Yes — every marketing site we ship has per-page canonical tags, a real sitemap, structured data (Organization, Breadcrumb, FAQPage, Article as appropriate), and answer-first copy that AI assistants cite. Server-side rendering or pre-rendering is wired in for pages that need it for indexing.',
  },
];


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
          <span className="text-2xl font-black text-white"><AnimatedNumber end={value} /></span>
        </div>
      </div>
      <span className="text-sm font-bold text-neutral-400 uppercase tracking-wider">{label}</span>
    </div>
  );
};

export function CloudWebPlatformPage({ service }: Props) {
  const navigate = useNavigate();

  return (
      <div className="bg-neutral-900 text-white min-h-[auto] flex flex-col">
        <SEO {...seoConfig.cloudWebPlatform} />
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
                className="px-8 py-4 parchment-surface--deep text-white rounded-xl font-bold hover:bg-neo-blue transition-colors duration-300"
              >
                {service.ctaText}
              </button>
            </div>

            {/* Performance Metrics Dashboard Visual */}
            <div className="relative premium-card p-8 bg-neutral-900 border border-neutral-800">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="bg-neutral-900 rounded text-[10px] px-3 py-1 font-mono text-neutral-400 flex-1 ml-2 text-center">
                  Lighthouse Performance Report
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <CircularProgress value={99} label="Performance" />
                <CircularProgress value={100} label="Accessibility" />
                <CircularProgress value={100} label="Best Practices" />
                <CircularProgress value={100} label="SEO" />
              </div>

              <div className="space-y-4 pt-6 border-t border-neutral-800 font-mono text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 flex items-center gap-2"><Zap size={14} className="text-emerald-500" /> First Contentful Paint</span>
                  <span className="font-bold text-emerald-600">0.8s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 flex items-center gap-2"><Globe size={14} className="text-emerald-500" /> Time to Interactive</span>
                  <span className="font-bold text-emerald-600">1.2s</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Performance Standard */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Performance Standard</h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">We do not ship slow websites. Every web platform we engineer must pass rigorous Core Web Vitals checks.</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Sub-Second Loads</h3>
              <p className="text-neutral-400">Optimized asset delivery and edge computing ensure your site loads instantly worldwide.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <div className="w-10 h-10 bg-orange-500/15 rounded-full flex items-center justify-center mb-6 text-orange-400">
                <Shield size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Unbreakable Security</h3>
              <p className="text-neutral-400">Enterprise-grade security headers, CSRF protection, and strictly typed APIs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800">
              <div className="w-10 h-10 bg-amber-500/15 rounded-full flex items-center justify-center mb-6 text-amber-400">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Technical SEO</h3>
              <p className="text-neutral-400">Server-side rendering and structured data built directly into the architecture.</p>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Web Engineering Services</h2>
              <p className="text-lg text-neutral-400 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-6">
                    <Globe className="text-neo-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TechStack />
        <BusinessOutcomes />
        <FAQBlock items={cloudWebFaqs} heading={`${service.title}: FAQ`} />
        <EnterpriseCTA />
        <FooterTransition />
        </main>

        <Footer />
      </div>
  );
}



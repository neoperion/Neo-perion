import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { Smartphone, CheckCircle2, LayoutTemplate, Zap, RadioReceiver, ArrowRight } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import { useNavigate } from 'react-router-dom';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

interface Props {
  service: ServiceData;
}

const mobileProductFaqs: FAQItem[] = [
  {
    question: 'Native or cross-platform — how do you choose?',
    answer:
      'We choose native (Swift / Kotlin) when platform-specific features, performance, or UX fidelity dominate the value. We choose cross-platform (React Native or Flutter) when the product is content-heavy, the team needs to ship both platforms fast, and the design system can live in a single codebase. The choice is documented in the written agreement before any code is written.',
  },
  {
    question: 'Do you handle App Store and Play Store submission?',
    answer:
      'Yes — submission, review response, and post-release hotfixes are part of the engagement. We have shipped apps in healthcare, education, and consumer categories on both stores. We do not guarantee approval (no one can), but we have a strong track record of clearing review on the first or second pass.',
  },
  {
    question: 'How do you handle offline-first behavior?',
    answer:
      'When the product needs to work without connectivity, we design the data layer for offline-first with conflict resolution on reconnect. The architecture is tested with real network drops, not unit tests alone. If your product does not need offline, we say so and save you the engineering cost.',
  },
];

export function MobileProductPage({ service }: Props) {
  const navigate = useNavigate();
  const [screenState, setScreenState] = useState(0);

  // Animate phone screens
  useEffect(() => {
    const interval = setInterval(() => {
      setScreenState(prev => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className="bg-neutral-900 text-white min-h-[auto] flex flex-col">
        <SEO {...seoConfig.mobileProduct} />
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

            {/* Phone Mockup Visual */}
            <div className="relative premium-card p-12 bg-neutral-900 flex justify-center items-center overflow-hidden min-h-[500px]">
              {/* Background ambient light */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neo-blue/5 to-emerald-500/5"></div>
              
              {/* iOS Phone Mockup */}
              <div className="relative w-64 h-[500px] parchment-surface--deep rounded-[3rem] border-[8px] border-manuscriptAlpha-ink-10 shadow-2xl overflow-hidden flex-shrink-0 z-10 transform -rotate-6 translate-x-8">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-32 h-6 bg-slate-800 rounded-b-2xl"></div>
                </div>
                
                {/* Screen Content */}
                <div className="w-full h-full bg-neutral-900 relative p-4 pt-12 flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-neutral-800 animate-pulse"></div>
                    <div className="w-20 h-4 rounded bg-neutral-800"></div>
                  </div>
                  
                  <div className="relative flex-1">
                    {/* Screen State 1: Feed */}
                    <div className={`absolute inset-0 transition-all duration-700 ${screenState === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="w-full h-40 rounded-xl bg-gradient-to-br from-neo-blue/20 to-orange-500/20 mb-4"></div>
                      <div className="w-3/4 h-4 rounded bg-neutral-800 mb-2"></div>
                      <div className="w-1/2 h-4 rounded bg-neutral-800 mb-6"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="w-full h-24 rounded-xl bg-neutral-900"></div>
                        <div className="w-full h-24 rounded-xl bg-neutral-900"></div>
                      </div>
                    </div>
                    
                    {/* Screen State 2: Analytics */}
                    <div className={`absolute inset-0 transition-all duration-700 ${screenState === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="w-full h-32 rounded-xl border border-neutral-800 bg-neutral-900 shadow-sm mb-4 flex items-end p-4 gap-2">
                        <div className="w-1/4 h-1/2 bg-neo-blue/30 rounded-t"></div>
                        <div className="w-1/4 h-3/4 bg-neo-blue/60 rounded-t"></div>
                        <div className="w-1/4 h-1/4 bg-neo-blue/20 rounded-t"></div>
                        <div className="w-1/4 h-full bg-neo-blue rounded-t"></div>
                      </div>
                      <div className="w-full h-16 rounded-xl bg-neutral-900 mb-2"></div>
                      <div className="w-full h-16 rounded-xl bg-neutral-900"></div>
                    </div>

                    {/* Screen State 3: Card Details */}
                    <div className={`absolute inset-0 transition-all duration-700 ${screenState === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      <div className="w-full aspect-[1.6] rounded-xl parchment-surface--deep shadow-xl mb-6 relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full parchment-surface/10"></div>
                      </div>
                      <div className="space-y-3">
                        <div className="w-full h-12 rounded-xl bg-neutral-900 border border-neutral-800"></div>
                        <div className="w-full h-12 rounded-xl bg-neutral-900 border border-neutral-800"></div>
                        <div className="w-full h-12 rounded-xl bg-neo-blue text-white flex items-center justify-center font-bold text-sm shadow-md shadow-neo-blue/20">Pay Now</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="h-16 border-t border-neutral-800 flex justify-around items-center px-2 mt-auto">
                    <div className="w-6 h-6 rounded bg-slate-300"></div>
                    <div className="w-6 h-6 rounded bg-neutral-800"></div>
                    <div className="w-6 h-6 rounded bg-neutral-800"></div>
                  </div>
                </div>
              </div>

              {/* Android Mockup Outline (Background) */}
              <div className="absolute right-6 lg:-right-4 w-56 h-[460px] bg-neutral-900 rounded-[2.5rem] border-[4px] border-neutral-800 shadow-xl overflow-hidden flex-shrink-0 z-0 transform rotate-3 opacity-60">
                 {/* Screen Content Fake */}
                 <div className="w-full h-full p-4 pt-10 opacity-50">
                    <div className="w-full h-32 rounded-xl bg-emerald-50 mb-4"></div>
                    <div className="w-2/3 h-4 rounded bg-neutral-900 mb-8"></div>
                    <div className="space-y-4">
                      <div className="w-full h-12 rounded bg-neutral-900"></div>
                      <div className="w-full h-12 rounded bg-neutral-900"></div>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </section>

        {/* Platform Strategy Decision Guide */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Platform Strategy Decision Guide</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Choosing between Cross-Platform and Native is a critical architectural decision. Here is how we advise our partners.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* React Native Card */}
              <div className="premium-card p-10 bg-neutral-900 border border-neutral-800 rounded-3xl relative overflow-hidden group hover:border-neo-blue/30 transition-colors">
                <div className="absolute -right-10 -top-10 text-neo-blue/5 group-hover:text-neo-blue/10 transition-colors">
                  <LayoutTemplate size={200} />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 relative z-10">You need <span className="text-neo-blue">React Native</span> if:</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-200 font-medium">Single codebase for iOS + Android</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-200 font-medium">Web-like development speed and iteration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-200 font-medium">Standard UI paradigms (SaaS, eCommerce, Dashboards)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-neutral-200 font-medium">Integrating with Supabase or Firebase backends</span>
                  </li>
                </ul>
              </div>

              {/* Native Card */}
              <div className="premium-card p-10 parchment-surface--deep border border-manuscriptAlpha-ink-10 rounded-3xl relative overflow-hidden group hover:border-slate-700 transition-colors">
                <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-white/10 transition-colors">
                  <RadioReceiver size={200} />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 relative z-10">You need <span className="text-emerald-400">Native (Swift/Kotlin)</span> if:</h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex items-start gap-3">
                    <Zap className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-300 font-medium">Complex physics and animations (strict 60fps+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-300 font-medium">Bluetooth, ARKit, or heavy hardware integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-300 font-medium">Intensive background processing requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="text-emerald-400 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-300 font-medium">App Store "Featured App" UI/UX placement goals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Mobile Engineering Capabilities</h2>
              <p className="text-lg text-neutral-400 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-6">
                    <Smartphone className="text-neo-blue" />
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
        <FAQBlock items={mobileProductFaqs} heading={`${service.title}: FAQ`} />
        <EnterpriseCTA />
        <FooterTransition />
        </main>

        <Footer />
      </div>
  );
}



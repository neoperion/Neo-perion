import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Database, FileText, Bot, BrainCircuit, MessageSquare, ArrowRight } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';

import { useNavigate } from 'react-router-dom';

interface Props {
  service: ServiceData;
}

export function AiSystemsPage({ service }: Props) {
  const navigate = useNavigate();
  const [maturityLevel, setMaturityLevel] = useState(1);

  const maturityStages = [
    {
      level: 1,
      title: "Basic Automation",
      description: "Rule-based triggers and Zapier/Make integrations. No real intelligence.",
      action: "Start thinking about data."
    },
    {
      level: 2,
      title: "Assisted Intelligence",
      description: "Using ChatGPT wrappers. Siloed knowledge. Not integrated into your core product.",
      action: "Integrate APIs."
    },
    {
      level: 3,
      title: "Contextual AI (RAG)",
      description: "AI that can read your proprietary documents, codebase, and databases to give accurate, cited answers.",
      action: "Build Vector databases."
    },
    {
      level: 4,
      title: "Autonomous Agents",
      description: "Multi-agent systems that don't just answer questions, but take actions, use tools, and complete complex workflows.",
      action: "Deploy agentic workflows."
    }
  ];

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-slate-50 text-slate-900 min-h-[auto] flex flex-col">
        <SEO 
          title={`${service.title} - Custom AI Chatbots & LLM Integration | Neo Perion Solutions`}
          description={service.description}
          keywords="AI Chatbot Development, Enterprise Conversational AI, Custom LLM Integration, RAG Architectures, AI Automation Services, Intelligent Agents, Deep AI Engineering"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Custom AI Chatbots & Enterprise LLM Integration",
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
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI System Offerings",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Conversational AI Chatbots"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "RAG Architectures & LLM Integration"
                    }
                  }
                ]
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.neoperion.com/"
              },{
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.neoperion.com/services"
              },{
                "@type": "ListItem",
                "position": 3,
                "name": service.title,
                "item": `https://www.neoperion.com/services/${service.slug}`
              }]
            }
          ]}
        />
        <Header />
        
        <main className="flex-grow">
        {/* Hero Section with RAG Diagram */}
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

            {/* Interactive RAG Architecture Diagram */}
            <div className="relative premium-card p-8 bg-white overflow-hidden group">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 text-center">RAG Architecture Flow</h3>
              
              <div className="flex flex-col gap-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-slate-100 -z-10 group-hover:bg-neo-blue/20 transition-colors duration-1000"></div>

                {/* Step 1 */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-neo-blue/30 group-hover:bg-neo-blue/5 transition-all">
                    <FileText className="text-slate-400 group-hover:text-neo-blue transition-colors" size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">1. Data Sources</h4>
                    <p className="text-sm text-slate-500">PDFs, Confluence, APIs</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-neo-blue/30 group-hover:bg-neo-blue/5 transition-all delay-100">
                    <Database className="text-slate-400 group-hover:text-neo-blue transition-colors" size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">2. Vector Database</h4>
                    <p className="text-sm text-slate-500">Pinecone, Weaviate (Embeddings)</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-neo-blue/30 group-hover:bg-neo-blue/5 transition-all delay-200">
                    <BrainCircuit className="text-slate-400 group-hover:text-neo-blue transition-colors" size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">3. LLM Processing</h4>
                    <p className="text-sm text-slate-500">GPT-4, Claude 3.5 Sonnet</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm group-hover:border-neo-blue/30 group-hover:bg-neo-blue/5 transition-all delay-300">
                    <MessageSquare className="text-slate-400 group-hover:text-neo-blue transition-colors" size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">4. User Interface</h4>
                    <p className="text-sm text-slate-500">Chatbot, Agent Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Enterprise AI Capabilities</h2>
              <p className="text-lg text-slate-600 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-neo-blue/30 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Bot className="text-neo-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Maturity Assessment Slider */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black mb-4">AI Maturity Assessment</h2>
              <p className="text-slate-400">Where does your organization stand on the AI maturity curve?</p>
            </div>

            <div className="relative mb-20">
              {/* Slider track */}
              <div className="h-2 bg-slate-800 rounded-full w-full relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-neo-blue rounded-full transition-all duration-500"
                  style={{ width: `${((maturityLevel - 1) / 3) * 100}%` }}
                />
              </div>
              
              {/* Slider steps */}
              <div className="flex justify-between absolute -top-4 w-full">
                {[1, 2, 3, 4].map(level => (
                  <button
                    key={level}
                    onClick={() => setMaturityLevel(level)}
                    className={`w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center font-bold transition-all ${maturityLevel >= level ? 'bg-neo-blue text-white' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Maturity Info Card */}
            <div className="bg-slate-800 rounded-2xl p-10 border border-slate-700">
              <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                <div>
                  <span className="text-neo-blue font-bold tracking-widest uppercase text-sm mb-2 block">Level {maturityLevel}</span>
                  <h3 className="text-3xl font-black mb-4">{maturityStages[maturityLevel - 1].title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    {maturityStages[maturityLevel - 1].description}
                  </p>
                  <div className="flex items-center gap-3 text-white font-medium">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"><ArrowRight size={16} /></span>
                    Next step: {maturityStages[maturityLevel - 1].action}
                  </div>
                </div>
              </div>
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

        {/* Interactive RAG Architecture Diagram (Mobile Optimized) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-4 uppercase">Architecture</p>
          <h2 className="text-lg font-bold text-white mb-6">RAG Architecture Flow</h2>
          
          <div className="flex flex-col gap-5 relative">
            <div className="absolute left-[27px] top-8 bottom-8 w-px bg-white/[0.1] -z-10"></div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.1] flex items-center justify-center shrink-0 shadow-sm backdrop-blur-glass-1">
                <FileText className="text-neo-highlight" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[15px] mb-1">1. Data Sources</h4>
                <p className="text-[12px] text-white/60">PDFs, Confluence, APIs</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.1] flex items-center justify-center shrink-0 shadow-sm backdrop-blur-glass-1">
                <Database className="text-neo-highlight" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[15px] mb-1">2. Vector Database</h4>
                <p className="text-[12px] text-white/60">Pinecone, Weaviate</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.1] flex items-center justify-center shrink-0 shadow-sm backdrop-blur-glass-1">
                <BrainCircuit className="text-neo-highlight" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[15px] mb-1">3. LLM Processing</h4>
                <p className="text-[12px] text-white/60">GPT-4, Claude 3.5 Sonnet</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.1] flex items-center justify-center shrink-0 shadow-sm backdrop-blur-glass-1">
                <MessageSquare className="text-neo-highlight" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-[15px] mb-1">4. User Interface</h4>
                <p className="text-[12px] text-white/60">Chatbot, Agent Dashboard</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Maturity Assessment Slider (Mobile Optimized) */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-2">AI Maturity Assessment</h2>
          <p className="text-[13px] text-white/60 mb-8">Where does your organization stand on the AI maturity curve?</p>

          <div className="relative mb-12">
            <div className="h-1.5 bg-white/[0.05] rounded-full w-full relative">
              <div 
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-500"
                style={{ width: `${((maturityLevel - 1) / 3) * 100}%`, backgroundColor: service.color }}
              />
            </div>
            
            <div className="flex justify-between absolute -top-3 w-full">
              {[1, 2, 3, 4].map(level => (
                <button
                  key={level}
                  onClick={() => setMaturityLevel(level)}
                  className={`w-8 h-8 rounded-full border-[3px] border-[#02040A] flex items-center justify-center text-[12px] font-bold transition-all ${maturityLevel >= level ? 'text-white' : 'bg-[#1a1f2e] text-white/40'}`}
                  style={{ backgroundColor: maturityLevel >= level ? service.color : undefined }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Maturity Info Card */}
          <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/[0.08] backdrop-blur-glass-1">
            <span className="font-bold tracking-widest uppercase text-[10px] mb-2 block" style={{ color: service.color }}>Level {maturityLevel}</span>
            <h3 className="text-[18px] font-black text-white mb-3">{maturityStages[maturityLevel - 1].title}</h3>
            <p className="text-[13px] text-white/60 leading-relaxed mb-6">
              {maturityStages[maturityLevel - 1].description}
            </p>
            <div className="flex items-center gap-2 text-white/90 text-[13px] font-medium p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0"><ArrowRight size={12} /></span>
              Next step: {maturityStages[maturityLevel - 1].action}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                <div className="flex items-start gap-3">
                  <Bot size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
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


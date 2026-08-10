import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { Cpu, CheckCircle2, ArrowRight, Activity, Zap, Shield, Database, LayoutTemplate, X } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

const deepAiFaqs: FAQItem[] = [
  {
    question: 'What is "deep AI engineering" in practice?',
    answer:
      'It means custom model work — fine-tuning open-weight models on your domain data, building multi-agent orchestrations, and shipping ML systems with the same rigor as production software. We do not ship demos or notebooks; every system we build runs in production with monitoring and feedback loops.',
  },
  {
    question: 'When do you fine-tune versus use RAG or prompt engineering?',
    answer:
      'We choose the lightest technique that meets the accuracy, latency, and cost targets. For most production knowledge-base Q&A, RAG on top of a frontier model wins. Fine-tuning earns its place when you need domain-specific style, format, or reasoning that prompting cannot reliably achieve.',
  },
  {
    question: 'Do you deploy on the customer cloud or yours?',
    answer:
      'Either — depending on data residency and operational constraints. We have shipped on AWS, Azure, and GCP, and we run self-hosted model deployments on Kubernetes when the workload demands it. The architecture is yours to keep: full source, IaC, and runbooks handed over on final payment.',
  },
];

const AnimatedCheck = ({ delay, color = "#10B981", className = "w-5 h-5" }: { delay: number; color?: string; className?: string }) => (
  <svg className={`shrink-0 ${className}`} style={{ color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <motion.polyline 
      points="20 6 9 17 4 12" 
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    />
  </svg>
);

interface Props {
  service: ServiceData;
}

export function DeepAiEngineeringPage({ service }: Props) {
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState(0);

  // Animate active node for the neural net visualization
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const comparisonData = [
    { basic: "API wrapper (OpenAI only)", advanced: "Custom fine-tuned open-source models" },
    { basic: "Generic responses", advanced: "Domain-specific embedded knowledge" },
    { basic: "Single LLM call", advanced: "Multi-agent orchestration" },
    { basic: "No evaluation", advanced: "Hallucination benchmarking & CI/CD" },
    { basic: "Vendor lock-in", advanced: "Portable, auditable AI on-premise" }
  ];

  return (
      <div className="bg-neutral-900 text-white min-h-[auto] flex flex-col">
        <SEO {...seoConfig.deepAiEngineering} />
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

            {/* Interactive Neural Network Visualization */}
            <div className="relative premium-card p-8 parchment-surface--deep overflow-hidden flex items-center justify-center min-h-[400px]">
              <h3 className="absolute top-8 text-sm font-bold text-neutral-400 uppercase tracking-widest text-center w-full left-0">Neural Topology</h3>
              
              <svg viewBox="0 0 400 300" className="w-full max-w-[350px] overflow-visible">
                {/* Connections (Edges) */}
                <g strokeWidth="2" fill="none">
                  {/* Input to Hidden 1 */}
                  {[0, 1].map(i => [0, 1, 2].map(j => (
                    <path key={`e1-${i}-${j}`} d={`M 50 ${100 + i * 100} Q 125 ${100 + i * 100} 200 ${50 + j * 100}`} 
                      stroke={activeNode === i || activeNode === j + 2 ? '#FB8C2A' : '#1e293b'} 
                      className="transition-colors duration-500" 
                    />
                  )))}
                  
                  {/* Hidden 1 to Output */}
                  {[0, 1, 2].map(i => [0, 1].map(j => (
                    <path key={`e2-${i}-${j}`} d={`M 200 ${50 + i * 100} Q 275 ${50 + i * 100} 350 ${100 + j * 100}`} 
                      stroke={activeNode === i + 2 || activeNode === j ? '#FB8C2A' : '#1e293b'} 
                      className="transition-colors duration-500" 
                    />
                  )))}
                </g>

                {/* Nodes (Vertices) */}
                {/* Input Layer */}
                {[0, 1].map(i => (
                  <circle key={`n1-${i}`} cx="50" cy={100 + i * 100} r="15" 
                    fill={activeNode === i ? '#FB8C2A' : '#0f172a'} 
                    stroke={activeNode === i ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  />
                ))}

                {/* Hidden Layer */}
                {[0, 1, 2].map(i => (
                  <circle key={`n2-${i}`} cx="200" cy={50 + i * 100} r="15" 
                    fill={activeNode === i + 2 ? '#FB8C2A' : '#0f172a'} 
                    stroke={activeNode === i + 2 ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300" 
                  />
                ))}

                {/* Output Layer */}
                {[0, 1].map(i => (
                  <circle key={`n3-${i}`} cx="350" cy={100 + i * 100} r="15" 
                    fill={activeNode === i ? '#FB8C2A' : '#0f172a'} 
                    stroke={activeNode === i ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300" 
                  />
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Table */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The Deep Engineering Difference</h2>
              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">Don't settle for a generic wrapper. Real enterprise AI requires robust, testable, and secure engineering.</p>
            </div>

            <div className="premium-card rounded-3xl overflow-hidden border border-neutral-800">
              <div className="grid grid-cols-2 bg-neutral-900 border-b border-neutral-800">
                <div className="p-8 text-center border-r border-neutral-800">
                  <h3 className="text-xl font-bold text-neutral-400">Basic AI Integration</h3>
                </div>
                <div className="p-8 text-center bg-neo-blue/5">
                  <h3 className="text-xl font-black text-neo-blue">Deep AI Engineering</h3>
                </div>
              </div>

              <div className="divide-y divide-neutral-800">
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 group hover:bg-neutral-900 transition-colors">
                    <div className="p-6 border-r border-neutral-800 flex items-center gap-4 text-neutral-400">
                      <X className="text-red-400 shrink-0" size={20} />
                      <span className="font-medium">{row.basic}</span>
                    </div>
                    <div className="p-6 flex items-center gap-4 text-white font-bold group-hover:bg-neo-blue/[0.02] transition-colors">
                      <AnimatedCheck delay={i * 0.1} />
                      <span>{row.advanced}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Deep Learning Capabilities</h2>
              <p className="text-lg text-neutral-400 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-6">
                    <Cpu className="text-neo-blue" />
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
        <FAQBlock items={deepAiFaqs} heading={`${service.title}: FAQ`} />
        <EnterpriseCTA />
        <FooterTransition />
        </main>

        <Footer />
      </div>
  );
}


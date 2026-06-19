import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Check, X, ArrowRight, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <MobileGate mobileOnly fallback={
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

            {/* Interactive Neural Network Visualization */}
            <div className="relative premium-card p-8 bg-slate-900 overflow-hidden flex items-center justify-center min-h-[400px]">
              <h3 className="absolute top-8 text-sm font-bold text-slate-500 uppercase tracking-widest text-center w-full left-0">Neural Topology</h3>
              
              <svg viewBox="0 0 400 300" className="w-full max-w-[350px] overflow-visible">
                {/* Connections (Edges) */}
                <g strokeWidth="2" fill="none">
                  {/* Input to Hidden 1 */}
                  {[0, 1].map(i => [0, 1, 2].map(j => (
                    <path key={`e1-${i}-${j}`} d={`M 50 ${100 + i * 100} Q 125 ${100 + i * 100} 200 ${50 + j * 100}`} 
                      stroke={activeNode === i || activeNode === j + 2 ? '#3b82f6' : '#1e293b'} 
                      className="transition-colors duration-500" 
                    />
                  )))}
                  
                  {/* Hidden 1 to Output */}
                  {[0, 1, 2].map(i => [0, 1].map(j => (
                    <path key={`e2-${i}-${j}`} d={`M 200 ${50 + i * 100} Q 275 ${50 + i * 100} 350 ${100 + j * 100}`} 
                      stroke={activeNode === i + 2 || activeNode === j ? '#3b82f6' : '#1e293b'} 
                      className="transition-colors duration-500" 
                    />
                  )))}
                </g>

                {/* Nodes (Vertices) */}
                {/* Input Layer */}
                {[0, 1].map(i => (
                  <circle key={`n1-${i}`} cx="50" cy={100 + i * 100} r="15" 
                    fill={activeNode === i ? '#3b82f6' : '#0f172a'} 
                    stroke={activeNode === i ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
                  />
                ))}

                {/* Hidden Layer */}
                {[0, 1, 2].map(i => (
                  <circle key={`n2-${i}`} cx="200" cy={50 + i * 100} r="15" 
                    fill={activeNode === i + 2 ? '#3b82f6' : '#0f172a'} 
                    stroke={activeNode === i + 2 ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300" 
                  />
                ))}

                {/* Output Layer */}
                {[0, 1].map(i => (
                  <circle key={`n3-${i}`} cx="350" cy={100 + i * 100} r="15" 
                    fill={activeNode === i ? '#3b82f6' : '#0f172a'} 
                    stroke={activeNode === i ? '#60a5fa' : '#334155'} strokeWidth="4" 
                    className="transition-all duration-300" 
                  />
                ))}
              </svg>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Table */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Deep Engineering Difference</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">Don't settle for a generic wrapper. Real enterprise AI requires robust, testable, and secure engineering.</p>
            </div>

            <div className="premium-card rounded-3xl overflow-hidden border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-50 border-b border-slate-200">
                <div className="p-8 text-center border-r border-slate-200">
                  <h3 className="text-xl font-bold text-slate-500">Basic AI Integration</h3>
                </div>
                <div className="p-8 text-center bg-neo-blue/5">
                  <h3 className="text-xl font-black text-neo-blue">Deep AI Engineering</h3>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {comparisonData.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 group hover:bg-slate-50 transition-colors">
                    <div className="p-6 border-r border-slate-200 flex items-center gap-4 text-slate-500">
                      <X className="text-red-400 shrink-0" size={20} />
                      <span className="font-medium">{row.basic}</span>
                    </div>
                    <div className="p-6 flex items-center gap-4 text-slate-900 font-bold group-hover:bg-neo-blue/[0.02] transition-colors">
                      <Check className="text-emerald-500 shrink-0" size={20} />
                      <span>{row.advanced}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Deep Learning Capabilities</h2>
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
    }>
      <MobileShell nav="bottom" showFooter>
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

        {/* Interactive Neural Network Visualization (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08] flex flex-col items-center justify-center min-h-[300px]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Neural Topology</p>
          <svg viewBox="0 0 400 300" className="w-full max-w-[300px] overflow-visible">
            {/* Connections (Edges) */}
            <g strokeWidth="2" fill="none">
              {/* Input to Hidden 1 */}
              {[0, 1].map(i => [0, 1, 2].map(j => (
                <path key={`e1-${i}-${j}`} d={`M 50 ${100 + i * 100} Q 125 ${100 + i * 100} 200 ${50 + j * 100}`} 
                  stroke={activeNode === i || activeNode === j + 2 ? service.color : 'rgba(255,255,255,0.05)'} 
                  className="transition-colors duration-500" 
                />
              )))}
              
              {/* Hidden 1 to Output */}
              {[0, 1, 2].map(i => [0, 1].map(j => (
                <path key={`e2-${i}-${j}`} d={`M 200 ${50 + i * 100} Q 275 ${50 + i * 100} 350 ${100 + j * 100}`} 
                  stroke={activeNode === i + 2 || activeNode === j ? service.color : 'rgba(255,255,255,0.05)'} 
                  className="transition-colors duration-500" 
                />
              )))}
            </g>

            {/* Nodes (Vertices) */}
            {/* Input Layer */}
            {[0, 1].map(i => (
              <circle key={`n1-${i}`} cx="50" cy={100 + i * 100} r="15" 
                fill={activeNode === i ? service.color : '#02040A'} 
                stroke={activeNode === i ? service.color : 'rgba(255,255,255,0.1)'} strokeWidth="4" 
                className="transition-all duration-300" 
              />
            ))}

            {/* Hidden Layer */}
            {[0, 1, 2].map(i => (
              <circle key={`n2-${i}`} cx="200" cy={50 + i * 100} r="15" 
                fill={activeNode === i + 2 ? service.color : '#02040A'} 
                stroke={activeNode === i + 2 ? service.color : 'rgba(255,255,255,0.1)'} strokeWidth="4" 
                className="transition-all duration-300" 
              />
            ))}

            {/* Output Layer */}
            {[0, 1].map(i => (
              <circle key={`n3-${i}`} cx="350" cy={100 + i * 100} r="15" 
                fill={activeNode === i ? service.color : '#02040A'} 
                stroke={activeNode === i ? service.color : 'rgba(255,255,255,0.1)'} strokeWidth="4" 
                className="transition-all duration-300" 
              />
            ))}
          </svg>
        </section>

        {/* Side-by-Side Comparison Table (Mobile) */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-2">The Deep Engineering Difference</h2>
          <p className="text-[13px] text-white/60 mb-8">Real enterprise AI requires robust, testable, and secure engineering.</p>

          <div className="space-y-4">
            {comparisonData.map((row, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                <div className="flex items-start gap-3 mb-4 pb-4 border-b border-white/[0.05]">
                  <X className="text-red-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-wider mb-1">Basic</h3>
                    <p className="text-[13px] text-white/60 leading-tight">{row.basic}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="shrink-0 mt-0.5" style={{ color: service.color }} size={16} />
                  <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: service.color }}>Deep Engineering</h3>
                    <p className="text-[13px] text-white font-medium leading-tight">{row.advanced}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities Grid (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                <div className="flex items-start gap-3">
                  <Cpu size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="h-10 bg-[#02040A]" />
      </MobileShell>
    </MobileGate>
  );
}
}

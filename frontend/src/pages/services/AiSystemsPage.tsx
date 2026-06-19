import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Database, FileText, Bot, BrainCircuit, MessageSquare, ArrowRight } from 'lucide-react';
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
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      <SEO 
        title={`${service.title} | Neo Perion Solutions`}
        description={service.description}
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
      
      </main>

      <Footer />
    </div>
  );
}

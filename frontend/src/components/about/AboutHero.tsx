import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';

export function AboutHero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          lineDistance={[3, 4]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
            About Neo Perion
          </p>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
            From Idea To Product.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Powered By AI.
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            We are a collective of product engineers and AI specialists dedicated to turning complex challenges into scalable, enterprise-grade solutions.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-3.5 rounded-lg text-sm font-bold bg-cyan-500 text-black hover:bg-cyan-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              style={{ boxShadow: '0 8px 30px -6px rgba(6,182,212,0.4)' }}
            >
              Explore Services <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-white transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative animate-fade-in-up" style={{animationDelay: '400ms'}}>
           <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl absolute inset-0"></div>
           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex items-center justify-center shadow-2xl">
              <Box size={100} className="text-cyan-400/50" />
           </div>
        </div>
      </div>
    </section>
  );
}
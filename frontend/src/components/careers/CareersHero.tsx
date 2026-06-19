import React from 'react';
import FloatingLines from '@/components/FloatingLines';

export function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-neo-blue mb-6 animate-fade-in-up">
          Careers at Neo Perion
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Build the future of<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-blue-600">
            Intelligent Software.
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Join a team of engineers, designers, and AI specialists building enterprise-grade products that scale to millions.
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <button
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg text-sm font-bold bg-neo-blue text-black hover:bg-neo-blue transition-all duration-300"
            style={{ boxShadow: '0 8px 30px -6px rgba(6,182,212,0.4)' }}
          >
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  );
}
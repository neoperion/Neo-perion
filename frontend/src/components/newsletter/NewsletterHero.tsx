import React from 'react';
import FloatingLines from '@/components/FloatingLines';

export function NewsletterHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle']}
          lineCount={[6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-neo-blue mb-6 animate-fade-in-up">
          NP Insights
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Signal over<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-blue-600">
            Noise.
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Join founders and CTOs who read our weekly deep dives into AI architecture, product engineering, and scaling enterprise SaaS.
        </p>
      </div>
    </section>
  );
}
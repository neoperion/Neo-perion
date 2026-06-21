import React from 'react';
import FloatingLines from '@/components/FloatingLines';

interface NewsletterHeroProps {
  theme?: 'light' | 'dark';
}

export function NewsletterHero({ theme = 'dark' }: NewsletterHeroProps) {
  const isLight = theme === 'light';
  
  return (
    <section className={`relative pt-36 pb-16 overflow-hidden ${isLight ? 'bg-[#FAFAFA]' : 'bg-[#02040A]'}`}>
      <div className={`absolute inset-0 w-full h-full pointer-events-none ${isLight ? 'opacity-[0.03]' : 'opacity-15'}`}>
        <FloatingLines
          linesGradient={isLight ? ['#2563FF', '#4AA8FF', '#74C8FF'] : ['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle']}
          lineCount={[6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-neo-blue mb-6 animate-fade-in-up">
          NP Insights
        </p>
        <h1 className={`text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 ${isLight ? 'text-[#09090B]' : 'text-white'} animate-fade-in-up`} style={{animationDelay: '100ms'}}>
          Signal over<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-blue-600">
            Noise.
          </span>
        </h1>
        <p className={`text-lg ${isLight ? 'text-slate-500' : 'text-slate-400'} leading-relaxed max-w-2xl mx-auto animate-fade-in-up`} style={{animationDelay: '200ms'}}>
          Join founders and CTOs who read our weekly deep dives into AI architecture, product engineering, and scaling enterprise SaaS.
        </p>
      </div>
    </section>
  );
}
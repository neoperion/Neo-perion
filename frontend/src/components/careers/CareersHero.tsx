import React from 'react';
import FloatingLines from '@/components/FloatingLines';

interface CareersHeroProps {
  theme?: 'light' | 'dark';
}

export function CareersHero({ theme = 'dark' }: CareersHeroProps) {
  const isLight = theme === 'light';

  return (
    <section className={`relative min-h-[60vh] flex items-center pt-36 pb-20 overflow-hidden ${isLight ? 'bg-[#0A0A0B]' : 'bg-[#02040A]'}`}>
      <div className={`absolute inset-0 w-full h-full pointer-events-none ${isLight ? 'opacity-[0.03]' : 'opacity-15'}`}>
        <FloatingLines
          linesGradient={isLight ? ['#FB8C2A', '#FF9A3D', '#FFC480'] : ['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-neo-blue mb-6 animate-fade-in-up">
          Careers at Neo Perion
        </p>
        <h1 className={`text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 ${isLight ? 'text-[#09090B]' : 'text-white'} animate-fade-in-up`} style={{animationDelay: '100ms'}}>
          Build the future of<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-orange-600">
            Intelligent Software.
          </span>
        </h1>
        <p className={`text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up ${isLight ? 'text-neutral-400' : 'text-slate-400'}`} style={{animationDelay: '200ms'}}>
          Join a team of engineers, designers, and AI specialists building enterprise-grade products that scale to millions.
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <button
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-3.5 rounded-lg text-sm font-bold transition-all duration-300 ${
              isLight 
                ? 'bg-neo-blue text-white hover:bg-orange-600 shadow-sm'
                : 'bg-neo-blue text-white hover:bg-orange-600'
            }`}
            style={isLight ? {} : { boxShadow: '0 8px 30px -6px rgba(247,126,13,0.4)' }}
          >
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  );
}
import React from 'react';

interface CareersHeroProps {
  theme?: 'light' | 'dark';
}

export function CareersHero({ theme = 'dark' }: CareersHeroProps) {
  const isLight = theme === 'light';

  if (isLight) {
    // Desktop — manuscript treatment
    return (
      <section className="relative min-h-[60vh] flex items-center pt-36 pb-20 overflow-hidden parchment-surface border-b border-manuscript-parchmentDeep">
        {/* Engineering grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Copper glow top-right */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-manuscript-copper/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
          <p className="chapter-eyebrow mb-6 animate-fade-in-up">Careers at AINCURU</p>

          {/* Copper divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper/50" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
          </div>

          <h1
            className="heading-manuscript text-5xl lg:text-7xl mb-8 animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Build the future of{' '}
            <span className="heading-manuscript--italic text-manuscript-copper">
              Intelligent Software.
            </span>
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-10 text-manuscript-inkMuted font-manuscriptBody animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Join a team of engineers, designers, and AI specialists building enterprise-grade products that scale to millions.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <button
              onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-manuscript-primary"
            >
              View Open Roles
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Dark (mobile fallback)
  return (
    <section className="relative min-h-[60vh] flex items-center pt-36 pb-20 overflow-hidden bg-[#02040A]">
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-neo-blue mb-6 animate-fade-in-up">
          Careers at AINCURU
        </p>
        <h1
          className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-white animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          Build the future of<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-blue to-orange-600">
            Intelligent Software.
          </span>
        </h1>
        <p
          className="text-lg leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up text-slate-400"
          style={{ animationDelay: '200ms' }}
        >
          Join a team of engineers, designers, and AI specialists building enterprise-grade products that scale to millions.
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg text-sm font-bold transition-all duration-300 bg-neo-blue text-white hover:bg-orange-600"
            style={{ boxShadow: '0 8px 30px -6px rgba(247,126,13,0.4)' }}
          >
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  );
}
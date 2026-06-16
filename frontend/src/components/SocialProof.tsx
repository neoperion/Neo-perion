export const SocialProof = () => {
  const industries = [
    "Healthcare", "EdTech", "FinTech", "SaaS", "Enterprise", "Retail",
    "Healthcare", "EdTech", "FinTech", "SaaS", "Enterprise", "Retail"
  ];

  return (
    <section className="py-12 border-b border-slate-900/5 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-8">
        <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400">
          TRUSTED BY INNOVATORS ACROSS INDUSTRIES
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-[marquee_20s_linear_infinite] flex whitespace-nowrap group-hover:[animation-play-state:paused]">
          {industries.map((item, index) => (
            <span key={index} className="mx-8 text-2xl font-display font-semibold text-slate-300 transition-colors hover:text-slate-600 cursor-default">
              {item}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-[marquee_20s_linear_infinite] flex whitespace-nowrap group-hover:[animation-play-state:paused]" style={{ left: '100%' }}>
          {industries.map((item, index) => (
            <span key={`dup-${index}`} className="mx-8 text-2xl font-display font-semibold text-slate-300 transition-colors hover:text-slate-600 cursor-default">
              {item}
            </span>
          ))}
        </div>

        {/* Fade gradients */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
};

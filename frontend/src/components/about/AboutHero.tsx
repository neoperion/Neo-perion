import React from 'react';

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 bg-[#FAFAFA] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full text-center">
        <div className="animate-fade-in-up">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-6">
            Our Identity
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[64px] font-display font-bold tracking-tight leading-[1.05] text-[#09090B] mb-8 max-w-5xl mx-auto">
            We are engineers first.<br/>
            Consultants secondss.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Building stable, scalable enterprise products for companies that refuse to move slowly.
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Cpu, Box, Rocket, ShieldCheck, Zap, Server } from 'lucide-react';

export function WhyNeoPerion() {
  const features = [
    { icon: Cpu, title: 'AI First Engineering', desc: 'Integrating intelligence at the core.', span: 'md:col-span-2 md:row-span-2' },
    { icon: Box, title: 'Product Mindset', desc: 'We build for users, not just specs.', span: 'md:col-span-1' },
    { icon: Rocket, title: 'Startup Expertise', desc: 'Agile execution for rapid scaling.', span: 'md:col-span-1' },
    { icon: ShieldCheck, title: 'Enterprise Standards', desc: 'Secure, compliant, robust.', span: 'md:col-span-1' },
    { icon: Zap, title: 'Fast Execution', desc: 'Time-to-market advantage.', span: 'md:col-span-1' },
    { icon: Server, title: 'Scalable Architecture', desc: 'Built to handle millions.', span: 'md:col-span-2' },
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Why Us</p>
        <h2 className="text-4xl lg:text-5xl font-black text-white">The Neo Perion Advantage</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div key={i} className={`p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent ${feat.span} group overflow-hidden relative`}>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Icon className="text-neo-blue mb-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400">{feat.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
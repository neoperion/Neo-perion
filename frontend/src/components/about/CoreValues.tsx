import React from 'react';
import { Lightbulb, Trophy, Fingerprint, Search, Users } from 'lucide-react';

export function CoreValues() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries with AI-first thinking.' },
    { icon: Trophy, title: 'Excellence', desc: 'Delivering enterprise-grade quality.' },
    { icon: Fingerprint, title: 'Ownership', desc: 'Treating your product as our own.' },
    { icon: Search, title: 'Transparency', desc: 'Clear communication, no hidden agendas.' },
    { icon: Users, title: 'Customer Success', desc: 'Your growth is our benchmark.' }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Principles</p>
        <h2 className="text-4xl lg:text-5xl font-black text-white">Our Core Values</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((val, i) => {
          const Icon = val.icon;
          return (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-slate-400">{val.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
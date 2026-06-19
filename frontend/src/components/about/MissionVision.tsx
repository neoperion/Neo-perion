import React from 'react';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Target size={120} />
          </div>
          <Target className="text-neo-blue mb-6" size={32} />
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Build innovative digital products that solve meaningful problems.
          </p>
        </div>
        
        <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye size={120} />
          </div>
          <Eye className="text-neo-blue mb-6" size={32} />
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Become a globally trusted AI-first product engineering company.
          </p>
        </div>
      </div>
    </section>
  );
}
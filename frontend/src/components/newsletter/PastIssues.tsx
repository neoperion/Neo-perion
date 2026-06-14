import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export function PastIssues() {
  const issues = [
    { title: 'The hidden cost of bad architecture in AI agents', date: 'Oct 24, 2024', tag: 'Architecture' },
    { title: 'Why your startup needs a monolithic backend (for now)', date: 'Oct 17, 2024', tag: 'Engineering' },
    { title: 'Designing enterprise SaaS interfaces that don\'t suck', date: 'Oct 10, 2024', tag: 'Design' },
    { title: 'Scaling PostgreSQL for multi-tenant applications', date: 'Oct 03, 2024', tag: 'Database' },
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-4xl mx-auto border-t border-white/5">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">Recent Issues</h2>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
          View all <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {issues.map((issue, i) => (
          <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-slate-300 border border-white/10">{issue.tag}</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12} /> {issue.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{issue.title}</h3>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
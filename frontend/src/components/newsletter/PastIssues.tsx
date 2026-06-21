import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface PastIssuesProps {
  theme?: 'light' | 'dark';
}

export function PastIssues({ theme = 'dark' }: PastIssuesProps) {
  const isLight = theme === 'light';

  const issues = [
    { title: 'The hidden cost of bad architecture in AI agents', date: 'Oct 24, 2024', tag: 'Architecture' },
    { title: 'Why your startup needs a monolithic backend (for now)', date: 'Oct 17, 2024', tag: 'Engineering' },
    { title: 'Designing enterprise SaaS interfaces that don\'t suck', date: 'Oct 10, 2024', tag: 'Design' },
    { title: 'Scaling PostgreSQL for multi-tenant applications', date: 'Oct 03, 2024', tag: 'Database' },
  ];

  return (
    <section className={`px-8 lg:px-16 py-24 max-w-4xl mx-auto border-t ${isLight ? 'border-zinc-200' : 'border-white/5'}`}>
      <div className="mb-12 flex items-center justify-between">
        <h2 className={`text-3xl font-black ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Recent Issues</h2>
        <button className="text-neo-blue hover:text-blue-600 text-sm font-medium flex items-center gap-1">
          View all <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {issues.map((issue, i) => (
          <div key={i} className={`group p-6 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${isLight ? 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-sm' : 'border-white/5 bg-[#0a0a0a] hover:border-neo-blue/30'}`}>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`px-2 py-0.5 rounded-md text-xs border ${isLight ? 'bg-zinc-100 text-slate-600 border-zinc-200' : 'bg-white/5 text-slate-300 border-white/10'}`}>{issue.tag}</span>
                <span className={`text-xs flex items-center gap-1 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}><Calendar size={12} /> {issue.date}</span>
              </div>
              <h3 className={`text-lg font-bold ${isLight ? 'text-[#09090B] group-hover:text-neo-blue' : 'text-white group-hover:text-neo-blue'} transition-colors`}>{issue.title}</h3>
            </div>
            <div className="flex items-center justify-end">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isLight ? 'bg-zinc-100 group-hover:bg-neo-blue/10 group-hover:text-neo-blue text-slate-600' : 'bg-white/5 group-hover:bg-neo-blue/10 group-hover:text-neo-blue text-white'}`}>
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
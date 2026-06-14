const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../frontend/src/components/careers');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'CareersHero.tsx': `import React from 'react';
import FloatingLines from '@/components/FloatingLines';

export function CareersHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
          Careers at Neo Perion
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Build the future of<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Intelligent Software.
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Join a team of engineers, designers, and AI specialists building enterprise-grade products that scale to millions.
        </p>
        <div className="animate-fade-in-up" style={{animationDelay: '300ms'}}>
          <button
            onClick={() => document.getElementById('open-roles')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-lg text-sm font-bold bg-cyan-500 text-black hover:bg-cyan-400 transition-all duration-300"
            style={{ boxShadow: '0 8px 30px -6px rgba(6,182,212,0.4)' }}
          >
            View Open Roles
          </button>
        </div>
      </div>
    </section>
  );
}`,

  'BenefitsGrid.tsx': `import React from 'react';
import { Heart, Zap, MapPin, Laptop, Coffee, BookOpen } from 'lucide-react';

export function BenefitsGrid() {
  const benefits = [
    { icon: MapPin, title: 'Remote First', desc: 'Work from anywhere in India with flexible hours.' },
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health insurance for you and your family.' },
    { icon: Zap, title: 'Latest Gear', desc: 'MacBooks, monitors, and WFH allowance provided.' },
    { icon: BookOpen, title: 'Learning Budget', desc: 'Annual stipend for courses, books, and conferences.' },
    { icon: Coffee, title: 'Paid Time Off', desc: 'Generous vacation policy to help you recharge.' },
    { icon: Laptop, title: 'AI Copilots', desc: 'Premium access to Claude, ChatGPT, and GitHub Copilot.' }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Life at NP</p>
        <h2 className="text-4xl font-black text-white">Why join us?</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
          const Icon = benefit.icon;
          return (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}`,

  'JobListings.tsx': `import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { ArrowRight, MapPin, Clock } from 'lucide-react';

export function JobListings() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });
      
      if (!error && data) {
        setJobs(data);
      }
      setLoading(false);
    }
    fetchJobs();
  }, []);

  return (
    <section id="open-roles" className="px-8 lg:px-16 py-24 max-w-4xl mx-auto border-t border-white/5">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-white">Open Roles</h2>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin"></div>
        </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl">
          <p className="text-slate-400">No open positions at the moment. Check back later!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              onClick={() => navigate(\`/company/careers/\${job.slug || job.id}\`)}
              className="group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {job.employment_type || 'Full Time'}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-300 border border-white/10">{job.department}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}`
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});

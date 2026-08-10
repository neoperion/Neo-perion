import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { TalentPipeline } from './TalentPipeline';

interface JobListingsProps {
  theme?: 'light' | 'dark';
}

export function JobListings({ theme = 'dark' }: JobListingsProps) {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const isLight = theme === 'light';

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
    <section id="open-roles" className={`px-8 lg:px-16 py-24 max-w-4xl mx-auto border-t ${isLight ? 'border-manuscript-parchmentDeep' : 'border-white/5'}`}>
      <div className="mb-12">
        <h2 className={isLight ? 'heading-manuscript text-4xl' : 'text-4xl font-black text-white'}>Open Roles</h2>
      </div>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className={`w-8 h-8 rounded-full border-2 border-t-transparent animate-spin ${isLight ? 'border-manuscript-copper' : 'border-neo-blue'}`}></div>
        </div>
      ) : jobs.length === 0 ? (
        <TalentPipeline theme={theme} />
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              onClick={() => navigate(`/company/careers/${job.slug || job.id}`)}
              className={`group p-6 rounded-2xl transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isLight 
                  ? 'manuscript-card border border-manuscript-copper/10 hover:border-manuscript-copper/40'
                  : 'border border-white/5 bg-[#0a0a0a] hover:border-neo-blue/30'
              }`}
            >
              <div>
                <h3 className={`text-xl mb-2 transition-colors ${
                  isLight ? 'heading-manuscript text-manuscript-ink group-hover:text-manuscript-copper' : 'font-bold text-white group-hover:text-neo-blue'
                }`}>{job.title}</h3>
                <div className={`flex flex-wrap items-center gap-4 text-sm ${isLight ? 'font-manuscriptBody text-manuscript-inkMuted' : 'text-slate-400'}`}>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {job.employment_type || 'Full Time'}</span>
                  <span className={`px-2 py-0.5 rounded-full text-xs border ${
                    isLight 
                      ? 'bg-manuscript-parchmentWarm text-manuscript-inkSoft border-manuscript-copper/20' 
                      : 'parchment-surface/5 text-slate-300 border-white/10'
                  }`}>{job.department}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isLight
                    ? 'bg-manuscript-parchment border border-manuscript-copper/20 text-manuscript-copper group-hover:bg-manuscript-copper/10'
                    : 'parchment-surface/5 group-hover:bg-neo-blue/10 group-hover:text-neo-blue text-white'
                }`}>
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
import React, { useEffect, useState } from 'react';
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
          <div className="w-8 h-8 rounded-full border-2 border-neo-blue border-t-transparent animate-spin"></div>
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
              onClick={() => navigate(`/company/careers/${job.slug || job.id}`)}
              className="group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-neo-blue/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neo-blue transition-colors">{job.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {job.employment_type || 'Full Time'}</span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 text-xs text-slate-300 border border-white/10">{job.department}</span>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-neo-blue/10 group-hover:text-neo-blue transition-colors">
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
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabase';

interface StatCard { label: string; value: number; }

export default function AdminAnalytics() {
  const [stats, setStats] = useState<StatCard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchStats(); }, []);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const [leads, blogs, cases, subs] = await Promise.all([
        supabase.from('leads').select('id', { count: 'exact', head: true }),
        supabase.from('blogs').select('id', { count: 'exact', head: true }).eq('published', true),
        supabase.from('case_studies').select('id', { count: 'exact', head: true }).eq('published', true),
        supabase.from('newsletter_subscribers').select('id', { count: 'exact', head: true }).eq('active', true),
      ]);
      setStats([
        { label: 'Total Leads', value: leads.count ?? 0 },
        { label: 'Published Blogs', value: blogs.count ?? 0 },
        { label: 'Published Cases', value: cases.count ?? 0 },
        { label: 'Active Subscribers', value: subs.count ?? 0 },
      ]);
    } catch {
      setStats([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet><title>Analytics | Admin | AINCURU</title></Helmet>
      <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
      <p className="text-slate-400 mb-8">Site metrics and content performance.</p>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-900 border border-white/10 rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-slate-800 rounded w-24 mb-4" />
              <div className="h-8 bg-slate-800 rounded w-16" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-900 border border-white/10 rounded-2xl p-6">
              <p className="text-sm text-slate-400 font-medium mb-1">{s.label}</p>
              <p className="text-3xl font-bold text-white">{s.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import { Mail, Download } from 'lucide-react';
import { format } from 'date-fns';

export default function NewsletterAdmin() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (err) {
      console.error('Error fetching subscribers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    if (subscribers.length === 0) return;
    
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Email,Subscribed Date,Active\n"
      + subscribers.map(s => `${s.email},${s.created_at},${s.active}`).join("\n");
      
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `neo_perion_subscribers_${format(new Date(), 'yyyy-MM-dd')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Newsletter Subscribers | Admin | Neo Perion</title>
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Newsletter</h1>
          <p className="text-slate-400">Manage your newsletter subscriber list.</p>
        </div>
        <button 
          onClick={handleExport}
          disabled={subscribers.length === 0}
          className="flex items-center gap-2 bg-slate-800 text-white border border-white/10 px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors disabled:opacity-50"
        >
          <Download size={18} /> Export CSV
        </button>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subscriber Email</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Subscription Date</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-400">Loading subscribers...</td>
              </tr>
            ) : subscribers.length === 0 ? (
              <tr>
                <td colSpan={3} className="p-12 text-center text-slate-400">No subscribers yet.</td>
              </tr>
            ) : (
              subscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-white font-medium">
                      <Mail size={16} className="text-slate-400" /> {sub.email}
                    </div>
                  </td>
                  <td className="p-4 text-sm text-slate-400">
                    {format(new Date(sub.created_at), 'MMM dd, yyyy HH:mm')}
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${
                      sub.active 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {sub.active ? 'Subscribed' : 'Unsubscribed'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import { Mail, Phone, ExternalLink, Paperclip, ChevronDown, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      // Assuming 'careers' is linked
      const { data, error } = await supabase
        .from('job_applications')
        .select(`
          *,
          careers (
            title,
            department
          )
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApplications(data || []);
    } catch (err) {
      console.error('Error fetching applications:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('job_applications')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      setApplications(applications.map(app => app.id === id ? { ...app, status: newStatus } : app));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'reviewed': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'interview': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'accepted': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Job Applications | Admin | AINCURU</title>
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Applications</h1>
          <p className="text-slate-400">Review and manage job applicants.</p>
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Candidate</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Position</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Links</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">Loading applications...</td>
              </tr>
            ) : applications.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-12 text-center text-slate-400">No applications received yet.</td>
              </tr>
            ) : (
              applications.map((app) => (
                <tr key={app.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4 align-top">
                    <div className="font-bold text-white mb-1">{app.name}</div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-1">
                      <Mail size={14} /> {app.email}
                    </div>
                    {app.phone && (
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Phone size={14} /> {app.phone}
                      </div>
                    )}
                  </td>
                  <td className="p-4 align-top">
                    <div className="text-white font-medium mb-1">
                      {app.careers?.title || 'Unknown Position'}
                    </div>
                    <div className="text-sm text-slate-500">
                      Applied {format(new Date(app.created_at), 'MMM dd, yyyy')}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex flex-col gap-2">
                      {app.resume_url && (
                        <a href={app.resume_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-neo-blue hover:underline w-fit">
                          <Paperclip size={14} /> View Resume
                        </a>
                      )}
                      {app.linkedin && (
                        <a href={app.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors w-fit">
                          <ExternalLink size={14} /> LinkedIn Profile
                        </a>
                      )}
                      {app.portfolio && (
                        <a href={app.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors w-fit">
                          <ExternalLink size={14} /> Portfolio
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    <select 
                      value={app.status}
                      onChange={(e) => updateStatus(app.id, e.target.value)}
                      className={`text-xs font-medium px-2.5 py-1.5 rounded-md border focus:outline-none appearance-none cursor-pointer ${getStatusColor(app.status)}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="interview">Interview</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
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

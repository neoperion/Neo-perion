import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import { Mail, Phone, Building, Briefcase, Calendar, ChevronDown, Check, X, Search, Filter } from 'lucide-react';
import { format } from 'date-fns';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  project_type: string;
  budget: string;
  status: string;
  lead_score: number;
  category: string;
  created_at: string;
};

const LeadsAdmin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setLeads(data || []);
    } catch (err) {
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
      
      setLeads(leads.map(lead => lead.id === id ? { ...lead, status: newStatus } : lead));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'contacted': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'qualified': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'converted': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 50) return 'text-amber-400';
    return 'text-red-400';
  };

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Leads Management | Admin | Neo Perion</title>
      </Helmet>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Leads Pipeline</h1>
          <p className="text-slate-400">Manage and qualify incoming project inquiries.</p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
            <input 
              type="text" 
              placeholder="Search leads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white focus:outline-none focus:border-neo-blue transition-colors text-sm"
            />
          </div>
          <button className="p-2 border border-white/10 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-slate-800/50">
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Project Details</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Qualification</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-400">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-neo-blue/20 border-t-neo-blue animate-spin" />
                      Loading leads...
                    </div>
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-400">
                    No leads found.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="p-4 align-top">
                      <div className="font-medium text-white mb-1">{lead.name}</div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-1">
                        <Mail size={14} /> {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-1">
                          <Phone size={14} /> {lead.phone}
                        </div>
                      )}
                      {lead.company && (
                        <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                          <Building size={14} /> {lead.company}
                        </div>
                      )}
                    </td>
                    <td className="p-4 align-top">
                      <div className="flex flex-col gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 w-fit">
                          <Briefcase size={12} /> {lead.project_type || 'General'}
                        </div>
                        {lead.budget && (
                          <div className="text-sm text-emerald-400 font-medium">Budget: {lead.budget}</div>
                        )}
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Calendar size={12} /> {format(new Date(lead.created_at), 'MMM dd, yyyy')}
                        </div>
                      </div>
                    </td>
                    <td className="p-4 align-top">
                      {lead.category ? (
                        <div>
                          <div className="text-sm text-white mb-1 capitalize">{lead.category}</div>
                          <div className={`text-xs font-bold ${getScoreColor(lead.lead_score)}`}>
                            Score: {lead.lead_score}/100
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-500 text-xs italic">Pending</span>
                      )}
                    </td>
                    <td className="p-4 align-top">
                      <select 
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className={`text-xs font-medium px-2.5 py-1.5 rounded-md border focus:outline-none appearance-none cursor-pointer ${getStatusColor(lead.status)}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                      </select>
                    </td>
                    <td className="p-4 align-top text-right">
                      <button className="text-sm text-neo-blue hover:text-white transition-colors">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeadsAdmin;

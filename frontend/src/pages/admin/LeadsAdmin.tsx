import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import {
  Mail, Phone, Building, Briefcase, Calendar, Search, Filter,
  Trash2, Eye, X, ChevronDown, AlertTriangle, StickyNote, CheckSquare, Square, RefreshCw
} from 'lucide-react';
import { format } from 'date-fns';

type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  project_type: string;
  budget: string;
  message: string;
  status: string;
  lead_score: number;
  category: string;
  notes: string;
  created_at: string;
};

const STATUS_OPTIONS = ['new', 'contacted', 'qualified', 'converted', 'lost'];

const STATUS_COLORS: Record<string, string> = {
  new: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  contacted: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  qualified: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  converted: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  lost: 'bg-red-500/10 text-red-400 border-red-500/20',
};

const SCORE_COLOR = (score: number) => {
  if (score >= 80) return 'text-emerald-400';
  if (score >= 50) return 'text-amber-400';
  return 'text-red-400';
};

// ── Confirm Delete Dialog ─────────────────────────────────────────────────────
function ConfirmDialog({
  title, message, onConfirm, onCancel,
}: {
  title: string; message: string; onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
            <AlertTriangle size={18} className="text-red-400" />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-slate-400 text-sm mb-6 leading-relaxed">{message}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded-lg border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Detail / Edit Modal ───────────────────────────────────────────────────────
function LeadDetailModal({
  lead, onClose, onUpdate,
}: {
  lead: Lead; onClose: () => void; onUpdate: (updated: Lead) => void;
}) {
  const [notes, setNotes] = useState(lead.notes || '');
  const [status, setStatus] = useState(lead.status);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('leads')
        .update({ notes, status })
        .eq('id', lead.id);
      if (error) throw error;
      onUpdate({ ...lead, notes, status });
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      console.error('Error saving lead:', err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-white/5 sticky top-0 bg-slate-900 z-10">
          <div>
            <h2 className="text-xl font-bold text-white">{lead.name}</h2>
            <p className="text-slate-400 text-sm">{lead.email}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Contact Info</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Phone', value: lead.phone },
                { label: 'Company', value: lead.company },
                { label: 'Project Type', value: lead.project_type },
                { label: 'Budget', value: lead.budget },
              ].map(({ label, value }) => value ? (
                <div key={label} className="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                  <div className="text-xs text-slate-500 mb-1">{label}</div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              ) : null)}
            </div>
          </section>

          {/* Message */}
          {lead.message && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Message</h3>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-white/5 text-sm text-slate-300 leading-relaxed">
                {lead.message}
              </div>
            </section>
          )}

          {/* AI Qualification */}
          {lead.category && (
            <section>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">AI Qualification</h3>
              <div className="flex items-center gap-4">
                <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5 flex-1">
                  <div className="text-xs text-slate-500 mb-1">Category</div>
                  <div className="text-sm text-white capitalize font-medium">{lead.category}</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5 flex-1">
                  <div className="text-xs text-slate-500 mb-1">Lead Score</div>
                  <div className={`text-lg font-bold ${SCORE_COLOR(lead.lead_score)}`}>{lead.lead_score}<span className="text-xs text-slate-500">/100</span></div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5 flex-1">
                  <div className="text-xs text-slate-500 mb-1">Received</div>
                  <div className="text-sm text-white font-medium">{format(new Date(lead.created_at), 'MMM dd, yyyy')}</div>
                </div>
              </div>
            </section>
          )}

          {/* Status Edit */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Pipeline Status</h3>
            <div className="flex flex-wrap gap-2">
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border capitalize transition-all ${
                    status === s
                      ? STATUS_COLORS[s] + ' ring-1 ring-current'
                      : 'border-white/10 text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </section>

          {/* Notes */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-2">
              <StickyNote size={12} /> Internal Notes
            </h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal notes about this lead..."
              rows={4}
              className="w-full bg-slate-800/50 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 resize-none transition-colors"
            />
          </section>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg border border-white/10 text-slate-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? (
              <><div className="w-3.5 h-3.5 rounded-full border-2 border-white/20 border-t-white animate-spin" /> Saving…</>
            ) : saved ? (
              '✓ Saved!'
            ) : (
              'Save Changes'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
const LeadsAdmin = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [viewLead, setViewLead] = useState<Lead | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null); // single id
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchLeads = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    else setRefreshing(true);
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
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  // ── Status update ──
  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from('leads').update({ status: newStatus }).eq('id', id);
      if (error) throw error;
      setLeads(prev => prev.map(l => l.id === id ? { ...l, status: newStatus } : l));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // ── Delete single ──
  const deleteLead = async (id: string) => {
    try {
      const { error } = await supabase.from('leads').delete().eq('id', id);
      if (error) throw error;
      setLeads(prev => prev.filter(l => l.id !== id));
      setSelectedIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    } catch (err) {
      console.error('Error deleting lead:', err);
    } finally {
      setDeleteTarget(null);
    }
  };

  // ── Bulk delete ──
  const bulkDelete = async () => {
    try {
      const ids = Array.from(selectedIds);
      const { error } = await supabase.from('leads').delete().in('id', ids);
      if (error) throw error;
      setLeads(prev => prev.filter(l => !selectedIds.has(l.id)));
      setSelectedIds(new Set());
    } catch (err) {
      console.error('Error bulk deleting leads:', err);
    } finally {
      setBulkDeleteOpen(false);
    }
  };

  // ── Update from modal ──
  const handleUpdate = (updated: Lead) => {
    setLeads(prev => prev.map(l => l.id === updated.id ? updated : l));
    setViewLead(updated);
  };

  // ── Select logic ──
  const toggleSelect = (id: string) => {
    setSelectedIds(prev => {
      const s = new Set(prev);
      if (s.has(id)) {
        s.delete(id);
      } else {
        s.add(id);
      }
      return s;
    });
  };

  // ── Filter ──
  const filteredLeads = leads.filter(lead => {
    const matchSearch = (
      lead.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    const matchStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const allOnPageSelected = filteredLeads.length > 0 && filteredLeads.every(l => selectedIds.has(l.id));

  const toggleSelectAll = () => {
    if (allOnPageSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredLeads.map(l => l.id)));
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Leads Management | Admin | AINCURU</title>
      </Helmet>

      {/* ── Modals ── */}
      {viewLead && (
        <LeadDetailModal
          lead={viewLead}
          onClose={() => setViewLead(null)}
          onUpdate={handleUpdate}
        />
      )}
      {deleteTarget && (
        <ConfirmDialog
          title="Delete Lead"
          message="This will permanently delete this lead and all associated data. This cannot be undone."
          onConfirm={() => deleteLead(deleteTarget)}
          onCancel={() => setDeleteTarget(null)}
        />
      )}
      {bulkDeleteOpen && (
        <ConfirmDialog
          title={`Delete ${selectedIds.size} Lead${selectedIds.size > 1 ? 's' : ''}`}
          message={`You are about to permanently delete ${selectedIds.size} lead${selectedIds.size > 1 ? 's' : ''}. This cannot be undone.`}
          onConfirm={bulkDelete}
          onCancel={() => setBulkDeleteOpen(false)}
        />
      )}

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Leads Pipeline</h1>
          <p className="text-slate-400 text-sm">
            {leads.length} total lead{leads.length !== 1 ? 's' : ''} · {leads.filter(l => l.status === 'new').length} new
          </p>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => fetchLeads(true)}
            className={`p-2 border border-white/10 rounded-lg bg-slate-900 text-slate-400 hover:text-white transition-colors ${refreshing ? 'animate-spin' : ''}`}
            title="Refresh"
          >
            <RefreshCw size={16} />
          </button>

          {/* Status filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-slate-900 border border-white/10 rounded-lg pl-3 pr-8 py-2 text-sm text-slate-300 focus:outline-none focus:border-blue-500/50 cursor-pointer"
            >
              <option value="all">All Status</option>
              {STATUS_OPTIONS.map(s => <option key={s} value={s} className="capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
          </div>

          {/* Search */}
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
            <input
              type="text"
              placeholder="Search leads…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
            />
          </div>
        </div>
      </div>

      {/* ── Bulk action bar ── */}
      {selectedIds.size > 0 && (
        <div className="mb-4 flex items-center gap-3 px-4 py-3 bg-blue-600/10 border border-blue-500/20 rounded-xl">
          <span className="text-sm text-blue-300 font-medium">{selectedIds.size} selected</span>
          <button
            onClick={() => setBulkDeleteOpen(true)}
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-lg hover:bg-red-500/20 transition-colors"
          >
            <Trash2 size={13} /> Delete Selected
          </button>
          <button
            onClick={() => setSelectedIds(new Set())}
            className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
          >
            Clear
          </button>
        </div>
      )}

      {/* ── Table ── */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-slate-800/50">
                {/* Checkbox */}
                <th className="p-4 w-10">
                  <button onClick={toggleSelectAll} className="text-slate-500 hover:text-slate-300 transition-colors">
                    {allOnPageSelected
                      ? <CheckSquare size={16} className="text-blue-400" />
                      : <Square size={16} />}
                  </button>
                </th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Contact</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Project</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Score</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-400">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-blue-500/20 border-t-blue-500 animate-spin" />
                      Loading leads…
                    </div>
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-500">
                    {searchTerm || statusFilter !== 'all' ? 'No leads match your filters.' : "No leads yet. They'll show up here when someone fills out the contact form."}
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className={`hover:bg-white/[0.02] transition-colors group ${selectedIds.has(lead.id) ? 'bg-blue-500/5' : ''}`}
                  >
                    {/* Checkbox */}
                    <td className="p-4">
                      <button onClick={() => toggleSelect(lead.id)} className="text-slate-500 hover:text-slate-300 transition-colors">
                        {selectedIds.has(lead.id)
                          ? <CheckSquare size={16} className="text-blue-400" />
                          : <Square size={16} />}
                      </button>
                    </td>

                    {/* Contact */}
                    <td className="p-4 align-top">
                      <div className="font-medium text-white mb-1">{lead.name}</div>
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                        <Mail size={11} /> {lead.email}
                      </div>
                      {lead.phone && (
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs mb-1">
                          <Phone size={11} /> {lead.phone}
                        </div>
                      )}
                      {lead.company && (
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Building size={11} /> {lead.company}
                        </div>
                      )}
                    </td>

                    {/* Project */}
                    <td className="p-4 align-top">
                      <div className="flex flex-col gap-1.5">
                        <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/8 text-xs text-slate-300 w-fit">
                          <Briefcase size={10} /> {lead.project_type || 'General'}
                        </div>
                        {lead.budget && (
                          <div className="text-xs text-emerald-400 font-medium">{lead.budget}</div>
                        )}
                        <div className="flex items-center gap-1 text-slate-600 text-xs">
                          <Calendar size={10} /> {format(new Date(lead.created_at), 'MMM dd, yyyy')}
                        </div>
                      </div>
                    </td>

                    {/* AI Score */}
                    <td className="p-4 align-top">
                      {lead.category ? (
                        <div>
                          <div className="text-xs text-slate-300 mb-0.5 capitalize">{lead.category}</div>
                          <div className={`text-xs font-bold ${SCORE_COLOR(lead.lead_score)}`}>
                            {lead.lead_score}/100
                          </div>
                          {/* mini score bar */}
                          <div className="mt-1.5 w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${lead.lead_score >= 80 ? 'bg-emerald-400' : lead.lead_score >= 50 ? 'bg-amber-400' : 'bg-red-400'}`}
                              style={{ width: `${lead.lead_score}%` }}
                            />
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-600 text-xs italic">Pending</span>
                      )}
                    </td>

                    {/* Status */}
                    <td className="p-4 align-top">
                      <div className="relative">
                        <select
                          value={lead.status}
                          onChange={(e) => updateStatus(lead.id, e.target.value)}
                          className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border focus:outline-none appearance-none cursor-pointer pr-6 ${STATUS_COLORS[lead.status] || 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}
                        >
                          {STATUS_OPTIONS.map(s => (
                            <option key={s} value={s} className="bg-slate-900 text-white capitalize">{s.charAt(0).toUpperCase() + s.slice(1)}</option>
                          ))}
                        </select>
                        <ChevronDown size={11} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none opacity-60" />
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="p-4 align-top">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setViewLead(lead)}
                          title="View / Edit"
                          className="p-1.5 rounded-lg border border-white/8 text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(lead.id)}
                          title="Delete"
                          className="p-1.5 rounded-lg border border-white/8 text-slate-500 hover:text-red-400 hover:border-red-500/30 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        {!loading && filteredLeads.length > 0 && (
          <div className="px-4 py-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {filteredLeads.length} of {leads.length} leads</span>
            <span>{selectedIds.size > 0 ? `${selectedIds.size} selected` : ''}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadsAdmin;

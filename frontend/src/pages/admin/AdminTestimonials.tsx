import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';

type T = Record<string, unknown>;

export default function AdminTestimonials() {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ id: string; [k: string]: unknown } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    const { data } = await supabase.from('testimonials').select('*').order('created_at', { ascending: false });
    setItems((data ?? []) as T[]);
    setLoading(false);
  };

  const handleEdit = (item: T) => setEditing(item as { id: string; [k: string]: unknown });
  const handleNew = () => setEditing({ id: 'new', name: '', company: '', designation: '', feedback: '', industry: '', rating: 5, active: true });

  const handleSave = async () => {
    if (!editing) return;
    const payload = { ...editing };
    delete (payload as Record<string, unknown>).id;
    if (editing.id === 'new') await supabase.from('testimonials').insert(payload);
    else await supabase.from('testimonials').update(payload).eq('id', editing.id);
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await supabase.from('testimonials').delete().eq('id', deleteTarget);
    setDeleteTarget(null);
    fetchItems();
  };

  if (editing) {
    return (
      <div className="animate-in fade-in duration-500 max-w-3xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">{editing.id === 'new' ? 'New Testimonial' : 'Edit Testimonial'}</h1>
          <div className="flex gap-3">
            <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-neo-blue text-slate-900 font-bold hover:bg-neo-blue/90 transition-colors">Save</button>
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 space-y-4">
          {['name', 'company', 'designation', 'industry'].map((f) => (
            <div key={f}>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 capitalize">{f}</label>
              <input value={(editing[f] as string) ?? ''} onChange={(e) => setEditing({ ...editing, [f]: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue" />
            </div>
          ))}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Feedback</label>
            <textarea value={(editing.feedback as string) ?? ''} onChange={(e) => setEditing({ ...editing, feedback: e.target.value })}
              rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Rating (1-5)</label>
              <input type="number" min={1} max={5} value={(editing.rating as number) ?? 5}
                onChange={(e) => setEditing({ ...editing, rating: parseInt(e.target.value, 10) })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue" />
            </div>
            <label className="flex items-center gap-3 pt-7">
              <input type="checkbox" checked={!!editing.active} onChange={(e) => setEditing({ ...editing, active: e.target.checked })}
                className="w-4 h-4 rounded border-white/10 text-neo-blue bg-black/50" />
              <span className="text-sm font-medium text-slate-300">Active</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet><title>Testimonials | Admin | Neo Perion</title></Helmet>
      <div className="flex justify-between items-center mb-8">
        <div><h1 className="text-3xl font-bold text-white mb-2">Testimonials</h1><p className="text-slate-400">Manage client testimonials.</p></div>
        <button onClick={handleNew} className="flex items-center gap-2 bg-neo-blue text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-neo-blue/90 transition-colors"><Plus size={18} /> New</button>
      </div>
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Name</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Company</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Rating</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? <tr><td colSpan={6} className="p-8 text-center text-slate-400">Loading...</td></tr>
            : items.length === 0 ? <tr><td colSpan={6} className="p-12 text-center text-slate-400">No testimonials yet.</td></tr>
            : items.map((t) => {
              const x = t as { id: string; name: string; designation: string; company: string; rating: number; active: boolean; created_at: string };
              return (
                <tr key={x.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4"><div className="font-bold text-white">{x.name}</div><div className="text-xs text-slate-500">{x.designation}</div></td>
                  <td className="p-4 text-sm text-slate-400">{x.company}</td>
                  <td className="p-4 text-amber-400">{'★'.repeat(x.rating)}{'☆'.repeat(5 - x.rating)}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium border ${x.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-slate-500/10 text-slate-400 border-slate-500/20'}`}>
                      {x.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">{format(new Date(x.created_at), 'MMM dd, yyyy')}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(t)} className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Edit2 size={16} /></button>
                      <button onClick={() => setDeleteTarget(x.id)} className="p-2 text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ConfirmDialog open={!!deleteTarget} title="Delete Testimonial" message="Are you sure? This cannot be undone."
        onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { ConfirmDialog } from '@/components/admin/ConfirmDialog';
import { ImageUpload } from '@/components/admin/ImageUpload';

type PortfolioItem = Record<string, unknown>;

export default function AdminPortfolio() {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ id: string; [k: string]: unknown } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  useEffect(() => { fetchItems(); }, []);

  const fetchItems = async () => {
    setLoading(true);
    // Note: User must ensure a 'portfolios' table exists in Supabase
    const { data } = await supabase.from('portfolios').select('*').order('created_at', { ascending: false });
    setItems((data ?? []) as PortfolioItem[]);
    setLoading(false);
  };

  const handleEdit = (item: PortfolioItem) => setEditing(item as { id: string; [k: string]: unknown });
  const handleNew = () => setEditing({ 
    id: 'new', 
    title: '', 
    slug: '', 
    category: '', 
    description: '', 
    client_name: '', 
    website_url: '',
    cover_image: '', 
    published: false 
  });

  const handleSave = async () => {
    if (!editing) return;
    const payload = { ...editing };
    delete (payload as Record<string, unknown>).id;
    if (editing.id === 'new') {
      await supabase.from('portfolios').insert(payload);
    } else {
      await supabase.from('portfolios').update(payload).eq('id', editing.id);
    }
    setEditing(null);
    fetchItems();
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    await supabase.from('portfolios').delete().eq('id', deleteTarget);
    setDeleteTarget(null);
    fetchItems();
  };

  if (editing) {
    const isNew = editing.id === 'new';
    return (
      <div className="animate-in fade-in duration-500 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">{isNew ? 'New Portfolio Item' : 'Edit Portfolio Item'}</h1>
          <div className="flex gap-3">
            <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors">Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-neo-blue text-slate-900 font-bold hover:bg-neo-blue/90 transition-colors">Save</button>
          </div>
        </div>
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 space-y-4">
          <ImageUpload
            label="Cover Image / Thumbnail"
            value={(editing.cover_image as string) ?? ''}
            onChange={(url) => setEditing({ ...editing, cover_image: url })}
          />
          {['title', 'slug', 'category', 'client_name', 'website_url'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 capitalize">{field.replace(/_/g, ' ')}</label>
              <input value={(editing[field] as string) ?? ''} onChange={(e) => setEditing({ ...editing, [field]: e.target.value })}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue" />
            </div>
          ))}
          {['description'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-slate-300 mb-1.5 capitalize">{field.replace(/_/g, ' ')}</label>
              <textarea value={(editing[field] as string) ?? ''} onChange={(e) => setEditing({ ...editing, [field]: e.target.value })}
                rows={3} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue" />
            </div>
          ))}
          <label className="flex items-center gap-3 pt-2">
            <input type="checkbox" checked={!!editing.published} onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
              className="w-4 h-4 rounded border-white/10 text-neo-blue bg-black/50" />
            <span className="text-sm font-medium text-slate-300">Published</span>
          </label>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet><title>Portfolio | Admin | Neo Perion</title></Helmet>
      <div className="flex justify-between items-center mb-8">
        <div><h1 className="text-3xl font-bold text-white mb-2">Portfolio</h1><p className="text-slate-400">Manage portfolio items.</p></div>
        <button onClick={handleNew} className="flex items-center gap-2 bg-neo-blue text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-neo-blue/90 transition-colors"><Plus size={18} /> New</button>
      </div>
      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Image</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Title</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Category</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? <tr><td colSpan={6} className="p-8 text-center text-slate-400">Loading...</td></tr>
            : items.length === 0 ? <tr><td colSpan={6} className="p-12 text-center text-slate-400">No portfolio items yet.</td></tr>
            : items.map((item) => {
              const c = item as { id: string; title: string; category: string; cover_image: string; published: boolean; created_at: string };
              return (
                <tr key={c.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4">
                    {c.cover_image ? (
                      <img src={c.cover_image} alt={c.title} className="w-12 h-12 rounded object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center text-xs text-slate-500">None</div>
                    )}
                  </td>
                  <td className="p-4 font-bold text-white">{c.title}</td>
                  <td className="p-4 text-sm text-slate-400">{c.category}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 rounded-md text-xs font-medium border ${c.published ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'}`}>
                      {c.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">{c.created_at ? format(new Date(c.created_at), 'MMM dd, yyyy') : 'N/A'}</td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => handleEdit(item)} className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"><Edit2 size={16} /></button>
                      <button onClick={() => setDeleteTarget(c.id)} className="p-2 text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ConfirmDialog open={!!deleteTarget} title="Delete Portfolio Item" message="Are you sure? This cannot be undone."
        onConfirm={handleDelete} onCancel={() => setDeleteTarget(null)} />
    </div>
  );
}

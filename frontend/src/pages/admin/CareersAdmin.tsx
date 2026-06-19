import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Check, X, MapPin, Briefcase } from 'lucide-react';
import { format } from 'date-fns';

export default function CareersAdmin() {
  const [careers, setCareers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingCareer, setEditingCareer] = useState<any | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('Engineering');
  const [type, setType] = useState('Full-time');
  const [location, setLocation] = useState('Chennai, Tamil Nadu (Hybrid)');
  const [description, setDescription] = useState('');
  const [open, setOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchCareers();
  }, []);

  const fetchCareers = async () => {
    try {
      const { data, error } = await supabase
        .from('careers')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCareers(data || []);
    } catch (err) {
      console.error('Error fetching careers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (career: any) => {
    setEditingCareer(career);
    setTitle(career.title);
    setDepartment(career.department);
    setType(career.type);
    setLocation(career.location);
    setDescription(career.description);
    setOpen(career.open);
  };

  const handleCreateNew = () => {
    setEditingCareer({ id: 'new' });
    setTitle('');
    setDepartment('Engineering');
    setType('Full-time');
    setLocation('Chennai, Tamil Nadu (Hybrid)');
    setDescription('');
    setOpen(true);
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const payload = {
        title,
        department,
        type,
        location,
        description,
        open
      };

      if (editingCareer.id === 'new') {
        const { error } = await supabase.from('careers').insert(payload);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('careers').update(payload).eq('id', editingCareer.id);
        if (error) throw error;
      }

      setEditingCareer(null);
      fetchCareers();
    } catch (err) {
      console.error('Error saving career:', err);
      alert('Failed to save career');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if(!window.confirm('Are you sure you want to delete this job posting?')) return;
    try {
      const { error } = await supabase.from('careers').delete().eq('id', id);
      if (error) throw error;
      fetchCareers();
    } catch (err) {
      console.error('Error deleting career:', err);
    }
  };

  if (editingCareer) {
    return (
      <div className="animate-in fade-in duration-500 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            {editingCareer.id === 'new' ? 'Create Job Posting' : 'Edit Job Posting'}
          </h1>
          <div className="flex gap-3">
            <button 
              onClick={() => setEditingCareer(null)}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg bg-neo-blue text-slate-900 font-bold hover:bg-neo-blue/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isSaving ? 'Saving...' : <><Check size={18} /> Save Job</>}
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Job Title</label>
            <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
              placeholder="e.g. Senior Frontend Engineer"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Department</label>
              <select 
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
              >
                <option>Engineering</option>
                <option>Design</option>
                <option>Product</option>
                <option>Sales</option>
                <option>Marketing</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Type</label>
              <select 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
              >
                <option>Full-time</option>
                <option>Contract</option>
                <option>Internship</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Location</label>
              <input 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                placeholder="e.g. Remote"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={8}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors resize-none"
              placeholder="Job description..."
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <input 
              type="checkbox" 
              id="open"
              checked={open}
              onChange={(e) => setOpen(e.target.checked)}
              className="w-4 h-4 rounded border-white/10 text-neo-blue focus:ring-neo-blue focus:ring-offset-slate-900 bg-black/50"
            />
            <label htmlFor="open" className="text-sm font-medium text-slate-300">
              Position is actively open
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Careers Management | Admin | Neo Perion</title>
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Careers</h1>
          <p className="text-slate-400">Manage your open job positions.</p>
        </div>
        <button 
          onClick={handleCreateNew}
          className="flex items-center gap-2 bg-neo-blue text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-neo-blue/90 transition-colors"
        >
          <Plus size={18} /> New Position
        </button>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Position</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Details</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">Loading careers...</td>
              </tr>
            ) : careers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-12 text-center text-slate-400">No open positions found.</td>
              </tr>
            ) : (
              careers.map((career) => (
                <tr key={career.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="font-bold text-white mb-1">{career.title}</div>
                    <div className="text-sm text-slate-400">{career.department}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-1">
                      <Briefcase size={14} /> {career.type}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                      <MapPin size={14} /> {career.location}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${
                      career.open 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-slate-500/10 text-slate-400 border-slate-500/20'
                    }`}>
                      {career.open ? 'Active' : 'Closed'}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => handleEdit(career)}
                        className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(career.id)}
                        className="p-2 text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
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

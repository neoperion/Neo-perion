import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { supabase } from '@/lib/supabase';
import { TipTapEditor } from '@/components/admin/TipTapEditor';
import { ImageUpload } from '@/components/admin/ImageUpload';
import { Plus, Edit2, Trash2, Check, X } from 'lucide-react';
import { format } from 'date-fns';

export default function BlogAdmin() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingBlog, setEditingBlog] = useState<any | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('AI');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [published, setPublished] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog: any) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    setSlug(blog.slug);
    setCategory(blog.category);
    setExcerpt(blog.excerpt);
    setContent(blog.content);
    setCoverImage(blog.cover_image || '');
    setPublished(blog.published);
  };

  const handleCreateNew = () => {
    setEditingBlog({ id: 'new' });
    setTitle('');
    setSlug('');
    setCategory('AI');
    setExcerpt('');
    setContent('');
    setCoverImage('');
    setPublished(false);
  };

  const generateSlug = (val: string) => {
    setSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const payload = {
        title,
        slug,
        category,
        excerpt,
        content,
        cover_image: coverImage,
        published
      };

      if (editingBlog.id === 'new') {
        const { error } = await supabase.from('blogs').insert(payload);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('blogs').update(payload).eq('id', editingBlog.id);
        if (error) throw error;
      }

      setEditingBlog(null);
      fetchBlogs();
    } catch (err) {
      console.error('Error saving blog:', err);
      alert('Failed to save blog');
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if(!window.confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id);
      if (error) throw error;
      fetchBlogs();
    } catch (err) {
      console.error('Error deleting blog:', err);
    }
  };

  if (editingBlog) {
    return (
      <div className="animate-in fade-in duration-500 max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            {editingBlog.id === 'new' ? 'Create Blog Post' : 'Edit Blog Post'}
          </h1>
          <div className="flex gap-3">
            <button 
              onClick={() => setEditingBlog(null)}
              className="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-slate-300 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              disabled={isSaving}
              className="px-4 py-2 rounded-lg bg-neo-blue text-slate-900 font-bold hover:bg-neo-blue/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isSaving ? 'Saving...' : <><Check size={18} /> Save Post</>}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 space-y-4">
            <ImageUpload
              label="Cover Image / Thumbnail"
              value={coverImage}
              onChange={setCoverImage}
            />
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Title</label>
              <input 
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if(editingBlog.id === 'new') generateSlug(e.target.value);
                }}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                placeholder="Blog post title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Slug</label>
                <input 
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                  placeholder="blog-post-slug"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
                >
                  <option>AI</option>
                  <option>SaaS</option>
                  <option>Startups</option>
                  <option>Engineering</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">Excerpt</label>
              <textarea 
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors resize-none"
                placeholder="Brief summary for the listing page..."
              />
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input 
                type="checkbox" 
                id="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded border-white/10 text-neo-blue focus:ring-neo-blue focus:ring-offset-slate-900 bg-black/50"
              />
              <label htmlFor="published" className="text-sm font-medium text-slate-300">
                Publish immediately
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Content</label>
            <TipTapEditor content={content} onChange={setContent} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500">
      <Helmet>
        <title>Blogs Management | Admin | Neo Perion</title>
      </Helmet>

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Blogs</h1>
          <p className="text-slate-400">Manage your published and drafted content.</p>
        </div>
        <button 
          onClick={handleCreateNew}
          className="flex items-center gap-2 bg-neo-blue text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-neo-blue/90 transition-colors"
        >
          <Plus size={18} /> New Post
        </button>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 bg-slate-800/50">
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Post Details</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
              <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-400">Loading blogs...</td>
              </tr>
            ) : blogs.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-12 text-center text-slate-400">No blogs found. Create your first post!</td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-4">
                    <div className="font-bold text-white mb-1">{blog.title}</div>
                    <div className="text-sm text-slate-400">{blog.category}</div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${
                      blog.published 
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {blog.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-400">
                    {format(new Date(blog.created_at), 'MMM dd, yyyy')}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button 
                        onClick={() => handleEdit(blog)}
                        className="p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(blog.id)}
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

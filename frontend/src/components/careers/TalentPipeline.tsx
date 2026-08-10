import React, { useState, useRef } from "react";
import { Send, Briefcase, UploadCloud, Loader2, AlertCircle } from "lucide-react";
import { supabase } from '@/lib/supabase';

const AREAS = ["Full-Stack Engineering", "AI/ML Engineering", "DevOps & Cloud", "Product Design", "Product Management", "Other"];

interface TalentPipelineProps {
  theme?: 'light' | 'dark';
}

export const TalentPipeline: React.FC<TalentPipelineProps> = ({ theme = 'dark' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState(AREAS[0]);
  const [msg, setMsg] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const isLight = theme === 'light';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      
      // 5MB limit (5 * 1024 * 1024 bytes)
      if (selectedFile.size > 5 * 1024 * 1024) {
        setErrorMsg("File size exceeds 5MB limit. Please upload a smaller file.");
        setFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }
      
      setErrorMsg("");
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setErrorMsg("Please upload your resume (PDF or Image).");
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    try {
      // 1. Upload Resume to Cloudinary via Backend Route
      const formData = new FormData();
      formData.append('file', file);

      const uploadRes = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!uploadRes.ok) {
        throw new Error('Failed to upload resume. Please try again.');
      }

      const uploadData = await uploadRes.json();
      const resumeUrl = uploadData.url;

      // 2. Submit data to Supabase
      const { error: dbError } = await supabase
        .from('talent_network')
        .insert({
          name,
          email,
          area,
          message: msg,
          resume_url: resumeUrl,
          status: 'pending'
        });

      if (dbError) throw dbError;

      setSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'An unexpected error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section aria-labelledby="talent-pipeline-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Briefcase className={`w-10 h-10 mx-auto mb-6 ${isLight ? 'text-manuscript-copper' : 'text-neo-blue'}`} aria-hidden="true" />
          <h2 id="talent-pipeline-heading" className={isLight ? 'heading-manuscript text-4xl mb-4' : 'text-3xl md:text-4xl font-display font-bold mb-4 text-white'}>Don&apos;t see the right role?</h2>
          <p className={`text-lg mb-10 ${isLight ? 'text-manuscript-inkMuted font-manuscriptBody' : 'text-slate-400'}`}>We&apos;re always looking for exceptional engineers. Send us your details and we&apos;ll reach out when something opens up.</p>
          
          {submitted ? (
            <div className={`rounded-2xl border p-8 ${isLight ? 'manuscript-card border-manuscript-copper/20 text-manuscript-ink' : 'border-emerald-500/30 bg-emerald-500/10 p-8 text-emerald-400'}`}>
              <p className="font-semibold text-lg mb-2">Application received.</p>
              <p className={`text-sm ${isLight ? 'text-manuscript-inkMuted font-manuscriptBody' : 'text-emerald-300/80'}`}>Thanks for your interest. We&apos;ll be in touch if a role matching your profile opens up.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`rounded-2xl border p-6 md:p-8 text-left space-y-4 ${
              isLight ? 'manuscript-card border-manuscript-parchmentDeep' : 'border-white/10 bg-slate-800/40 backdrop-blur'
            }`}>
              
              {errorMsg && (
                <div className={`p-4 rounded-xl border text-sm flex items-center gap-2 ${
                  isLight ? 'bg-red-50 text-red-800 border-red-200' : 'bg-red-500/10 border-red-500/20 text-red-400'
                }`}>
                  <AlertCircle size={16} /> {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tp-name" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-manuscript-inkSoft font-manuscriptBody uppercase tracking-wider' : 'text-slate-400'}`}>Full name *</label>
                  <input id="tp-name" required type="text" value={name} onChange={e => setName(e.target.value)} className={`w-full h-12 px-3 rounded-lg border text-sm focus:outline-none ${
                    isLight ? 'bg-manuscript-parchmentWarm border-manuscript-copper/20 text-manuscript-ink focus:border-manuscript-copper font-manuscriptBody' : 'parchment-surface--deep/60 border-white/10 text-white focus:border-neo-blue'
                  }`} />
                </div>
                <div>
                  <label htmlFor="tp-email" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-manuscript-inkSoft font-manuscriptBody uppercase tracking-wider' : 'text-slate-400'}`}>Email *</label>
                  <input id="tp-email" required type="email" value={email} onChange={e => setEmail(e.target.value)} className={`w-full h-12 px-3 rounded-lg border text-sm focus:outline-none ${
                    isLight ? 'bg-manuscript-parchmentWarm border-manuscript-copper/20 text-manuscript-ink focus:border-manuscript-copper font-manuscriptBody' : 'parchment-surface--deep/60 border-white/10 text-white focus:border-neo-blue'
                  }`} />
                </div>
              </div>
              <div>
                <label htmlFor="tp-area" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-manuscript-inkSoft font-manuscriptBody uppercase tracking-wider' : 'text-slate-400'}`}>Area of interest *</label>
                <select id="tp-area" value={area} onChange={(e) => setArea(e.target.value)} className={`w-full h-12 px-3 rounded-lg border text-sm focus:outline-none ${
                  isLight ? 'bg-manuscript-parchmentWarm border-manuscript-copper/20 text-manuscript-ink focus:border-manuscript-copper font-manuscriptBody' : 'parchment-surface--deep/60 border-white/10 text-white focus:border-neo-blue'
                }`}>
                  {AREAS.map((a) => <option key={a} value={a} className={isLight ? 'text-manuscript-ink bg-manuscript-parchmentWarm' : ''}>{a}</option>)}
                </select>
              </div>

              {/* Resume Upload Field */}
              <div>
                <label className={`flex items-center justify-between text-xs font-semibold mb-1.5 ${isLight ? 'text-manuscript-inkSoft font-manuscriptBody uppercase tracking-wider' : 'text-slate-400'}`}>
                  <span>Resume / CV (PDF or Image) *</span>
                  <span className={`font-normal opacity-60 font-manuscriptBody tracking-wider ${isLight ? 'text-manuscript-inkMuted' : ''}`}>Max 5 MB</span>
                </label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`w-full h-20 rounded-lg border border-dashed flex flex-col items-center justify-center cursor-pointer transition-colors ${
                    isLight ? 'border-manuscript-copper/40 bg-manuscript-parchment hover:border-manuscript-copper' : 'border-white/20 parchment-surface--deep/40 hover:parchment-surface--deep/80 text-white'
                  }`}
                >
                  <UploadCloud className={`w-6 h-6 mb-1 ${isLight ? 'text-manuscript-copper/60' : 'text-slate-400'}`} />
                  <span className={`text-xs ${isLight ? 'text-manuscript-inkMuted font-manuscriptBody' : 'text-slate-400'}`}>
                    {file ? file.name : "Click to upload your resume"}
                  </span>
                </div>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileChange} 
                  className="hidden" 
                  accept="application/pdf,image/*" 
                />
              </div>

              <div>
                <label htmlFor="tp-msg" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-manuscript-inkSoft font-manuscriptBody uppercase tracking-wider' : 'text-slate-400'}`}>Tell us about yourself</label>
                <textarea id="tp-msg" rows={4} value={msg} onChange={e => setMsg(e.target.value)} placeholder="Your background, what excites you, links to your work..." className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:outline-none resize-none ${
                  isLight ? 'bg-manuscript-parchmentWarm border-manuscript-copper/20 text-manuscript-ink placeholder-manuscript-inkMuted focus:border-manuscript-copper font-manuscriptBody' : 'parchment-surface--deep/60 border-white/10 text-white focus:border-neo-blue'
                }`} />
              </div>
              <button disabled={submitting} type="submit" className={`w-full h-12 rounded-lg font-semibold text-sm transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                isLight ? 'bg-manuscript-copper text-manuscript-parchmentLight hover:bg-manuscript-copper/90 font-manuscriptBody' : 'bg-neo-blue text-white hover:bg-orange-600'
              }`}>
                {submitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                ) : (
                  <>Submit application <Send className="w-4 h-4" aria-hidden="true" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

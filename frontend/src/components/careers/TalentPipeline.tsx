import React, { useState } from "react";
import { Send, Briefcase } from "lucide-react";

const AREAS = ["Full-Stack Engineering", "AI/ML Engineering", "DevOps & Cloud", "Product Design", "Product Management", "Other"];

interface TalentPipelineProps {
  theme?: 'light' | 'dark';
}

export const TalentPipeline: React.FC<TalentPipelineProps> = ({ theme = 'dark' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [area, setArea] = useState(AREAS[0]);
  const isLight = theme === 'light';

  return (
    <section aria-labelledby="talent-pipeline-heading" className="py-16 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Briefcase className="w-10 h-10 text-neo-blue mx-auto mb-6" aria-hidden="true" />
          <h2 id="talent-pipeline-heading" className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Don&apos;t see the right role?</h2>
          <p className={`text-lg mb-10 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>We&apos;re always looking for exceptional engineers. Send us your details and we&apos;ll reach out when something opens up.</p>
          {submitted ? (
            <div className={`rounded-2xl border p-8 ${isLight ? 'border-green-200 bg-green-50 text-green-700' : 'border-emerald-500/30 bg-emerald-500/10 p-8 text-emerald-400'}`}>
              <p className="font-semibold text-lg mb-2">Application received.</p>
              <p className={`text-sm ${isLight ? 'text-green-600' : 'text-emerald-300/80'}`}>Thanks for your interest. We&apos;ll be in touch if a role matching your profile opens up.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className={`rounded-2xl border p-6 md:p-8 text-left space-y-4 ${
              isLight ? 'border-zinc-200/80 bg-white shadow-md' : 'border-white/10 bg-slate-800/40 backdrop-blur'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="tp-name" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Full name</label>
                  <input id="tp-name" required type="text" className={`w-full h-12 px-3 rounded-lg border text-sm focus:border-neo-blue focus:outline-none ${
                    isLight ? 'bg-slate-50 border-zinc-200 text-[#09090B]' : 'bg-slate-900/60 border-white/10 text-white'
                  }`} />
                </div>
                <div>
                  <label htmlFor="tp-email" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Email</label>
                  <input id="tp-email" required type="email" className={`w-full h-12 px-3 rounded-lg border text-sm focus:border-neo-blue focus:outline-none ${
                    isLight ? 'bg-slate-50 border-zinc-200 text-[#09090B]' : 'bg-slate-900/60 border-white/10 text-white'
                  }`} />
                </div>
              </div>
              <div>
                <label htmlFor="tp-area" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Area of interest</label>
                <select id="tp-area" value={area} onChange={(e) => setArea(e.target.value)} className={`w-full h-12 px-3 rounded-lg border text-sm focus:border-neo-blue focus:outline-none ${
                  isLight ? 'bg-slate-50 border-zinc-200 text-slate-800' : 'bg-slate-900/60 border-white/10 text-white'
                }`}>
                  {AREAS.map((a) => <option key={a} value={a} className={isLight ? 'text-slate-800 bg-white' : ''}>{a}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="tp-msg" className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>Tell us about yourself</label>
                <textarea id="tp-msg" rows={4} placeholder="Your background, what excites you, links to your work..." className={`w-full px-3 py-2.5 rounded-lg border text-sm focus:border-neo-blue focus:outline-none resize-none ${
                  isLight ? 'bg-slate-50 border-zinc-200 text-[#09090B] placeholder-zinc-400' : 'bg-slate-900/60 border-white/10 text-white'
                }`} />
              </div>
              <button type="submit" className="w-full h-12 rounded-lg bg-neo-blue text-white font-semibold text-sm hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2">
                Submit application <Send className="w-4 h-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

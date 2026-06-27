import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

interface LetterCTAProps {
  theme?: 'light' | 'dark';
}

export const LetterCTA: React.FC<LetterCTAProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <section aria-labelledby="letter-cta-heading" className={`py-16 md:py-20 my-12 mx-4 md:mx-8 rounded-2xl border transition-all ${isLight ? 'border-neutral-800 bg-neutral-900 shadow-sm' : 'border-white/10 bg-slate-900/40 backdrop-blur-md'}`}>
      <div className="text-center px-6">
        <h2 id="letter-cta-heading" className={`text-2xl md:text-3xl font-display font-bold mb-3 ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Ready to build something lasting?</h2>
        <p className={`max-w-xl mx-auto mb-8 ${isLight ? 'text-neutral-400' : 'text-slate-400'}`}>We take on a small number of projects each quarter. If you&apos;re building something that needs to ship and stay shipped, let&apos;s talk.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="/contact" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-neo-blue text-white font-semibold text-sm hover:bg-orange-600 transition-colors">
            <Calendar className="w-4 h-4" aria-hidden="true" /> Book a strategy call <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a href="/company/about" className={`inline-flex items-center justify-center h-12 px-6 rounded-lg border font-semibold text-sm transition-colors ${isLight ? 'border-neutral-800 text-neutral-200 hover:bg-neutral-900' : 'border-white/15 text-white hover:border-white/40'}`}>
            Read more about us
          </a>
        </div>
      </div>
    </section>
  );
};


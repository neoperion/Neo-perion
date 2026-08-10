import React from "react";
import { ArrowRight, Calendar } from "lucide-react";

interface LetterCTAProps {
  theme?: 'light' | 'dark';
}

export const LetterCTA: React.FC<LetterCTAProps> = ({ theme = 'dark' }) => {
  const isLight = theme === 'light';

  return (
    <section
      aria-labelledby="letter-cta-heading"
      className={`py-14 md:py-16 my-12 rounded-lg border transition-all ${
        isLight
          ? 'border-manuscript-parchmentDeep bg-manuscript-parchmentWarm/80'
          : 'border-white/10 bg-[rgba(31,26,20,0.4)] backdrop-blur-md'
      }`}
    >
      <div className="text-center px-8">
        <h2
          id="letter-cta-heading"
          className={`font-manuscript text-2xl md:text-3xl font-semibold mb-3 ${
            isLight ? 'text-manuscript-ink' : 'text-white'
          }`}
        >
          Ready to build something lasting?
        </h2>
        <p
          className={`max-w-xl mx-auto mb-8 text-[15px] leading-relaxed ${
            isLight ? 'text-manuscript-inkMuted' : 'text-slate-400'
          }`}
        >
          We take on a small number of projects each quarter. If you&apos;re building something
          that needs to ship and stay shipped, let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/contact"
            className={`inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md font-semibold text-sm transition-all ${
              isLight
                ? 'bg-manuscript-ink text-manuscript-parchmentLight hover:bg-manuscript-walnutDeep'
                : 'bg-neo-blue text-white hover:bg-orange-600'
            }`}
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            Book a strategy call
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
          <a
            href="/company/about"
            className={`inline-flex items-center justify-center h-11 px-6 rounded-md border font-semibold text-sm transition-colors ${
              isLight
                ? 'border-manuscript-parchmentDeep text-manuscript-inkSoft hover:border-manuscript-copper hover:text-manuscript-copper'
                : 'border-white/15 text-white hover:border-white/40'
            }`}
          >
            Read more about us
          </a>
        </div>
      </div>
    </section>
  );
};

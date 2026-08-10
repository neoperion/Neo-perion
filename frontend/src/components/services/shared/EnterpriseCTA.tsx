import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const EnterpriseCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 lg:py-[120px] px-6 lg:px-12 bg-manuscript-parchmentDark">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2.5rem] p-8 md:p-16 overflow-hidden parchment-surface--deep border border-manuscriptAlpha-ink-10 shadow-2xl">
          {/* Radial Gradient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neo-blue/20 via-slate-900 to-slate-900 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-manuscript-ink mb-6 tracking-tight leading-tight">
                Ready to Build <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                  Enterprise AI Systems?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-manuscript-inkSoft mb-8 leading-relaxed">
                From AI agents to enterprise automation, AINCURU delivers production-grade systems designed for scale.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neo-blue text-manuscript-ink font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors shadow-lg shadow-neo-blue/25"
                >
                  Book Strategy Call
                  <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => navigate('/work')}
                  className="w-full sm:w-auto px-8 py-4 rounded-xl parchment-surface/10 text-manuscript-ink font-bold flex items-center justify-center hover:parchment-surface/20 transition-colors backdrop-blur-sm border border-white/10"
                >
                  View Case Studies
                </button>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              <div className="parchment-surface/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 flex flex-col gap-4">
                {[
                  'Enterprise Ready',
                  'AI First Engineering',
                  'Long-Term Support',
                  'Secure Deployment'
                ].map((indicator, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-neo-blue shrink-0" size={20} />
                    <span className="text-slate-200 font-semibold">{indicator}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

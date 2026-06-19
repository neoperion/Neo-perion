import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';

export function FounderSection() {
  const navigate = useNavigate();
  return (
    <section className="px-6 lg:px-12 py-24 bg-white border-b border-slate-900/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            The people behind the engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-24">
          {[
            { name: 'Vasantharaj S', role: 'CEO & Founder', img: '/images/founder.jpg' },
            { name: 'Adhi Ganesh K', role: 'COO & Co-Founder', img: '/images/adhi.png' },
            { name: 'Tamilselvan', role: 'CTO & Co-Founder', img: '/images/tamilselvan.jpg' }
          ].map((founder, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full group">
              <div className="mb-6 w-full max-w-[280px]">
                <TiltedCard
                  imageSrc={founder.img}
                  altText={founder.name}
                  captionText={founder.name}
                  containerHeight="280px"
                  containerWidth="100%"
                  imageHeight="280px"
                  imageWidth="100%"
                  rotateAmplitude={10}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={false}
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{founder.name}</h3>
              <p className="text-neo-blue font-medium mt-1">{founder.role}</p>
            </div>
          ))}
        </div>
        
        {/* Editorial Pull Quote */}
        <div className="premium-card p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 hidden md:block">
            <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-editorial text-3xl md:text-4xl text-slate-900 leading-snug mb-8 relative">
              <span className="text-neo-blue text-6xl absolute -top-4 -left-6 opacity-30 select-none">"</span>
              We built Neo Perion because every great product deserves a partner who thinks in systems, not just features.
            </h3>
            <button
              onClick={() => navigate('/company/founder-letter')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 text-slate-900 hover:border-neo-blue hover:text-neo-blue transition-all font-semibold"
            >
              Read the Founder's Letter <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
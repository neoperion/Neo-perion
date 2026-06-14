import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';

export function FounderSection() {
  const navigate = useNavigate();
  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-20 text-center">
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Leadership</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center mb-16">
        {[
          { name: 'Vasantharaj S', role: 'CEO & Founder', img: '/images/founder.jpg' },
          { name: 'Adhi Ganesh K', role: 'COO & Co-Founder', img: '/images/adhi.png' },
          { name: 'Tamilselvan', role: 'CTO & Co-Founder', img: '/images/tamilselvan.jpg' }
        ].map((founder, i) => (
          <div key={i} className="flex flex-col items-center gap-5 text-center">
            <TiltedCard
              imageSrc={founder.img}
              altText={founder.name}
              captionText={founder.name}
              containerHeight="280px"
              containerWidth="280px"
              imageHeight="280px"
              imageWidth="280px"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={false}
            />
            <div>
              <h3 className="text-xl font-bold text-white">{founder.name}</h3>
              <p className="text-cyan-400 font-medium mt-1">{founder.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          onClick={() => navigate('/company/founder-letter')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.06] hover:border-cyan-500/50 transition-all font-semibold"
        >
          Read the Founder's Letter <ArrowRight size={18} className="text-cyan-400" />
        </button>
      </div>
    </section>
  );
}
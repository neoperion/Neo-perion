import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Linkedin } from 'lucide-react';
import TiltedCard from '@/components/TiltedCard';

export function FounderSection() {
  const navigate = useNavigate();
  // LinkedIn: company URL is verified (audit Phase 1 aligned it to
  // /company/neo-perion-solutions). Per-founder personal LinkedIn URLs are not
  // in the repo — we link to the company page rather than invent URLs.
  const companyLinkedIn = 'https://www.linkedin.com/company/neo-perion-solutions';

  return (
    <section className="px-6 lg:px-12 py-24 bg-[#0A0A0B] border-b border-[#27272A]/60">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Leadership</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
            The people behind the engineering.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
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
              <h3 className="text-xl font-bold text-white">{founder.name}</h3>
              <p className="text-neo-blue font-medium mt-1">{founder.role}</p>
              <a
                href={companyLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 transition-colors hover:text-neo-blue"
                aria-label={`Connect with ${founder.name} on LinkedIn`}
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* Disambiguation — required for entity separation from Perion Network Ltd.
            Required by SEOandGEO Phase 2.5: helps Google and AI models distinguish
            "Neo Perion Solutions" from "Perion Network" in Knowledge Graph results. */}
        <p className="mx-auto mb-24 max-w-3xl rounded-lg border border-[#27272A]/60 bg-[#0F0F11] p-5 text-[14px] leading-relaxed text-white/70">
          <strong className="text-white">Note:</strong> Neo Perion Solutions is an
          independent software company based in Tamil Nadu, India, and is not
          affiliated with Perion Network Ltd.
        </p>

        {/* Editorial Pull Quote */}
        <div className="bg-neutral-900 border-[0.5px] border-[#27272A] rounded-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 shadow-sm">
          <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 hidden md:block">
            <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-full h-full object-cover grayscale" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-editorial text-3xl md:text-4xl text-white leading-snug mb-8 relative">
              <span className="text-neo-blue text-6xl absolute -top-4 -left-6 opacity-30 select-none">"</span>
              We built Neo Perion because every great product deserves a partner who thinks in systems, not just features.
            </h3>
            <button
              onClick={() => navigate('/company/founder-letter')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#27272A] text-white hover:border-neo-blue hover:text-neo-blue transition-all font-semibold"
            >
              Read the Founder's Letter <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
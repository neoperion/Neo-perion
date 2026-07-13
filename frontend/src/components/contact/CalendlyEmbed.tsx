import React, { useEffect } from 'react';
import { Calendar } from 'lucide-react';

export function CalendlyEmbed() {
  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "";
  const isConfigured = calendlyUrl !== "" && calendlyUrl !== "https://calendly.com/neoperion/discovery-call";

  useEffect(() => {
    if (!isConfigured) return;
    
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);
    
    return () => {
      head?.removeChild(script);
    };
  }, [isConfigured]);

  if (!isConfigured) {
    return (
      <div className="bg-[#0D0D0F] border border-white/[0.06] rounded-2xl h-[700px] flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 bg-[#F77E0D]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#F77E0D]/20">
          <Calendar className="text-[#F77E0D] w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Scheduling Coming Soon</h3>
        <p className="text-white/40 text-[14px] max-w-md leading-relaxed">
          Our online booking system is currently being set up. Please use the contact form to reach out to us directly in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-white/[0.06] rounded-2xl overflow-hidden h-[700px] relative bg-[#0D0D0F]">
      {/* Spinner shown beneath the iframe while Calendly loads */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#F77E0D] border-t-transparent rounded-full animate-spin" />
      </div>

      {/*
        CSS filter trick: Calendly renders inside a cross-origin iframe so we
        cannot inject styles. invert(1) flips white→black and their primary
        blue (~#0556F5) to amber-orange (~#FAA90A), matching our theme.
        saturate(1.1) keeps the orange vivid; hue-rotate(5deg) nudges it
        slightly warmer.
      */}
      <div
        className="calendly-inline-widget w-full h-full relative z-10"
        data-url={`${calendlyUrl}?hide_gdpr_banner=1`}
        style={{ filter: 'invert(1) hue-rotate(-28deg) saturate(1.4) brightness(0.95)' }}
      />
    </div>
  );
}
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
      <div className="bg-[#050816] border border-white/5 rounded-2xl h-[700px] flex flex-col items-center justify-center text-center p-8">
        <div className="w-16 h-16 bg-neo-blue/10 rounded-2xl flex items-center justify-center mb-6 border border-neo-blue/20">
          <Calendar className="text-neo-blue w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Scheduling Coming Soon</h3>
        <p className="text-slate-400 max-w-md">
          Our online booking system is currently being set up. Please use the contact form to reach out to us directly in the meantime.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden h-[700px] relative">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-8 h-8 border-2 border-neo-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=06b6d4`} 
      />
    </div>
  );
}
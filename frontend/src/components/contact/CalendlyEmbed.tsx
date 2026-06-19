import React, { useEffect } from 'react';

export function CalendlyEmbed() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head?.appendChild(script);
    
    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden h-[700px] relative">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-8 h-8 border-2 border-neo-blue border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url="https://calendly.com/neoperion/discovery-call?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=06b6d4" 
      />
    </div>
  );
}
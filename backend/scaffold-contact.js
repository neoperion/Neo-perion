const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../frontend/src/components/contact');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'ContactHero.tsx': `import React from 'react';
import FloatingLines from '@/components/FloatingLines';

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
          Contact Us
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Let's build something<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            extraordinary.
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Whether you need a full product team or an AI automation strategy, we're ready to help. Fill out the form or book a call directly.
        </p>
      </div>
    </section>
  );
}`,

  'CalendlyEmbed.tsx': `import React, { useEffect } from 'react';

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
        <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div 
        className="calendly-inline-widget w-full h-full" 
        data-url="https://calendly.com/neoperion/discovery-call?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=06b6d4" 
      />
    </div>
  );
}`,

  'LocationMap.tsx': `import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export function LocationMap() {
  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">Our Office</h3>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
              <MapPin size={18} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Headquarters</p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Neo Perion Solutions<br/>
                Chennai, Tamil Nadu<br/>
                India
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Email</p>
              <a href="mailto:contact@neoperion.com" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                contact@neoperion.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-white font-medium mb-1">Phone</p>
              <a href="tel:+919876543210" className="text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-slate-500">
          We work with clients globally across all time zones.
        </p>
      </div>
    </div>
  );
}`
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});

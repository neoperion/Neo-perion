const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../frontend/src/components/about');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'AboutHero.tsx': `import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Box } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';

export function AboutHero() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[8, 6]}
          lineDistance={[3, 4]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-6xl mx-auto px-8 lg:px-16 relative z-10 w-full text-center lg:text-left flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
            About Neo Perion
          </p>
          <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-8 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
            From Idea To Product.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Powered By AI.
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            We are a collective of product engineers and AI specialists dedicated to turning complex challenges into scalable, enterprise-grade solutions.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-3.5 rounded-lg text-sm font-bold bg-cyan-500 text-black hover:bg-cyan-400 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              style={{ boxShadow: '0 8px 30px -6px rgba(6,182,212,0.4)' }}
            >
              Explore Services <ArrowRight size={16} />
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-3.5 rounded-lg border border-white/10 text-slate-300 text-sm font-medium hover:border-cyan-500/50 hover:text-white transition-all duration-300"
            >
              Book Consultation
            </button>
          </div>
        </div>
        <div className="flex-1 w-full relative animate-fade-in-up" style={{animationDelay: '400ms'}}>
           <div className="aspect-square max-w-md mx-auto rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-3xl absolute inset-0"></div>
           <div className="relative z-10 w-full aspect-[4/3] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex items-center justify-center shadow-2xl">
              <Box size={100} className="text-cyan-400/50" />
           </div>
        </div>
      </div>
    </section>
  );
}`,

  'MissionVision.tsx': `import React from 'react';
import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Target size={120} />
          </div>
          <Target className="text-cyan-400 mb-6" size={32} />
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Build innovative digital products that solve meaningful problems.
          </p>
        </div>
        
        <div className="p-10 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Eye size={120} />
          </div>
          <Eye className="text-cyan-400 mb-6" size={32} />
          <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-medium">
            Become a globally trusted AI-first product engineering company.
          </p>
        </div>
      </div>
    </section>
  );
}`,

  'CoreValues.tsx': `import React from 'react';
import { Lightbulb, Trophy, Fingerprint, Search, Users } from 'lucide-react';

export function CoreValues() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', desc: 'Pushing boundaries with AI-first thinking.' },
    { icon: Trophy, title: 'Excellence', desc: 'Delivering enterprise-grade quality.' },
    { icon: Fingerprint, title: 'Ownership', desc: 'Treating your product as our own.' },
    { icon: Search, title: 'Transparency', desc: 'Clear communication, no hidden agendas.' },
    { icon: Users, title: 'Customer Success', desc: 'Your growth is our benchmark.' }
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Principles</p>
        <h2 className="text-4xl lg:text-5xl font-black text-white">Our Core Values</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {values.map((val, i) => {
          const Icon = val.icon;
          return (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Icon className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-slate-400">{val.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}`,

  'WhyNeoPerion.tsx': `import React from 'react';
import { Cpu, Box, Rocket, ShieldCheck, Zap, Server } from 'lucide-react';

export function WhyNeoPerion() {
  const features = [
    { icon: Cpu, title: 'AI First Engineering', desc: 'Integrating intelligence at the core.', span: 'md:col-span-2 md:row-span-2' },
    { icon: Box, title: 'Product Mindset', desc: 'We build for users, not just specs.', span: 'md:col-span-1' },
    { icon: Rocket, title: 'Startup Expertise', desc: 'Agile execution for rapid scaling.', span: 'md:col-span-1' },
    { icon: ShieldCheck, title: 'Enterprise Standards', desc: 'Secure, compliant, robust.', span: 'md:col-span-1' },
    { icon: Zap, title: 'Fast Execution', desc: 'Time-to-market advantage.', span: 'md:col-span-1' },
    { icon: Server, title: 'Scalable Architecture', desc: 'Built to handle millions.', span: 'md:col-span-2' },
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-6xl mx-auto border-t border-white/5">
      <div className="mb-16 text-center">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 mb-4">Why Us</p>
        <h2 className="text-4xl lg:text-5xl font-black text-white">The Neo Perion Advantage</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
        {features.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <div key={i} className={\`p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent \${feat.span} group overflow-hidden relative\`}>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <Icon className="text-cyan-400 mb-4" size={32} />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-slate-400">{feat.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}`,

  'FounderSection.tsx': `import React from 'react';
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
}`
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});

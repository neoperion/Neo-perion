const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../frontend/src/pages');

const files = {
  'SuccessStories.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingLines from '@/components/FloatingLines';
import { ArrowRight, TrendingUp } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    { client: 'FinTech Startup', title: 'Scaling from MVP to 100k Users', metric: '300% Growth', desc: 'Re-architected the backend to support massive transaction volume.' },
    { client: 'EdTech Platform', title: 'AI-Powered Learning Paths', metric: '40% Retention Increase', desc: 'Integrated custom LLMs to personalize student journeys.' },
    { client: 'Healthcare Enterprise', title: 'HIPAA Compliant Data Pipeline', metric: 'Zero Breaches', desc: 'Built a secure data processing system for patient records.' },
  ];

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Success Stories | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="relative text-center px-8 mb-20">
           <h1 className="text-5xl lg:text-7xl font-black mb-6">Success Stories</h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">See how we've helped companies transform their operations and scale their products.</p>
        </section>
        <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {stories.map((s,i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
               <TrendingUp className="text-cyan-400 mb-6" size={32} />
               <p className="text-sm text-cyan-400 font-bold mb-2">{s.client}</p>
               <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
               <p className="text-slate-400 mb-6">{s.desc}</p>
               <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                 <p className="text-sm text-slate-500 mb-1">Key Result</p>
                 <p className="text-xl font-bold text-white">{s.metric}</p>
               </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}`,

  'Testimonials.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { text: "Neo Perion didn't just write code; they transformed our entire product strategy. Their AI expertise is unmatched.", author: "Sarah J.", role: "CTO, TechCorp" },
    { text: "The most reliable engineering partner we've worked with. Period.", author: "Michael T.", role: "Founder, SaaS Start" },
    { text: "Their architecture decisions saved us months of rework when we started scaling rapidly.", author: "Elena R.", role: "VP Engineering, DataCo" },
  ];

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Testimonials | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="text-center px-8 mb-20">
           <h1 className="text-5xl lg:text-7xl font-black mb-6">What our clients say</h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto">Don't just take our word for it.</p>
        </section>
        <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-8">
          {testimonials.map((t,i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent relative">
               <Quote className="text-cyan-500/20 absolute top-6 right-6" size={60} />
               <p className="text-lg text-slate-300 italic relative z-10 mb-8">"{t.text}"</p>
               <div>
                 <p className="font-bold text-white">{t.author}</p>
                 <p className="text-sm text-cyan-400">{t.role}</p>
               </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}`,

  'Technologies.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Server, Code, Database, Globe, Cloud } from 'lucide-react';

export default function Technologies() {
  const navigate = useNavigate();
  const categories = [
    { id: 'ai', icon: Cpu, title: 'AI & Machine Learning', items: ['OpenAI', 'Gemini', 'Claude', 'Llama', 'DeepSeek'] },
    { id: 'frontend', icon: Code, title: 'Frontend Engineering', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
    { id: 'backend', icon: Server, title: 'Backend Systems', items: ['Node.js', 'Python', 'Go', 'Express', 'NestJS'] },
    { id: 'database', icon: Database, title: 'Data & Storage', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
    { id: 'cloud', icon: Cloud, title: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Vercel', 'Docker', 'Kubernetes'] }
  ];

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Technologies | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="text-center px-8 mb-20 max-w-4xl mx-auto">
           <h1 className="text-5xl lg:text-7xl font-black mb-6">Our Tech Stack</h1>
           <p className="text-xl text-slate-400">We use the most robust, scalable, and modern technologies to build enterprise-grade applications.</p>
        </section>
        <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.id} 
                onClick={() => navigate(\`/technologies/\${cat.id}\`)}
                className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all cursor-pointer group"
              >
                 <Icon className="text-cyan-400 mb-6" size={32} />
                 <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
                 <div className="flex flex-wrap gap-2">
                   {cat.items.map(item => (
                     <span key={item} className="px-3 py-1 rounded-full bg-white/5 text-sm text-slate-300 border border-white/10">{item}</span>
                   ))}
                 </div>
              </div>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}`,

  'TechnologyDetail.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';

export default function TechnologyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>{slug} Technology | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="max-w-4xl mx-auto px-8">
           <button onClick={() => navigate('/technologies')} className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-12">
             <ArrowLeft size={16} /> Back to Tech Stack
           </button>
           <h1 className="text-5xl font-black mb-6 capitalize">{slug?.replace('-', ' ')} Engineering</h1>
           <p className="text-xl text-slate-400 mb-12 leading-relaxed">
             We leverage the best tools in the {slug?.replace('-', ' ')} ecosystem to deliver highly performant, secure, and scalable solutions tailored to your business needs.
           </p>
           
           <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
             <h2 className="text-2xl font-bold mb-6">Why we use this stack</h2>
             <ul className="space-y-4 text-slate-300">
               <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"/> Enterprise-grade reliability and security.</li>
               <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"/> Massive open-source community support.</li>
               <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"/> Superior developer experience and rapid prototyping capabilities.</li>
               <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"/> Proven horizontal scalability under heavy load.</li>
             </ul>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}`,

  'Insights.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Insights() {
  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Insights | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24 flex items-center justify-center min-h-[70vh]">
        <div className="text-center px-8">
           <h1 className="text-5xl lg:text-7xl font-black mb-6">Insights & Blog</h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">Our thoughts on AI, engineering, and product development.</p>
           <div className="p-6 border border-dashed border-white/20 rounded-2xl inline-block">
             <p className="text-cyan-400 font-medium">New articles publishing soon.</p>
           </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}`,

  'Security.tsx': `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, Lock, Server } from 'lucide-react';

export default function Security() {
  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-cyan-500/30">
      <Helmet><title>Security | Neo Perion</title></Helmet>
      <Header />
      <main className="pt-32 pb-24">
        <section className="text-center px-8 mb-20 max-w-4xl mx-auto">
           <ShieldCheck className="mx-auto text-cyan-400 mb-8" size={64} />
           <h1 className="text-5xl lg:text-7xl font-black mb-6">Enterprise Security</h1>
           <p className="text-xl text-slate-400">Security is not a feature. It is the foundation of everything we build.</p>
        </section>
        
        <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-8">
           <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
             <Lock className="text-cyan-400 mb-4" size={32} />
             <h3 className="text-2xl font-bold mb-4">Data Protection</h3>
             <p className="text-slate-400 leading-relaxed">All data is encrypted at rest using AES-256 and in transit using TLS 1.3. We implement strict Row Level Security (RLS) policies to ensure tenant isolation.</p>
           </div>
           <div className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
             <Server className="text-cyan-400 mb-4" size={32} />
             <h3 className="text-2xl font-bold mb-4">Infrastructure Security</h3>
             <p className="text-slate-400 leading-relaxed">We utilize secure VPCs, regular vulnerability scanning, automated dependency updates, and strict IAM roles following the principle of least privilege.</p>
           </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}`
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});

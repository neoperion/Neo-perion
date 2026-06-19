import React from 'react';
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
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
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
                onClick={() => navigate(`/technologies/${cat.id}`)}
                className="p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-neo-blue/30 transition-all cursor-pointer group"
              >
                 <Icon className="text-neo-blue mb-6" size={32} />
                 <h3 className="text-2xl font-bold mb-4 group-hover:text-neo-blue transition-colors">{cat.title}</h3>
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
}
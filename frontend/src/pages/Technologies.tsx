import React from 'react';
import { SEO } from "@/components/SEO";
import { seoConfig } from "@/lib/seoConfig";
import { useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Server, Code, Database, Globe, Cloud } from 'lucide-react';

export default function Technologies() {
  const navigate = useNavigate();
  const categories = [
    { id: 'ai',       icon: Cpu,      title: 'AI & Machine Learning', items: ['OpenAI', 'Gemini', 'Claude', 'Llama', 'DeepSeek'] },
    { id: 'frontend', icon: Code,     title: 'Frontend Engineering',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'] },
    { id: 'backend',  icon: Server,   title: 'Backend Systems',       items: ['Node.js', 'Python', 'Go', 'Express', 'NestJS'] },
    { id: 'database', icon: Database, title: 'Data & Storage',        items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma'] },
    { id: 'cloud',    icon: Cloud,    title: 'Cloud & DevOps',        items: ['AWS', 'GCP', 'Vercel', 'Docker', 'Kubernetes'] },
  ];

  return (
    <div className="manuscript-root min-h-[auto]">
      <SEO {...seoConfig.technologies} />
      
      <Header />

      <main>
        {/* Hero */}
        <section className="pt-36 pb-24 parchment-surface border-b border-manuscript-parchmentDeep relative overflow-hidden">
          {/* Subtle engineering grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(91,58,31,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,58,31,0.04) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Corner registration marks */}
          <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-manuscript-copper/25 pointer-events-none" />
          <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-manuscript-copper/25 pointer-events-none" />

          <div className="container mx-auto px-6 text-center relative z-10">
            <p className="chapter-eyebrow mb-6">AINCURU Engineering Stack</p>

            {/* Copper divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-manuscript-copper/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-manuscript-copper/50" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-manuscript-copper/40" />
            </div>

            <h1 className="heading-manuscript text-5xl lg:text-7xl mb-6">
              Technical{' '}
              <span className="heading-manuscript--italic text-manuscript-copper">Architecture</span>
            </h1>
            <p className="text-xl text-manuscript-inkMuted max-w-2xl mx-auto font-manuscriptBody leading-relaxed">
              We use the most robust, scalable, and modern technologies to build enterprise-grade applications.
            </p>
          </div>
        </section>

        {/* Technology grid */}
        <section className="parchment-surface--warm py-20 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => navigate(`/technologies/${cat.id}`)}
                  className="manuscript-card rounded-lg p-8 cursor-pointer group"
                >
                  {/* Archive number */}
                  <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-manuscript-copperMuted mb-4 block">
                    {String(index + 1).padStart(2, '0')} — Stack
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-md bg-manuscript-parchment border border-manuscript-copper/25 flex items-center justify-center mb-6 group-hover:border-manuscript-copper/60 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-manuscript-copper" />
                  </div>

                  <h3 className="heading-manuscript text-2xl mb-5 group-hover:text-manuscript-copper transition-colors duration-200">
                    {cat.title}
                  </h3>

                  {/* Copper divider */}
                  <div className="h-px bg-manuscript-parchmentDeep mb-5" />

                  {/* Technology badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-sm text-[11px] font-mono font-medium text-manuscript-inkMuted bg-manuscript-parchmentLight border border-manuscript-parchmentDeep hover:border-manuscript-copper/40 hover:text-manuscript-copper transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Hover explore indicator */}
                  <p className="mt-6 text-[12px] font-semibold text-manuscript-copperMuted opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-manuscriptBody tracking-wide">
                    Explore →
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA band */}
        <section className="py-20 bg-manuscript-ink border-t border-manuscript-walnutDeep">
          <div className="max-w-3xl mx-auto px-6 text-center">
            {/* Corner marks */}
            <p className="chapter-eyebrow text-manuscript-copperMuted mb-6">Engineering Partnership</p>
            <h2 className="font-manuscript text-3xl md:text-4xl text-manuscript-parchmentLight mb-6 leading-tight">
              The right stack for your project.
            </h2>
            <p className="text-manuscript-inkMuted font-manuscriptBody mb-8 leading-relaxed">
              We don't impose technology choices. We match the right tools to your specific product needs, scale requirements, and team capabilities.
            </p>
            <a href="/contact" className="btn-manuscript-secondary border-manuscript-copper/40 text-manuscript-parchmentLight hover:bg-manuscript-copper/10 hover:border-manuscript-copper inline-flex items-center gap-2">
              Discuss your project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

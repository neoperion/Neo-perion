import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import FloatingLines from "@/components/FloatingLines";

export default function FounderLetter() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-fade]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('opacity-100', 'translate-y-0');
          el.classList.remove('opacity-0', 'translate-y-4');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
      <Helmet>
        <title>Founder's Letter | Neo Perion</title>
        <meta name="description" content="A letter from the CEO on why we built Neo Perion and our shift from agencies to product engineering." />
      </Helmet>

      <Header />

      <main className="relative pt-32 pb-24">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-neo-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

        <article className="max-w-3xl mx-auto px-8 relative z-10">
          <header className="mb-16 text-center animate-fade-in-up">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-6">Founder's Letter</p>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
              Why we built Neo Perion.
            </h1>
            <div className="flex items-center justify-center gap-4">
              <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-12 h-12 rounded-full border border-white/10" />
              <div className="text-left">
                <p className="text-white font-semibold">Vasantharaj S</p>
                <p className="text-sm text-slate-400">CEO & Founder</p>
              </div>
            </div>
          </header>

          <div 
            className="prose prose-invert prose-lg md:prose-xl max-w-none text-slate-300 font-serif leading-relaxed"
            data-fade 
            style={{transitionDuration: '800ms'}}
          >
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-neo-blue first-letter:mr-3 first-letter:float-left">
              The technology industry is broken in a very specific way. Over the last decade, we watched countless companies pour millions of dollars into digital transformation initiatives, only to end up with fragmented tools, unscalable architectures, and massive technical debt.
            </p>
            
            <p>
              Before starting Neo Perion, Adhi, Tamilselvan, and I spent years working in traditional agency environments and enterprise IT. We saw the same pattern repeat everywhere: agencies were incentivized to deliver projects quickly, ship the MVP, and move on. There was rarely any consideration for what happens at scale, under load, or when the business model pivots.
            </p>

            <h2 className="text-white font-sans font-bold text-2xl mt-12 mb-6">The shift to Product Engineering</h2>
            
            <p>
              We realized that the traditional "software agency" model doesn't work for modern businesses. You don't need an agency that just writes code to specifications; you need a product engineering partner.
            </p>

            <p>
              That realization was the genesis of Neo Perion. We built this company on a simple premise: <strong>Stability over hype, and engineering over outsourcing.</strong> We don't just build apps; we build intelligent, scalable ecosystems powered by AI.
            </p>

            <blockquote className="border-l-4 border-neo-blue pl-6 my-10 italic text-white/90">
              "We treat your product as our own. If an architecture won't scale to a million users, we won't recommend it. If a feature adds complexity without value, we'll push back."
            </blockquote>

            <h2 className="text-white font-sans font-bold text-2xl mt-12 mb-6">An AI-First Future</h2>

            <p>
              We are currently in the middle of the largest platform shift since the internet itself. Artificial Intelligence is no longer just a feature; it is the foundation of modern software. We integrated AI-first thinking into our core engineering practices because we believe that software which isn't intelligent by default will be obsolete within five years.
            </p>

            <p>
              But integrating AI shouldn't mean adding a fragile API wrapper. It requires robust data pipelines, secure enterprise architectures, and deeply integrated intelligence that actually solves user problems.
            </p>

            <p>
              We built Neo Perion to be the partner we wished we had: technical, transparent, and deeply invested in the long-term success of the products we build.
            </p>

            <p className="mt-12">
              If you're looking for a team to just write code, there are thousands of agencies out there. But if you're looking for a partner to engineer a product that will define your industry, we should talk.
            </p>

            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between font-sans">
              <div>
                <img src="/images/np-logo.png" alt="Signature" className="h-10 mb-4 opacity-50" />
                <p className="text-white font-bold text-xl">Vasantharaj S</p>
                <p className="text-neo-blue text-sm">CEO & Founder, Neo Perion</p>
              </div>
              <div className="text-right text-slate-500 text-sm">
                <p>Co-Founders:</p>
                <p>Adhi Ganesh K (COO)</p>
                <p>Tamilselvan (CTO)</p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

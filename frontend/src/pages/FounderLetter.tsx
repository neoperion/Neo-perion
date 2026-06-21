import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { LetterCTA } from "@/components/about/LetterCTA";
import { MobileGate, MobileShell } from "@/components/mobile";
import { motion } from 'framer-motion';

export default function FounderLetter() {
  const founderLetterSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Founder's Letter - Neo Perion",
    "description": "A letter from our CEO, Vasantharaj S, on why we built Neo Perion to focus on premium product engineering and AI-first solutions.",
    "mainEntity": {
      "@type": "CreativeWork",
      "author": {
        "@type": "Person",
        "name": "Vasantharaj S"
      },
      "headline": "Why we built Neo Perion.",
      "publisher": {
        "@type": "Organization",
        "name": "Neo Perion Solutions",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.neoperion.com/images/np-logo.png"
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const blockVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      } 
    }
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#FAFAFA] text-[#09090B] selection:bg-neo-blue/20">
        <SEO 
          title="Founder's Letter: Why We Built Neo Perion"
          description="Read a letter from our CEO, Vasantharaj S, on why we built Neo Perion and our shift from generic agencies to true product engineering."
          url="https://www.neoperion.com/company/founder-letter"
          jsonLd={founderLetterSchema}
        />

        <Header />

        <main className="relative pt-36 pb-24 overflow-hidden">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none opacity-40"></div>

          <motion.article 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto px-8 relative z-10"
          >
            <motion.header variants={blockVariants} className="mb-16 text-center">
              <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-6">Founder's Letter</p>
              <h1 className="text-4xl lg:text-6xl font-black text-[#09090B] leading-tight mb-8">
                Why we built Neo Perion.
              </h1>
              <div className="flex items-center justify-center gap-4">
                <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-12 h-12 rounded-full border border-zinc-200" />
                <div className="text-left">
                  <p className="text-[#09090B] font-semibold">Vasantharaj S</p>
                  <p className="text-sm text-slate-500">CEO & Founder</p>
                </div>
              </div>
            </motion.header>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="prose prose-zinc prose-lg md:prose-xl max-w-none text-slate-600 font-serif leading-relaxed"
            >
              <motion.p variants={blockVariants} className="first-letter:text-7xl first-letter:font-black first-letter:text-neo-blue first-letter:mr-3 first-letter:float-left">
                The technology industry is broken in a very specific way. Over the last decade, we watched countless companies pour millions of dollars into digital transformation initiatives, only to end up with fragmented tools, unscalable architectures, and massive technical debt.
              </motion.p>
              
              <motion.p variants={blockVariants}>
                Before starting Neo Perion, Adhi, Tamilselvan, and I spent years working in traditional agency environments and enterprise IT. We saw the same pattern repeat everywhere: agencies were incentivized to deliver projects quickly, ship the MVP, and move on. There was rarely any consideration for what happens at scale, under load, or when the business model pivots.
              </motion.p>

              <motion.h2 variants={blockVariants} className="text-[#09090B] font-sans font-bold text-2xl mt-12 mb-6">
                The shift to Product Engineering
              </motion.h2>
              
              <motion.p variants={blockVariants}>
                We realized that the traditional "software agency" model doesn't work for modern businesses. You don't need an agency that just writes code to specifications; you need a product engineering partner.
              </motion.p>

              <motion.p variants={blockVariants}>
                That realization was the genesis of Neo Perion. We built this company on a simple premise: <strong>Stability over hype, and engineering over outsourcing.</strong> We don't just build apps; we build intelligent, scalable ecosystems powered by AI.
              </motion.p>

              <motion.blockquote variants={blockVariants} className="border-l-4 border-neo-blue pl-6 my-10 italic text-[#09090B] bg-slate-50 py-6 pr-6 rounded-r-2xl">
                "We treat your product as our own. If an architecture won't scale to a million users, we won't recommend it. If a feature adds complexity without value, we'll push back."
              </motion.blockquote>

              <motion.h2 variants={blockVariants} className="text-[#09090B] font-sans font-bold text-2xl mt-12 mb-6">
                An AI-First Future
              </motion.h2>

              <motion.p variants={blockVariants}>
                We are currently in the middle of the largest platform shift since the internet itself. Artificial Intelligence is no longer just a feature; it is the foundation of modern software. We integrated AI-first thinking into our core engineering practices because we believe that software which isn't intelligent by default will be obsolete within five years.
              </motion.p>

              <motion.p variants={blockVariants}>
                But integrating AI shouldn't mean adding a fragile API wrapper. It requires robust data pipelines, secure enterprise architectures, and deeply integrated intelligence that actually solves user problems.
              </motion.p>

              <motion.p variants={blockVariants}>
                We built Neo Perion to be the partner we wished we had: technical, transparent, and deeply invested in the long-term success of the products we build.
              </motion.p>

              <motion.p variants={blockVariants} className="mt-12">
                If you're looking for a team to just write code, there are thousands of agencies out there. But if you're looking for a partner to engineer a product that will define your industry, we should talk.
              </motion.p>

              <motion.div variants={blockVariants}>
                <LetterCTA theme="light" />
              </motion.div>
              
              <motion.div variants={blockVariants} className="mt-16 pt-8 border-t border-zinc-200 flex items-center justify-between font-sans">
                <div>
                  <img src="/images/np-logo.png" alt="Signature" className="h-10 mb-4 opacity-70" />
                  <p className="text-[#09090B] font-bold text-xl">Vasantharaj S</p>
                  <p className="text-neo-blue text-sm">CEO & Founder, Neo Perion</p>
                </div>
                <div className="text-right text-slate-400 text-sm">
                  <p className="font-semibold text-slate-600">Co-Founders:</p>
                  <p>Adhi Ganesh K (COO)</p>
                  <p>Tamilselvan (CTO)</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.article>
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <div className="w-full pb-8">
          <main className="pt-8 pb-12 px-6">
            <header className="mb-10 text-left">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3">Founder's Letter</p>
              <h1 className="text-display-lg text-white tracking-tight leading-tight mb-6">
                Why we built Neo Perion.
              </h1>
              <div className="flex items-center gap-3">
                <img src="/images/founder.jpg" alt="Vasantharaj S" className="w-10 h-10 rounded-full border border-white/10" />
                <div>
                  <p className="text-white font-semibold text-sm">Vasantharaj S</p>
                  <p className="text-[11px] text-white/50">CEO & Founder</p>
                </div>
              </div>
            </header>

            <div className="prose prose-invert prose-p:text-[15px] prose-p:leading-relaxed text-white/70 font-serif">
              <p className="first-letter:text-5xl first-letter:font-black first-letter:text-neo-highlight first-letter:mr-2 first-letter:float-left">
                The technology industry is broken in a very specific way. Over the last decade, we watched countless companies pour millions of dollars into digital transformation initiatives, only to end up with fragmented tools, unscalable architectures, and massive technical debt.
              </p>
              <p>
                Before starting Neo Perion, Adhi, Tamilselvan, and I spent years working in traditional agency environments and enterprise IT. We saw the same pattern repeat everywhere: agencies were incentivized to deliver projects quickly, ship the MVP, and move on.
              </p>
              
              <h2 className="text-white font-sans font-bold text-xl mt-10 mb-4 tracking-tight">The shift to Product Engineering</h2>
              <p>
                We realized that the traditional "software agency" model doesn't work for modern businesses. You don't need an agency that just writes code to specifications; you need a product engineering partner.
              </p>
              <p>
                That realization was the genesis of Neo Perion. We built this company on a simple premise: <strong>Stability over hype, and engineering over outsourcing.</strong> We don't just build apps; we build intelligent, scalable ecosystems powered by AI.
              </p>
              
              <blockquote className="border-l-[3px] border-neo-highlight pl-4 my-8 italic text-white/90 text-[16px] font-serif">
                "We treat your product as our own. If an architecture won't scale to a million users, we won't recommend it. If a feature adds complexity without value, we'll push back."
              </blockquote>

              <h2 className="text-white font-sans font-bold text-xl mt-10 mb-4 tracking-tight">An AI-First Future</h2>
              <p>
                We are currently in the middle of the largest platform shift since the internet itself. Artificial Intelligence is no longer just a feature; it is the foundation of modern software. We integrated AI-first thinking into our core engineering practices because we believe that software which isn't intelligent by default will be obsolete within five years.
              </p>
              <p>
                We built Neo Perion to be the partner we wished we had: technical, transparent, and deeply invested in the long-term success of the products we build.
              </p>

              <div className="mt-8">
                <LetterCTA theme="dark" />
              </div>

              <div className="mt-12 pt-8 border-t border-white/[0.08] font-sans">
                <img src="/images/np-logo.png" alt="Signature" className="h-8 mb-4 opacity-40" />
                <p className="text-white font-bold text-[15px]">Vasantharaj S</p>
                <p className="text-neo-highlight text-[11px] font-semibold tracking-wider uppercase mt-1">CEO & Founder</p>
              </div>
            </div>
          </main>
        </div>
      </MobileShell>
    </MobileGate>
  );
}


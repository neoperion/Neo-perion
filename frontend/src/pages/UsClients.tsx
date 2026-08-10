import React, { useEffect } from 'react';
import { ArrowRight, CheckCircle2, Clock, FileCheck, Globe, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { SEO } from '@/components/SEO';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';
import { seoConfig } from '@/lib/seoConfig';
import { projectsData } from '@/data/projectsData';

const usClientsFaqs: FAQItem[] = [
  { question: 'Do you work with US-based startups and SMBs?', answer: 'Yes. We work with US-based startups, SMBs, and product teams. Daily overlap with US Eastern Time exceeds four hours, and we cover US Pacific Time by at least one focused hour. We invoice in USD when preferred and contract under US-friendly terms - NDA first, then a master services agreement and per-engagement statement of work.' },
  { question: 'How do time zones and communication work?', answer: 'Our team operates on India Standard Time (UTC+5:30) and reserves morning hours for US collaboration. Daily overlap with US Eastern exceeds four hours; with US Pacific, at least one focused hour. We use Slack or existing tools, send written end-of-day updates, and run weekly demo calls on a cadence that fits your team.' },
  { question: 'How is intellectual property handled?', answer: 'You own everything. IP - code, design assets, infrastructure-as-code, documentation, and production credentials - transfers to your company on final payment. The written agreement names this on day one, and we are happy to assign IP through standard US contracting templates.' },
  { question: 'What about contracting, NDAs, and invoicing?', answer: 'We sign your NDA first, before any technical conversation. Engagements run on a master services agreement with per-engagement statements of work. Invoicing is USD wire or ACH, Net-15 default, and we operate as a zero-rated export vendor - no US sales tax applies to our services.' },
  { question: 'How much does a US engagement cost?', answer: 'Engagements are scope-dependent. Most US pilots and AI integrations run 4-10 weeks; full enterprise platforms run 3-6 months. We share a written estimate - broken into milestone-level delivery gates - after a free 30-minute discovery call. You pay only for signed-off work, never for hours logged.' },
];

const facts = [
  { icon: Clock, title: '4+ hours daily US ET overlap', body: 'India Standard Time is UTC+5:30. Our morning block is dedicated to US collaboration - daily standups, demos, and Slack conversations. We adjust meeting windows for the East Coast first and stay flexible for the West Coast.' },
  { icon: FileCheck, title: 'NDA, then MSA, then SOW', body: 'Every US engagement starts with your NDA, signed before any technical conversation. We then sign a master services agreement and issue per-engagement statements of work that name scope, timeline, IP assignment, and acceptance gates. US contracting templates are welcome.' },
  { icon: Globe, title: 'USD invoicing, zero-rated export', body: 'We invoice in USD via wire or ACH, Net-15 default. As an India-based service vendor, our services are zero-rated for US sales tax purposes - no sales tax or VAT line on your invoice. We provide W-8BEN-E documentation and US-friendly remittance details on request.' },
  { icon: ShieldCheck, title: 'IP transfers on final payment', body: 'You own the code, infrastructure, design assets, documentation, and production credentials - and you do on day one of the agreement naming it. The transfer completes on final payment, with no holdbacks, no licensing traps, and no proprietary frameworks locked inside.' },
];

export default function UsClients() {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);
  const usProjects = projectsData.filter((p) => p.featured).slice(0, 3);

  const desktop = (
    <div className='bg-manuscript-parchment text-manuscript-ink min-h-screen flex flex-col'>
      <SEO
        {...seoConfig.forUsClients}
        jsonLd={[
          { '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${SITE_URL}/for-us-clients`, name: seoConfig.forUsClients.title, description: seoConfig.forUsClients.description, inLanguage: 'en-US', isPartOf: { '@type': 'WebSite', name: 'AINCURU', url: `${SITE_URL}/` } },
          { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }, { '@type': 'ListItem', position: 2, name: 'For US Clients', item: `${SITE_URL}/for-us-clients` } ] },
          buildFAQSchema(usClientsFaqs),
        ]}
      />
      <Header />
      <main className='flex-grow'>
        <section className='relative overflow-hidden border-b border-manuscript-walnut/15'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(168,74,40,0.10),transparent_60%)]' />
          <div className='relative z-10 mx-auto max-w-[1200px] px-8 pt-32 pb-24 md:pt-40 md:pb-28 lg:px-12'>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className='mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-manuscript-copper'>For US Clients</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className='font-manuscript font-black leading-[0.95] tracking-tight text-manuscript-ink' style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.25rem)' }}>
              AI &amp; Software Engineering,
              <br />
              <span className='text-manuscript-copper'>built for US time zones.</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.4 }} className='mt-8 max-w-2xl'>
              <p className='text-[16px] leading-[1.75] text-manuscript-inkSoft'>AINCURU is a founder-led AI and software team based in Chennai, India, working with US startups, SMBs, and product teams. Daily overlap with US Eastern Time exceeds four hours; we invoice in USD; we contract under NDA-first, US-friendly terms; and IP - code, infrastructure, design assets, documentation, and credentials - transfers to your company on final payment. We are not affiliated with Perion Network Ltd.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.55 }} className='mt-10 flex flex-wrap items-center gap-4'>
              <button onClick={() => navigate('/contact')} className='group inline-flex items-center gap-2 rounded-full bg-manuscript-copper px-7 py-3.5 text-[14px] font-bold text-manuscript-parchmentLight transition-all duration-200 hover:bg-manuscript-rustDeep'>Book a 30-min discovery call<ArrowRight size={15} className='transition-transform group-hover:translate-x-0.5' /></button>
              <button onClick={() => navigate('/company/case-studies')} className='text-[14px] font-semibold text-manuscript-inkSoft transition-colors hover:text-manuscript-ink'>See case studies</button>
            </motion.div>
          </div>
        </section>
        <section className='border-b border-manuscript-walnut/15 bg-manuscript-parchment px-8 py-20 lg:px-12'>
          <div className='mx-auto max-w-[1200px]'>
            <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>How we work with US clients</p>
            <h2 className='mb-12 max-w-2xl font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink'>Four things that stay constant on every engagement.</h2>
            <div className='grid grid-cols-1 gap-px bg-manuscript-walnut/15 md:grid-cols-2'>
              {facts.map((f) => { const Icon = f.icon; return (
                <div key={f.title} className='bg-manuscript-parchmentLight p-8'>
                  <div className='mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-manuscript-copper/10 border border-manuscript-copper/20'><Icon size={18} className='text-manuscript-copper' /></div>
                  <h3 className='mb-3 text-[1.15rem] font-bold text-manuscript-ink'>{f.title}</h3>
                  <p className='text-[14px] leading-[1.75] text-manuscript-inkSoft'>{f.body}</p>
                </div>
              ); })}
            </div>
          </div>
        </section>
        <section className='border-b border-manuscript-walnut/15 bg-manuscript-parchment px-8 py-20 lg:px-12'>
          <div className='mx-auto max-w-[1200px]'>
            <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>Engagement timeline</p>
            <h2 className='mb-12 max-w-2xl font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink'>From first call to signed code, in weeks.</h2>
            <ol className="grid gap-6 md:grid-cols-5">
              {[
                { step: "01", title: "Discovery", body: "A free 30-minute call. We listen, ask, and assess fit before any commitment." },
                { step: "02", title: "NDA + scoping", body: "Your NDA is signed first. We scope the work into a written estimate with named deliverables." },
                { step: "03", title: "MSA + SOW", body: "Master services agreement and a per-engagement SOW with timeline, IP terms, and acceptance gates." },
                { step: "04", title: "Build + weekly demos", body: "Senior engineers, weekly demos, formal UAT before launch, sign-off before invoice." },
                { step: "05", title: "Handoff", body: "Code, infrastructure, and credentials transfer to your team on final payment." },
              ].map((s) => (
                <li key={s.step} className="border-l border-manuscript-walnut/20 pl-5">
                  <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">{s.step}</p>
                  <h3 className="mb-2 text-[15px] font-bold text-manuscript-ink">{s.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-manuscript-inkSoft">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        {usProjects.length > 0 && (
          <section className='border-b border-manuscript-walnut/15 bg-manuscript-parchment px-8 py-20 lg:px-12'>
            <div className='mx-auto max-w-[1200px]'>
              <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>Selected work</p>
              <h2 className='mb-12 max-w-2xl font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink'>Recent platforms shipped.</h2>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
                {usProjects.map((p) => (
                  <button key={p.slug} onClick={() => navigate(`/portfolio/${p.slug}`)} className='group rounded-2xl border border-manuscript-walnut/15 bg-manuscript-parchmentLight p-6 text-left transition-all duration-200 hover:border-manuscript-copper/30 active:scale-[0.99]'>
                    <p className='mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-manuscript-copper/80'>{p.category}</p>
                    <h3 className='mb-3 text-[1.1rem] font-bold text-manuscript-ink group-hover:text-manuscript-copper transition-colors'>{p.title}</h3>
                    <p className='text-[13px] leading-[1.7] text-manuscript-inkSoft'>{p.overview}</p>
                    <div className='mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-manuscript-copper'>Read case study<ArrowRight size={13} className='transition-transform group-hover:translate-x-0.5' /></div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}
        <section className='border-b border-manuscript-walnut/15 bg-manuscript-parchment px-8 py-20 lg:px-12'>
          <div className='mx-auto max-w-[1200px]'>
            <div className='grid gap-12 md:grid-cols-[1fr_1.4fr]'>
              <div>
                <p className='mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>Why US teams hire us</p>
                <h2 className='font-manuscript text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight text-manuscript-ink'>The model US founders and product leaders keep coming back to.</h2>
                <p className='mt-5 text-[14px] leading-[1.75] text-manuscript-inkSoft'>We are not a staffing shop. We are a founder-led engineering team with named humans on every project. Every engagement starts with a written agreement, runs on weekly demos, and ends with full code and credentials transferring to your company.</p>
              </div>
              <ul className='grid gap-5 sm:grid-cols-2'>
                {[
                  'Senior engineers only - no offshoring, no juniors hidden behind account managers.',
                  'Written agreement before work. Milestone-level delivery gates with formal UAT.',
                  'USD invoicing, ACH or wire, Net-15 default. W-8BEN-E on request.',
                  'IP transfers to your company on final payment. No holdbacks, no licensing traps.',
                  'Daily overlap with US Eastern and Pacific time zones.',
                  'Production-grade delivery, not prototypes - built to scale after launch.'
                ].map((line) => (
                  <li key={line} className='flex items-start gap-3 text-[14px] leading-[1.7] text-manuscript-inkSoft'><CheckCircle2 size={16} className='mt-1 shrink-0 text-manuscript-copper' /><span>{line}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <FAQBlock items={usClientsFaqs} heading='US clients FAQ' eyebrow='FAQ' className="bg-manuscript-parchment [&_h2]:!text-manuscript-ink [&_h3]:!text-manuscript-ink [&_p]:!text-manuscript-inkSoft [&_div.divide-y]:!divide-manuscript-walnut/20 [&_div.border-y]:!border-manuscript-walnut/20 [&_span]:!text-manuscript-copper" />
        <section className='relative overflow-hidden bg-manuscript-parchmentWarm px-8 py-24'>
          <div
            className='pointer-events-none absolute inset-0 opacity-[0.06]'
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.5) 1px,transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className='relative z-10 mx-auto max-w-[900px] text-center'>
            <p className='mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper'>Ready when you are</p>
            <h2 className='mb-6 font-manuscript text-[clamp(2.2rem,4.6vw,3.8rem)] font-black leading-[1.05] tracking-tight text-manuscript-ink'>Let us talk about your build.</h2>
            <p className='mx-auto mb-10 max-w-xl text-[16px] leading-[1.8] text-manuscript-inkSoft'>A free 30-minute call with our product architects. No pitch - just honest advice about your project, your timeline, and the right way to engage.</p>
            <div className='flex flex-wrap items-center justify-center gap-4'>
              <button onClick={() => navigate('/contact')} className='group inline-flex items-center gap-2 rounded-full bg-manuscript-copper px-9 py-4 text-sm font-bold text-manuscript-parchmentLight transition-all hover:bg-manuscript-rustDeep'>Book a discovery call<ArrowRight size={16} className='transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' /></button>
              <button onClick={() => navigate('/services')} className='rounded-full border border-manuscript-ink bg-manuscript-parchmentLight px-9 py-4 text-sm font-bold text-manuscript-ink transition-colors hover:bg-manuscript-parchmentWarm shadow-sm'>See what we build</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
  const mobile = (
    <MobileShell nav='bottom' showFooter bgClass='bg-manuscript-parchment'>
      <div className='w-full bg-manuscript-parchment text-manuscript-ink pb-10'>
        <section className='relative overflow-hidden px-5 pt-24 pb-12 min-h-[55vh] flex items-start'>
          <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(168,74,40,0.12),transparent_60%)]' />
          <div className='relative z-10 w-full'>
            <p className='mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-manuscript-copper'>For US Clients</p>
            <h1 className='font-manuscript text-[2.2rem] font-black leading-[1.0] tracking-tight text-manuscript-ink'>AI &amp; Software Engineering,<br /><span className='text-manuscript-copper'>built for US time zones.</span></h1>
            <p className='mt-5 text-sm leading-relaxed text-manuscript-inkSoft'>AINCURU is a founder-led AI and software team based in Chennai, India, working with US startups, SMBs, and product teams. Daily overlap with US Eastern exceeds four hours. We invoice in USD, contract under NDA-first US-friendly terms, and transfer full IP to your company on final payment. Not affiliated with Perion Network Ltd.</p>
            <div className='mt-7 flex flex-col gap-3'>
              <button onClick={() => navigate('/contact')} className='w-full rounded-full bg-manuscript-copper py-4 text-sm font-bold text-manuscript-parchmentLight active:scale-[0.98] transition-all shadow-sm'>Book a 30-min discovery call</button>
              <button onClick={() => navigate('/company/case-studies')} className='w-full rounded-full border border-manuscript-ink py-4 text-sm font-bold text-manuscript-ink active:scale-[0.98] transition-all shadow-sm'>See case studies</button>
            </div>
          </div>
        </section>
        <section className='px-5 py-10 border-t border-manuscript-walnut/15'>
          <p className='mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>How we work with US clients</p>
          <h2 className='mb-6 font-manuscript text-xl font-bold text-manuscript-ink'>Four things that stay constant.</h2>
          <div className='space-y-5'>
            {facts.map((f) => { const Icon = f.icon; return (
              <div key={f.title} className='rounded-2xl border border-manuscript-walnut/15 bg-manuscript-parchmentLight p-5 shadow-[0_4px_16px_rgba(31,26,20,0.04)]'>
                <div className='mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-manuscript-copper/10 border border-manuscript-copper/20'><Icon size={16} className='text-manuscript-copper' /></div>
                <h3 className='mb-1.5 text-[14px] font-bold text-manuscript-ink'>{f.title}</h3>
                <p className='text-[12.5px] leading-[1.7] text-manuscript-inkSoft'>{f.body}</p>
              </div>
            ); })}
          </div>
        </section>
        <section className='px-5 py-10 border-t border-manuscript-walnut/15'>
          <p className='mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>Engagement timeline</p>
          <h2 className='mb-6 font-manuscript text-xl font-bold text-manuscript-ink'>From first call to signed code, in weeks.</h2>
          <ol className="space-y-5">
            {[
              { step: "01", title: "Discovery", body: "A free 30-minute call. We listen and assess fit before any commitment." },
              { step: "02", title: "NDA + scoping", body: "Your NDA is signed first. We scope into a written estimate with named deliverables." },
              { step: "03", title: "MSA + SOW", body: "Master services agreement and a per-engagement SOW with timeline and IP terms." },
              { step: "04", title: "Build + weekly demos", body: "Senior engineers, weekly demos, formal UAT before launch, sign-off before invoice." },
              { step: "05", title: "Handoff", body: "Code, infrastructure, and credentials transfer to your team on final payment." },
            ].map((s) => (
              <li key={s.step} className="border-l border-manuscript-walnut/20 pl-4">
                <p className="mb-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-manuscript-copper">{s.step}</p>
                <h3 className="mb-1 text-[14px] font-bold text-manuscript-ink">{s.title}</h3>
                <p className="text-[12.5px] leading-[1.7] text-manuscript-inkSoft">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>
        {usProjects.length > 0 && (
          <section className='px-5 py-10 border-t border-manuscript-walnut/15'>
            <p className='mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-manuscript-copper'>Selected work</p>
            <h2 className='mb-6 font-manuscript text-xl font-bold text-manuscript-ink'>Recent platforms shipped.</h2>
            <div className='space-y-4'>
              {usProjects.map((p) => (
                <button key={p.slug} onClick={() => navigate(`/portfolio/${p.slug}`)} className='w-full rounded-2xl border border-manuscript-walnut/15 bg-manuscript-parchmentLight p-5 text-left active:scale-[0.99] transition-all shadow-sm'>
                  <p className='mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-manuscript-copper/80'>{p.category}</p>
                  <h3 className='mb-2 text-[1rem] font-bold text-manuscript-ink'>{p.title}</h3>
                  <p className='text-[12.5px] leading-[1.7] text-manuscript-inkSoft'>{p.overview}</p>
                </button>
              ))}
            </div>
          </section>
        )}
        <FAQBlock items={usClientsFaqs} heading='US clients FAQ' eyebrow='FAQ' className='px-5 bg-manuscript-parchment [&_h2]:!text-manuscript-ink [&_h3]:!text-manuscript-ink [&_p]:!text-manuscript-inkSoft [&_div.divide-y]:!divide-manuscript-walnut/20 [&_div.border-y]:!border-manuscript-walnut/20 [&_span]:!text-manuscript-copper' />
      </div>
    </MobileShell>
  );
  return <MobileGate mobileOnly fallback={desktop}>{mobile}</MobileGate>;
}

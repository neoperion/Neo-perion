import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { FAQBlock, type FAQItem } from '@/components/shared/FAQBlock';
import { ServiceData } from '@/data/servicesData';
import { Workflow, ArrowRight, UserX, UserCheck, Calculator, DollarSign, Clock, LayoutDashboard, Send, Inbox, Database } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { TechStack, BusinessOutcomes, EnterpriseCTA, FooterTransition } from '@/components/services/shared';
import { useNavigate } from 'react-router-dom';
import { AnimatedNumber } from '@/components/ui/AnimatedNumber';
import { SITE_URL, buildFAQSchema } from '@/lib/seo';

interface Props {
  service: ServiceData;
}

const intelligentOpsFaqs: FAQItem[] = [
  {
    question: 'What kinds of operations do you automate?',
    answer:
      'Anything that is repetitive, rules-driven, and high-volume: lead routing, invoice processing, customer onboarding, compliance reporting, internal Q&A over company docs, deployment pipelines, and incident triage. We assess the candidate process together before committing to an automation so we are honest about whether it will pay back.',
  },
  {
    question: 'How do you measure whether automation actually paid off?',
    answer:
      'Baseline first. We measure the time, error rate, and cost of the manual process before any code is written, then compare against the same metrics six weeks after go-live. The ROI case (or its absence) is in writing — no hidden assumptions.',
  },
  {
    question: 'How does CI/CD get set up?',
    answer:
      'GitHub Actions or GitLab CI for builds, automated tests on every pull request, container images published to ECR / GCR / ACR, and progressive rollouts to production with automated rollback if error budgets trip. We wire observability from day one — logs, metrics, traces — so on-call is calm, not chaotic.',
  },
];

export function IntelligentOpsPage({ service }: Props) {
  const navigate = useNavigate();
  
  // ROI Calculator State
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(40);

  const calculateROI = () => {
    // Assumptions: Automation saves 80% of manual hours
    const totalManualHoursPerYear = teamSize * hoursPerWeek * 52;
    const totalManualCostPerYear = totalManualHoursPerYear * hourlyRate;
    
    const hoursSavedPerYear = Math.floor(totalManualHoursPerYear * 0.8);
    const costSavedPerYear = Math.floor(totalManualCostPerYear * 0.8);
    
    return { hoursSavedPerYear, costSavedPerYear };
  };

  const { hoursSavedPerYear, costSavedPerYear } = calculateROI();

  return (
    <MobileGate mobileOnly fallback={
      <div className="bg-neutral-900 text-white min-h-[auto] flex flex-col">
        <SEO
          title={`${service.title} | Neo Perion Solutions`}
          description={service.description}
          url={`${SITE_URL}/services/${service.slug}`}
          keywords="intelligent operations automation, business process automation, CI/CD, Kubernetes, DevOps, workflow automation"
          jsonLd={[
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "serviceType": service.title,
              "description": service.description,
              "provider": {
                "@type": "LocalBusiness",
                "name": "Neo Perion Solutions",
                "image": `${SITE_URL}/images/np-logo.png`,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Chennai",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                }
              },
              "areaServed": [
                { "@type": "Country", "name": "India" },
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Global" }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
              ]
            },
            buildFAQSchema(intelligentOpsFaqs)
          ]}
        />
        <Header />
        
        <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-neutral-800">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
                {service.tagline}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-xl text-neutral-400 mb-8 leading-relaxed font-medium">
                {service.heroSubtext}
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-neo-blue transition-colors duration-300"
              >
                {service.ctaText}
              </button>
            </div>

            {/* Before/After Workflow Visual */}
            <div className="relative premium-card p-8 bg-neutral-900 border border-neutral-800 shadow-xl overflow-hidden min-h-[420px] flex flex-col justify-center">
              
              {/* Split layout: Before vs After */}
              <div className="absolute inset-y-0 left-0 w-1/2 bg-red-50 border-r border-neutral-800 flex flex-col justify-between p-6 opacity-70">
                 <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest text-center">Before</h3>
              </div>
              <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-50 flex flex-col justify-between p-6 opacity-70">
                 <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-widest text-center">After</h3>
              </div>

              <div className="relative z-10 flex flex-col gap-8 mt-10">
                
                {/* Row 1 */}
                <div className="flex items-center justify-between">
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-red-200 shadow-sm">
                    <UserX className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-400 truncate">Manual data entry</span>
                  </div>
                  <ArrowRight className="text-slate-300" />
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                    <Database className="text-emerald-500 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-200 truncate">Auto-ingestion</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between">
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-red-200 shadow-sm">
                    <Inbox className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-400 truncate">Email coordination</span>
                  </div>
                  <ArrowRight className="text-slate-300" />
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                    <Send className="text-emerald-500 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-200 truncate">Webhook triggers</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between">
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-red-200 shadow-sm">
                    <FileText className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-400 truncate">Weekly reports</span>
                  </div>
                  <ArrowRight className="text-slate-300" />
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                    <LayoutDashboard className="text-emerald-500 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-200 truncate">Live dashboards</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between">
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-red-200 shadow-sm">
                    <UserX className="text-red-400 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-400 truncate">Human routing</span>
                  </div>
                  <ArrowRight className="text-slate-300" />
                  <div className="w-[45%] flex items-center gap-3 bg-neutral-900 p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                    <UserCheck className="text-emerald-500 shrink-0" size={18} />
                    <span className="text-sm font-medium text-neutral-200 truncate">AI classification</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">Automation ROI Calculator</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Manual tasks don't just waste time—they crush margins and demoralize your best talent. Enter your current metrics to see how much intelligent automation could save your organization annually.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neo-blue/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-neo-blue" size={14} /></div>
                  <span className="text-slate-300">Eliminate copy-paste errors and data silos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-neo-blue/20 flex items-center justify-center shrink-0 mt-0.5"><Check className="text-neo-blue" size={14} /></div>
                  <span className="text-slate-300">Free your team to focus on strategic, high-value work.</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-neo-blue rounded-xl flex items-center justify-center">
                  <Calculator className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-bold">Calculate Savings</h3>
              </div>

              <div className="space-y-8 mb-10">
                {/* Input 1 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-400">Team Size (People)</label>
                    <span className="font-bold text-white">{teamSize}</span>
                  </div>
                  <input 
                    type="range" min="1" max="100" value={teamSize} 
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full accent-neo-blue h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    aria-label="Team size slider"
                    aria-valuemin={1}
                    aria-valuemax={100}
                    aria-valuenow={teamSize}
                  />
                </div>

                {/* Input 2 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-400">Manual Hours Per Person / Week</label>
                    <span className="font-bold text-white">{hoursPerWeek}h</span>
                  </div>
                  <input 
                    type="range" min="1" max="40" value={hoursPerWeek} 
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full accent-neo-blue h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    aria-label="Manual hours per week slider"
                    aria-valuemin={1}
                    aria-valuemax={40}
                    aria-valuenow={hoursPerWeek}
                  />
                </div>

                {/* Input 3 */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold text-slate-400">Average Hourly Rate ($)</label>
                    <span className="font-bold text-white">${hourlyRate}</span>
                  </div>
                  <input 
                    type="range" min="15" max="150" value={hourlyRate} step="5"
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full accent-neo-blue h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    aria-label="Average hourly rate slider"
                    aria-valuemin={15}
                    aria-valuemax={150}
                    aria-valuenow={hourlyRate}
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
                <p className="text-xs font-bold tracking-widest text-neutral-400 uppercase mb-4 text-center">Estimated Annual Savings</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800 rounded-xl border border-slate-700">
                    <Clock className="text-emerald-400 mx-auto mb-2" size={24} />
                    <div className="text-2xl font-black text-white">
                      <AnimatedNumber value={hoursSavedPerYear} />
                    </div>
                    <div className="text-xs text-slate-400">Hours Saved</div>
                  </div>
                  <div className="text-center p-4 bg-neo-blue/10 rounded-xl border border-neo-blue/30">
                    <DollarSign className="text-neo-blue mx-auto mb-2" size={24} />
                    <div className="text-2xl font-black text-neo-blue">
                      <AnimatedNumber value={costSavedPerYear} formatter={(val) => `$${val.toLocaleString()}`} />
                    </div>
                    <div className="text-xs text-slate-400">Cost Reduced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Grid */}
        <section className="py-24 px-6 lg:px-12 bg-neutral-900 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Automation Capabilities</h2>
              <p className="text-lg text-neutral-400 max-w-2xl">{service.overview}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {service.features.map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center mb-6">
                    <Workflow className="text-neo-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TechStack />
        <BusinessOutcomes />
        <FAQBlock items={intelligentOpsFaqs} heading={`${service.title}: FAQ`} />
        <EnterpriseCTA />
        <FooterTransition />
        </main>

        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter bgClass="bg-[#030B1D]">
        {/* Hero */}
        <section className="pt-24 pb-12 px-6 relative overflow-hidden bg-[#02040A]">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent" />
          <div className="absolute -top-[20%] -right-[10%] w-[120%] h-[60%] blur-[100px] rounded-full pointer-events-none opacity-20" style={{ backgroundColor: service.color }} />
          
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: service.color }}>
            {service.tagline}
          </p>
          <h1 className="text-display-lg text-white tracking-tight mb-4">{service.heroHeadline}</h1>
          <p className="text-base text-white/70 mb-8">{service.heroSubtext}</p>
          
          <button 
            onClick={() => navigate('/contact')}
            className="w-full h-12 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2 relative overflow-hidden border border-white/10 active:scale-[0.98] transition-transform"
          >
            <div className="absolute inset-0 opacity-20" style={{ backgroundColor: service.color }} />
            <span className="relative z-10 flex items-center gap-2">{service.ctaText} <ArrowRight size={16} /></span>
          </button>
        </section>

        {/* Before/After Visual (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 uppercase">Workflow Transformation</p>
          
          <div className="relative rounded-3xl overflow-hidden bg-[#02040A] border border-white/10">
            {/* Split Backgrounds */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-red-500/5 border-b border-white/5 flex items-start justify-center pt-2">
              <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest opacity-60">Before</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-emerald-500/5 flex items-end justify-center pb-2">
              <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest opacity-60">After</span>
            </div>

            <div className="relative z-10 p-4 space-y-3 mt-6 mb-6">
              {[
                { labelBefore: 'Manual Entry', labelAfter: 'Auto-Ingestion', iconBefore: UserX, iconAfter: Database },
                { labelBefore: 'Email Coords', labelAfter: 'Webhook Triggers', iconBefore: Inbox, iconAfter: Send },
                { labelBefore: 'Weekly Reports', labelAfter: 'Live Dashboards', iconBefore: FileText, iconAfter: LayoutDashboard }
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex-1 flex items-center gap-2 bg-white/[0.03] p-2 rounded-lg border border-red-500/20 backdrop-blur-sm">
                    <row.iconBefore className="text-red-400 shrink-0" size={14} />
                    <span className="text-[10px] font-medium text-white/70 truncate">{row.labelBefore}</span>
                  </div>
                  <ArrowRight className="text-white/20 shrink-0" size={14} />
                  <div className="flex-1 flex items-center gap-2 bg-white/[0.03] p-2 rounded-lg border border-emerald-500/30 backdrop-blur-sm border-l-2 border-l-emerald-500">
                    <row.iconAfter className="text-emerald-400 shrink-0" size={14} />
                    <span className="text-[10px] font-medium text-white truncate">{row.labelAfter}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator (Mobile) */}
        <section className="px-6 py-10 bg-[#02040A] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-2">ROI Calculator</h2>
          <p className="text-[13px] text-white/60 mb-8">Calculate how much intelligent automation could save your organization annually.</p>

          <div className="bg-white/[0.02] border border-white/[0.08] rounded-3xl p-5 backdrop-blur-glass-1">
            <div className="space-y-6 mb-8">
              {/* Input 1 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[11px] font-bold text-white/60">Team Size</label>
                  <span className="font-bold text-white text-[13px]">{teamSize}</span>
                </div>
                <input 
                  type="range" min="1" max="100" value={teamSize} 
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-neo-blue h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: service.color }}
                  aria-label="Team size slider"
                  aria-valuemin={1}
                  aria-valuemax={100}
                  aria-valuenow={teamSize}
                />
              </div>

              {/* Input 2 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[11px] font-bold text-white/60">Manual Hours / Wk</label>
                  <span className="font-bold text-white text-[13px]">{hoursPerWeek}h</span>
                </div>
                <input 
                  type="range" min="1" max="40" value={hoursPerWeek} 
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: service.color }}
                  aria-label="Manual hours per week slider"
                  aria-valuemin={1}
                  aria-valuemax={40}
                  aria-valuenow={hoursPerWeek}
                />
              </div>

              {/* Input 3 */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-[11px] font-bold text-white/60">Hourly Rate</label>
                  <span className="font-bold text-white text-[13px]">${hourlyRate}</span>
                </div>
                <input 
                  type="range" min="15" max="150" value={hourlyRate} step="5"
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: service.color }}
                  aria-label="Average hourly rate slider"
                  aria-valuemin={15}
                  aria-valuemax={150}
                  aria-valuenow={hourlyRate}
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-[#02040A] rounded-2xl p-4 border border-white/10">
              <p className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mb-3 text-center">Annual Savings</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-white/[0.02] rounded-xl border border-white/5">
                  <Clock className="text-emerald-400 mx-auto mb-1.5" size={16} />
                  <div className="text-lg font-black text-white">
                    <AnimatedNumber value={hoursSavedPerYear} />
                  </div>
                  <div className="text-[9px] text-white/40 uppercase tracking-wider">Hours</div>
                </div>
                <div className="text-center p-3 rounded-xl border" style={{ backgroundColor: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.2)' }}>
                  <DollarSign className="mx-auto mb-1.5" size={16} style={{ color: service.color }} />
                  <div className="text-lg font-black" style={{ color: service.color }}>
                    <AnimatedNumber value={costSavedPerYear} formatter={(val) => `$${val.toLocaleString()}`} />
                  </div>
                  <div className="text-[9px] text-white/40 uppercase tracking-wider">Saved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Grid (Mobile) */}
        <section className="px-6 py-10 bg-[#030B1D] border-t border-white/[0.08]">
          <h2 className="text-lg font-bold text-white mb-6">Capabilities</h2>
          <div className="space-y-3">
            {service.features.map((feature, i) => (
              <div key={i} className="p-5 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-glass-1">
                <div className="flex items-start gap-3">
                  <Workflow size={20} style={{ color: service.color }} className="shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-[13px] text-white/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <TechStack />
        <BusinessOutcomes />
        <EnterpriseCTA />
        <FooterTransition />
      </MobileShell>
    </MobileGate>
  );
}

// Add missing Check, FileText import for the above (since I used them without importing)
function FileText(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
}

function Check(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>;
}


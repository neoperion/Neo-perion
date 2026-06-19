import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ServiceData } from '@/data/servicesData';
import { Workflow, ArrowRight, UserX, UserCheck, Calculator, DollarSign, Clock, LayoutDashboard, Send, Inbox, Database } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  service: ServiceData;
}

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
    <div className="bg-slate-50 text-slate-900 min-h-screen flex flex-col">
      <SEO 
        title={`${service.title} | Neo Perion Solutions`}
        description={service.description}
      />
      <Header />
      
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
              {service.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
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
          <div className="relative premium-card p-8 bg-white border border-slate-200 shadow-xl overflow-hidden min-h-[420px] flex flex-col justify-center">
            
            {/* Split layout: Before vs After */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-red-50 border-r border-slate-200 flex flex-col justify-between p-6 opacity-70">
               <h3 className="text-sm font-bold text-red-400 uppercase tracking-widest text-center">Before</h3>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-emerald-50 flex flex-col justify-between p-6 opacity-70">
               <h3 className="text-sm font-bold text-emerald-500 uppercase tracking-widest text-center">After</h3>
            </div>

            <div className="relative z-10 flex flex-col gap-8 mt-10">
              
              {/* Row 1 */}
              <div className="flex items-center justify-between">
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-red-200 shadow-sm">
                  <UserX className="text-red-400 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-600 truncate">Manual data entry</span>
                </div>
                <ArrowRight className="text-slate-300" />
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                  <Database className="text-emerald-500 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-800 truncate">Auto-ingestion</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex items-center justify-between">
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-red-200 shadow-sm">
                  <Inbox className="text-red-400 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-600 truncate">Email coordination</span>
                </div>
                <ArrowRight className="text-slate-300" />
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                  <Send className="text-emerald-500 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-800 truncate">Webhook triggers</span>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex items-center justify-between">
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-red-200 shadow-sm">
                  <FileText className="text-red-400 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-600 truncate">Weekly reports</span>
                </div>
                <ArrowRight className="text-slate-300" />
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                  <LayoutDashboard className="text-emerald-500 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-800 truncate">Live dashboards</span>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex items-center justify-between">
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-red-200 shadow-sm">
                  <UserX className="text-red-400 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-600 truncate">Human routing</span>
                </div>
                <ArrowRight className="text-slate-300" />
                <div className="w-[45%] flex items-center gap-3 bg-white p-3 rounded border border-emerald-200 shadow-sm border-l-4 border-l-emerald-400">
                  <UserCheck className="text-emerald-500 shrink-0" size={18} />
                  <span className="text-sm font-medium text-slate-800 truncate">AI classification</span>
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
                />
              </div>
            </div>

            {/* Results */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
              <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-4 text-center">Estimated Annual Savings</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-800 rounded-xl border border-slate-700">
                  <Clock className="text-emerald-400 mx-auto mb-2" size={24} />
                  <div className="text-2xl font-black text-white">{hoursSavedPerYear.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Hours Saved</div>
                </div>
                <div className="text-center p-4 bg-neo-blue/10 rounded-xl border border-neo-blue/30">
                  <DollarSign className="text-neo-blue mx-auto mb-2" size={24} />
                  <div className="text-2xl font-black text-neo-blue">${costSavedPerYear.toLocaleString()}</div>
                  <div className="text-xs text-slate-400">Cost Reduced</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Automation Capabilities</h2>
            <p className="text-lg text-slate-600 max-w-2xl">{service.overview}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-neo-blue/30 hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Workflow className="text-neo-blue" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      </main>

      <Footer />
    </div>
  );
}

// Add missing Check, FileText import for the above (since I used them without importing)
function FileText(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>;
}

function Check(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><polyline points="20 6 9 17 4 12"/></svg>;
}

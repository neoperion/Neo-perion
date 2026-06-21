import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';

export default function TechnologyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const renderContent = () => (
    <section className="max-w-4xl mx-auto px-8">
       <button onClick={() => navigate('/technologies')} className="flex items-center gap-2 text-slate-400 hover:text-neo-blue mb-12">
         <ArrowLeft size={16} /> Back to Tech Stack
       </button>
       <h1 className="text-5xl font-black mb-6 capitalize">{slug?.replace('-', ' ')} Engineering</h1>
       <p className="text-xl text-slate-400 mb-12 leading-relaxed">
         We leverage the best tools in the {slug?.replace('-', ' ')} ecosystem to deliver highly performant, secure, and scalable solutions tailored to your business needs.
       </p>
       
       <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
         <h2 className="text-2xl font-bold mb-6">Why we use this stack</h2>
         <ul className="space-y-4 text-slate-300">
           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2 shrink-0"/> Enterprise-grade reliability and security.</li>
           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2 shrink-0"/> Massive open-source community support.</li>
           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2 shrink-0"/> Superior developer experience and rapid prototyping capabilities.</li>
           <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2 shrink-0"/> Proven horizontal scalability under heavy load.</li>
         </ul>
       </div>
    </section>
  );

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet><title>{slug} Technology | Neo Perion</title></Helmet>
        <Header />
        <main className="pt-32 pb-24">
          {renderContent()}
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <Helmet><title>{slug} Technology | Neo Perion</title></Helmet>
        <div className="pt-12 pb-12 px-2">
          {renderContent()}
        </div>
      </MobileShell>
    </MobileGate>
  );
}

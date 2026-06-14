import React from 'react';
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
}
import React from 'react';

const milestones = [
  {
    year: "2024",
    title: "Founded in Tamil Nadu, India",
    description: "Established with a vision for enterprise product engineering. Partnered with One Football Academy, Chennai as our inaugural client."
  },
  {
    year: "2024",
    title: "First AI Deployment",
    description: "Successfully architected and shipped an Energy Management System powered by predictive analytics."
  },
  {
    year: "2025",
    title: "Enterprise SaaS Launch",
    description: "Developed and launched the comprehensive Dr. D.P. Sudhagar e-commerce and logistics platform."
  },
  {
    year: "2025",
    title: "Product Engineering Focus",
    description: "Led the end-to-end development of the FUNNOVA EdTech platform, scaling it for concurrent classroom use."
  },
  {
    year: "2026",
    title: "AI-First Engineering Company",
    description: "Architecting the Lexzify travel intelligence ecosystem with deeply integrated LLMs and knowledge graphs."
  },
  {
    year: "Future",
    title: "Global Expansion",
    description: "Targeting 50+ active enterprise clients globally, pushing the boundaries of AI agentic workflows."
  }
];

export function AboutTimeline() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-b border-[#E4E4E7]/60">
      <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
        <div className="mb-16">
          <p className="text-[12px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">Our Journey</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-[#09090B] tracking-tight">
            How we got here
          </h2>
        </div>

        <div className="relative pl-6 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#E4E4E7] -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                {/* Center Node */}
                <div className="absolute left-[27px] md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-neo-blue -translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="bg-white border-[0.5px] border-[#E4E4E7] rounded-xl p-8 hover:border-[#A1A1AA] hover:-translate-y-0.5 transition-all duration-150 ease-out shadow-sm">
                    <span className="text-neo-blue font-bold tracking-widest text-sm mb-2 block">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-[#09090B] mb-3">{milestone.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

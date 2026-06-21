import React from 'react';

interface TechStackProps {
  technologies?: string[];
}

const DEFAULT_TECH = [
  'OpenAI',
  'Anthropic',
  'LangChain',
  'LlamaIndex',
  'Pinecone',
  'AWS',
  'Azure',
  'Google Cloud'
];

export const TechStack: React.FC<TechStackProps> = ({ technologies = DEFAULT_TECH }) => {
  return (
    <section className="py-16 md:py-20 lg:py-[120px] px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-neo-blue/40 transition-all duration-300 group cursor-default"
            >
              <span className="font-bold text-slate-700 group-hover:text-neo-blue transition-colors">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

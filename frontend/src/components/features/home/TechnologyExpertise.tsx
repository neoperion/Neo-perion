import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Code, Database, Workflow } from 'lucide-react';

const categories = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: <Brain className="w-4 h-4" />,
    items: ['Generative AI', 'AI Agents', 'Agentic Workflows', 'AI Copilots']
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI Systems',
    icon: <Cpu className="w-4 h-4" />,
    items: ['RAG', 'MCP', 'Knowledge Retrieval', 'Multi-Agent Systems']
  },
  {
    id: 'product',
    title: 'Product Engineering',
    icon: <Code className="w-4 h-4" />,
    items: ['SaaS Platforms', 'Enterprise Software', 'Web Applications', 'Mobile Applications']
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: <Database className="w-4 h-4" />,
    items: ['BI Dashboards', 'Data Visualization', 'Predictive Analytics']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: <Workflow className="w-4 h-4" />,
    items: ['CRM', 'ERP', 'Workflow Automation']
  }
];

export const TechnologyExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section className="py-24 relative bg-[#FAFAFA] border-b border-[#E4E4E7]/60 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1200px]">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-blue mb-4">
            Our Tech Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-[#09090B] mb-6 tracking-tight">
            Technology Expertise
          </h2>
          <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
            We utilize the most advanced frameworks and architectures to ensure your product is scalable, secure, and future-proof.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Sidebar / Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left whitespace-nowrap lg:whitespace-normal border transition-all duration-200 ${
                  activeCategory === cat.id 
                    ? 'bg-neo-blue/5 border-l-4 border-neo-blue border-y-[#E4E4E7] border-r-[#E4E4E7] text-neo-blue font-bold' 
                    : 'bg-white border-[#E4E4E7] border-l-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold shadow-sm'
                }`}
              >
                <span className={activeCategory === cat.id ? 'text-neo-blue' : 'text-slate-400'}>
                  {cat.icon}
                </span>
                <span className="text-sm">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white border border-[#E4E4E7] rounded-xl p-8 min-h-[300px] flex items-center shadow-sm">
            <AnimatePresence mode="wait">
              {categories.map((cat) => (
                cat.id === activeCategory && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <h3 className="text-xl font-bold text-[#09090B] mb-6 border-b border-slate-100 pb-3 flex items-center gap-3">
                      <span className="text-neo-blue">{cat.icon}</span> {cat.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="bg-slate-50/50 border border-[#E4E4E7] p-4 rounded-xl flex items-center gap-3 hover:border-slate-400 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-neo-blue shadow-[0_0_8px_rgba(37,99,255,0.6)]" />
                          <span className="text-slate-700 text-sm font-semibold">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

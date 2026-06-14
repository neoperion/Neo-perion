import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Cpu, Code, Database, Workflow } from 'lucide-react';

const categories = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    icon: <Brain className="w-5 h-5" />,
    items: ['Generative AI', 'AI Agents', 'Agentic Workflows', 'AI Copilots']
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI Systems',
    icon: <Cpu className="w-5 h-5" />,
    items: ['RAG', 'MCP', 'Knowledge Retrieval', 'Multi-Agent Systems']
  },
  {
    id: 'product',
    title: 'Product Engineering',
    icon: <Code className="w-5 h-5" />,
    items: ['SaaS Platforms', 'Enterprise Software', 'Web Applications', 'Mobile Applications']
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: <Database className="w-5 h-5" />,
    items: ['BI Dashboards', 'Data Visualization', 'Predictive Analytics']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: <Workflow className="w-5 h-5" />,
    items: ['CRM', 'ERP', 'Workflow Automation']
  }
];

export const TechnologyExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Technology Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            We utilize the most advanced frameworks and architectures to ensure your product is scalable, secure, and future-proof.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Sidebar / Tabs */}
          <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 lg:w-1/3 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                  activeCategory === cat.id 
                    ? 'bg-cyan-500/10 border-l-4 border-cyan-500 text-cyan-400' 
                    : 'bg-white/5 border-l-4 border-transparent text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat.icon}
                <span className="font-semibold">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-slate-900/40 border border-white/10 rounded-3xl p-8 backdrop-blur-md min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              {categories.map((cat) => (
                cat.id === activeCategory && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 flex items-center gap-3">
                      {cat.icon} {cat.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-[#050816] border border-white/5 p-4 rounded-xl flex items-center gap-3 shadow-inner hover:border-cyan-500/30 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                          <span className="text-slate-300 font-medium">{item}</span>
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

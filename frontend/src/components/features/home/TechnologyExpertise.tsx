import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu, Code, Database, Workflow } from "lucide-react";

import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";

const categories = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: <Brain className="h-4 w-4" strokeWidth={1.75} />,
    items: ["Generative AI", "AI Agents", "Agentic Workflows", "AI Copilots"],
  },
  {
    id: "advanced-ai",
    title: "Advanced AI Systems",
    icon: <Cpu className="h-4 w-4" strokeWidth={1.75} />,
    items: ["RAG", "MCP", "Knowledge Retrieval", "Multi-Agent Systems"],
  },
  {
    id: "product",
    title: "Product Engineering",
    icon: <Code className="h-4 w-4" strokeWidth={1.75} />,
    items: ["SaaS Platforms", "Enterprise Software", "Web Applications", "Mobile Applications"],
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <Database className="h-4 w-4" strokeWidth={1.75} />,
    items: ["BI Dashboards", "Data Visualization", "Predictive Analytics"],
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: <Workflow className="h-4 w-4" strokeWidth={1.75} />,
    items: ["CRM", "ERP", "Workflow Automation"],
  },
];

export const TechnologyExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <Section bg="paper" rhythm="supporting" divider className="overflow-hidden">
      <SectionHeading
        align="center"
        title="Technology expertise"
        lead="We use advanced frameworks and architectures to keep your product scalable, secure, and future-proof."
        className="mx-auto mb-14 max-w-3xl"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row">
        {/* Tabs */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-4 scrollbar-hide lg:w-1/3 lg:flex-col lg:pb-0">
          {categories.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 whitespace-nowrap rounded-[12px] border px-5 py-4 text-left transition-colors duration-200 lg:whitespace-normal ${
                  active
                    ? "border-l-4 border-brand border-y-hairline border-r-hairline bg-brand-tint font-bold text-brand"
                    : "border-l-transparent border-hairline bg-paper font-semibold text-muted2 hover:bg-canvas hover:text-ink"
                }`}
              >
                <span className={active ? "text-brand" : "text-faint"}>{cat.icon}</span>
                <span className="text-sm">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex min-h-[300px] flex-1 items-center rounded-[16px] border border-hairline bg-canvas p-8">
          <AnimatePresence mode="wait">
            {categories.map(
              (cat) =>
                cat.id === activeCategory && (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    <h3 className="mb-6 flex items-center gap-3 border-b border-hairline pb-3 text-xl font-bold text-ink">
                      <span className="text-brand">{cat.icon}</span> {cat.title}
                    </h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {cat.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 rounded-[12px] border border-hairline bg-paper p-4 transition-colors hover:border-faint"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                          <span className="text-sm font-semibold text-body">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

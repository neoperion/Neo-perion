import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { Terminal, Shield, Workflow, Plus, Minus } from 'lucide-react';

const principles = [
  {
    id: 'stability',
    title: 'Stability over hype.',
    icon: Shield,
    content: 'We don\'t chase the latest trendy framework unless it provides a tangible, measurable benefit. Boring technology scaling to millions of users is always better than exciting technology crashing in production.'
  },
  {
    id: 'system',
    title: 'Think in systems.',
    icon: Workflow,
    content: 'A feature is just a temporary state. A system is a permanent capability. We engineer platforms that can evolve, with clear boundaries, decoupling, and strict data contracts.'
  },
  {
    id: 'ai-first',
    title: 'AI is a foundation, not a feature.',
    icon: Terminal,
    content: 'Adding a chat interface to a legacy app isn\'t AI integration. True AI-first engineering means rethinking the data pipeline, the user flow, and the backend architecture to leverage intelligence natively.'
  }
];

export function MobileEngineeringPrinciples() {
  return (
    <section className="bg-[#020617] py-16 px-mobile-base">
      <div className="mb-10">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3 text-center">Our Philosophy</p>
        <h2 className="text-display-md text-white tracking-tight text-center">Engineering Principles.</h2>
      </div>

      <Accordion.Root type="single" collapsible defaultValue="stability" className="space-y-3">
        {principles.map((principle) => (
          <Accordion.Item 
            key={principle.id} 
            value={principle.id}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden data-[state=open]:bg-white/[0.04] transition-colors"
          >
            <Accordion.Header>
              <Accordion.Trigger className="w-full flex items-center justify-between p-4 group">
                <div className="flex items-center gap-4">
                  <div className="shrink-0 h-10 w-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/70 group-data-[state=open]:bg-neo-blue/20 group-data-[state=open]:text-neo-highlight transition-colors">
                    <principle.icon size={18} />
                  </div>
                  <span className="text-[15px] font-bold text-white text-left">{principle.title}</span>
                </div>
                <div className="shrink-0 h-8 w-8 rounded-full bg-white/[0.05] flex items-center justify-center text-white/50 group-data-[state=open]:bg-neo-blue/20 group-data-[state=open]:text-neo-highlight transition-colors">
                  <Plus size={16} className="group-data-[state=open]:hidden" />
                  <Minus size={16} className="hidden group-data-[state=open]:block" />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-[14px] text-white/60 leading-relaxed px-4 pb-5 pt-1 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pl-14">
                {principle.content}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}

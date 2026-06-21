import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { Shield, BarChart3, Minimize2, Target, Plus, Minus } from 'lucide-react';

const principles = [
  {
    id: 'scale',
    title: 'Build for Scale',
    icon: Shield,
    content: "If it can't handle 10x traffic, we won't ship it. We build robust systems designed for high availability."
  },
  {
    id: 'measure',
    title: 'Measure Everything',
    icon: BarChart3,
    content: "Data over intuition. We instrument from day one, ensuring every decision is backed by analytics."
  },
  {
    id: 'complexity',
    title: 'Avoid Complexity',
    icon: Minimize2,
    content: "Simple systems last longer than clever ones. We aggressively cut unnecessary technical debt."
  },
  {
    id: 'outcomes',
    title: 'Own Outcomes',
    icon: Target,
    content: "We succeed when your product succeeds. We act as your true technical partners, not just vendors."
  }
];

export function MobileEngineeringPrinciples() {
  return (
    <section className="bg-[#020617] py-16 px-mobile-base">
      <div className="mb-10">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-neo-highlight mb-3 text-center">Our Philosophy</p>
        <h2 className="text-display-md text-white tracking-tight text-center">Engineering Principles.</h2>
      </div>

      <Accordion.Root type="single" collapsible defaultValue="scale" className="space-y-3">
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

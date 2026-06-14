const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../frontend/src/components/newsletter');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const files = {
  'NewsletterHero.tsx': `import React from 'react';
import FloatingLines from '@/components/FloatingLines';

export function NewsletterHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-[#02040A]">
      <div className="absolute inset-0 w-full h-full opacity-15 pointer-events-auto">
        <FloatingLines
          linesGradient={['#15b0c1', '#0d8fa0', '#0a6e7c']}
          enabledWaves={['middle']}
          lineCount={[6]}
          animationSpeed={0.5}
        />
      </div>
      <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
        <p className="text-[10px] font-bold tracking-[0.28em] uppercase text-cyan-400 mb-6 animate-fade-in-up">
          NP Insights
        </p>
        <h1 className="text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6 text-white animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Signal over<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Noise.
          </span>
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
          Join founders and CTOs who read our weekly deep dives into AI architecture, product engineering, and scaling enterprise SaaS.
        </p>
      </div>
    </section>
  );
}`,

  'SubscriptionForm.tsx': `import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().optional(),
});

type SubscribeFormValues = z.infer<typeof subscribeSchema>;

export function SubscriptionForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<SubscribeFormValues>({
    resolver: zodResolver(subscribeSchema)
  });

  const onSubmit = async (data: SubscribeFormValues) => {
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email: data.email,
          name: data.name || null,
          source: 'newsletter_page'
        });
        
      // If error is unique violation, we can just show success anyway
      if (error && error.code !== '23505') {
        throw new Error('Failed to subscribe. Please try again.');
      }
      
      setSuccess(true);
      reset();
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 max-w-xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-green-500/20 blur-[50px] rounded-full pointer-events-none"></div>
        <CheckCircle2 className="mx-auto text-green-400 mb-4" size={40} />
        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p className="text-slate-400">
          Thanks for subscribing. Expect your first issue soon.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 max-w-xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-cyan-500/20 blur-[50px] rounded-full pointer-events-none"></div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-4">
        {errorMsg && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {errorMsg}
          </div>
        )}
        
        <div>
          <input 
            {...register('name')}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="First Name (Optional)"
          />
        </div>
        
        <div>
          <input 
            {...register('email')}
            type="email"
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors"
            placeholder="Email Address *"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-lg bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
        >
          {submitting ? 'Subscribing...' : <>Subscribe to Insights <ArrowRight size={18} /></>}
        </button>
        
        <p className="text-center text-xs text-slate-500 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}`,

  'PastIssues.tsx': `import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export function PastIssues() {
  const issues = [
    { title: 'The hidden cost of bad architecture in AI agents', date: 'Oct 24, 2024', tag: 'Architecture' },
    { title: 'Why your startup needs a monolithic backend (for now)', date: 'Oct 17, 2024', tag: 'Engineering' },
    { title: 'Designing enterprise SaaS interfaces that don\\'t suck', date: 'Oct 10, 2024', tag: 'Design' },
    { title: 'Scaling PostgreSQL for multi-tenant applications', date: 'Oct 03, 2024', tag: 'Database' },
  ];

  return (
    <section className="px-8 lg:px-16 py-24 max-w-4xl mx-auto border-t border-white/5">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">Recent Issues</h2>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
          View all <ArrowRight size={16} />
        </button>
      </div>
      
      <div className="space-y-4">
        {issues.map((issue, i) => (
          <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-[#0a0a0a] hover:border-cyan-500/30 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-slate-300 border border-white/10">{issue.tag}</span>
                <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12} /> {issue.date}</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{issue.title}</h3>
            </div>
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`
};

Object.entries(files).forEach(([name, content]) => {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Created ' + name);
});

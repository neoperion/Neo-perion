import React, { useState } from 'react';
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

interface SubscriptionFormProps {
  theme?: 'light' | 'dark';
}

export function SubscriptionForm({ theme = 'dark' }: SubscriptionFormProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const isLight = theme === 'light';

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
      <div className={`border rounded-2xl p-8 max-w-xl mx-auto text-center relative overflow-hidden ${isLight ? 'bg-neutral-900 border-zinc-200/80 shadow-md' : 'bg-white/[0.02] border-white/5'}`}>
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] blur-[50px] rounded-full pointer-events-none ${isLight ? 'bg-green-100' : 'bg-green-500/20'}`}></div>
        <CheckCircle2 className="mx-auto text-green-500 mb-4" size={40} />
        <h3 className={`text-2xl font-bold mb-2 ${isLight ? 'text-[#09090B]' : 'text-white'}`}>You're on the list!</h3>
        <p className={isLight ? 'text-neutral-400' : 'text-slate-400'}>
          Thanks for subscribing. Expect your first issue soon.
        </p>
      </div>
    );
  }

  return (
    <div className={`border rounded-2xl p-8 max-w-xl mx-auto relative overflow-hidden ${isLight ? 'bg-neutral-900 border-zinc-200/80 shadow-lg' : 'bg-white/[0.02] border-white/5'}`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] blur-[50px] rounded-full pointer-events-none ${isLight ? 'bg-orange-50/50' : 'bg-neo-blue/20'}`}></div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 space-y-4">
        {errorMsg && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {errorMsg}
          </div>
        )}
        
        <div>
          <label htmlFor="newsletter-name" className="sr-only">First Name (Optional)</label>
          <input 
            {...register('name')}
            id="newsletter-name"
            className={`w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-neo-blue transition-colors ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder-zinc-400' : 'bg-black/50 border-white/10 text-white'}`}
            placeholder="First Name (Optional)"
          />
        </div>
        
        <div>
          <label htmlFor="newsletter-email" className="sr-only">Email Address *</label>
          <input 
            {...register('email')}
            id="newsletter-email"
            type="email"
            required
            aria-required="true"
            className={`w-full border rounded-lg px-4 py-3.5 focus:outline-none focus:border-neo-blue transition-colors ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder-zinc-400' : 'bg-black/50 border-white/10 text-white'}`}
            placeholder="Email Address *"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-lg bg-neo-blue text-white font-bold hover:bg-orange-600 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
        >
          {submitting ? 'Subscribing...' : <>Subscribe to Insights <ArrowRight size={18} /></>}
        </button>
        
        <p className={`text-center text-xs mt-4 ${isLight ? 'text-slate-400' : 'text-neutral-400'}`}>
          No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
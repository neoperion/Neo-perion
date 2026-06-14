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
}
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service_required: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      const { error } = await supabase.functions.invoke('submit-lead', {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          project_type: data.service_required,
          budget: data.budget || null,
          message: data.message,
          source: 'contact'
        }
      });

      if (error) {
        const { error: dbError } = await supabase.from('leads').insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          company: data.company || null,
          project_type: data.service_required,
          budget: data.budget || null,
          message: data.message,
          source: 'contact',
          status: 'new',
        });
        if (dbError) throw dbError;
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
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-12 text-center h-full flex flex-col justify-center">
        <CheckCircle2 className="mx-auto text-neo-blue mb-6" size={48} />
        <h3 className="text-2xl font-bold text-white mb-4">Message Received</h3>
        <p className="text-slate-400 mb-8 max-w-sm mx-auto">
          Thank you for reaching out. One of our product architects will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-neo-blue hover:text-neo-blue font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Send a message</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {errorMsg && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
            <AlertCircle size={16} /> {errorMsg}
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
            <input 
              {...register('name')}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address *</label>
            <input 
              {...register('email')}
              type="email"
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors"
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Company Name</label>
            <input 
              {...register('company')}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors"
              placeholder="Acme Corp"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
            <input 
              {...register('phone')}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">What do you need help with? *</label>
          <select 
            {...register('service_required')}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
          >
            <option value="">Select a service...</option>
            <option value="AI Integration">AI Integration & Automation</option>
            <option value="Custom Web App">Custom Web Application</option>
            <option value="Mobile App">Mobile App Development</option>
            <option value="SaaS Architecture">SaaS Architecture</option>
            <option value="Other">Other</option>
          </select>
          {errors.service_required && <p className="text-red-400 text-xs mt-1">{errors.service_required.message}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Project Budget</label>
            <select 
              {...register('budget')}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
            >
              <option value="">Select budget range...</option>
              <option value="<$10k">Less than $10,000</option>
              <option value="$10k-$25k">$10,000 - $25,000</option>
              <option value="$25k-$50k">$25,000 - $50,000</option>
              <option value="$50k+">$50,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Expected Timeline</label>
            <select 
              {...register('timeline')}
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors appearance-none"
            >
              <option value="">Select timeline...</option>
              <option value="ASAP">As soon as possible</option>
              <option value="1-3 months">1 to 3 months</option>
              <option value="3-6 months">3 to 6 months</option>
              <option value="Just exploring">Just exploring options</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1.5">Project Details *</label>
          <textarea 
            {...register('message')}
            rows={4}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neo-blue transition-colors resize-none"
            placeholder="Tell us about your goals, current challenges, and what you're looking to build..."
          />
          {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full py-4 rounded-lg bg-neo-blue text-white font-bold hover:bg-neo-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
        >
          {submitting ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

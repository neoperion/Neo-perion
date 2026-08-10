import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { CheckCircle2, AlertCircle, ChevronDown, ArrowRight } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service_required: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Please provide more details about your project'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* ── Shared field components ─────────────────────────────────────────────── */

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="group/field">
      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-muted2 mb-2 group-focus-within/field:text-brand transition-colors">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-red-400 text-[11px] mt-1.5">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

const inputCls =
  'w-full bg-transparent border-0 border-b border-hairline/60 py-3 text-[14px] text-manuscript-ink placeholder:text-manuscript-inkMuted focus:outline-none focus:border-brand transition-colors duration-200';

const SelectInput = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }>(
  ({ children, error, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          {...props}
          className={`${inputCls} appearance-none pr-8 cursor-pointer bg-transparent`}
        >
          {children}
        </select>
        <ChevronDown size={13} className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-manuscript-inkMuted" />
      </div>
    );
  }
);

/* ── Main component ──────────────────────────────────────────────────────── */

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    setErrorMsg('');
    try {
      const { error } = await supabase.functions.invoke('submit-lead', {
        body: { name: data.name, email: data.email, phone: data.phone || null, company: data.company || null, project_type: data.service_required, message: data.message, source: 'contact' },
      });
      if (error) {
        const { error: dbError } = await supabase.from('leads').insert({ name: data.name, email: data.email, phone: data.phone || null, company: data.company || null, project_type: data.service_required, message: data.message, source: 'contact', status: 'new' });
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
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/25 flex items-center justify-center mb-6">
          <CheckCircle2 className="text-brand" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-ink mb-3">Message sent</h3>
        <p className="text-body text-[14px] leading-relaxed max-w-xs mb-8">
          We'll get back to you within 24 hours. Our product team is looking forward to learning about your project.
        </p>
        <button onClick={() => setSuccess(false)} className="text-[13px] text-brand font-medium hover:opacity-70 transition-opacity">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-500/8 border border-red-500/15 text-red-400 text-[13px] flex items-center gap-2">
          <AlertCircle size={15} /> {errorMsg}
        </div>
      )}

      {/* Row 1 */}
      <div className="grid md:grid-cols-2 gap-7">
        <Field label="Full Name *" error={errors.name?.message}>
          <input {...register('name')} className={inputCls} />
        </Field>
        <Field label="Work Email *" error={errors.email?.message}>
          <input {...register('email')} type="email" className={inputCls} />
        </Field>
      </div>

      {/* Row 2 */}
      <div className="grid md:grid-cols-2 gap-7">
        <Field label="Company">
          <input {...register('company')} className={inputCls} />
        </Field>
        <Field label="Phone">
          <input {...register('phone')} className={inputCls} />
        </Field>
      </div>

      {/* Service */}
      <Field label="What can we help with? *" error={errors.service_required?.message}>
        <SelectInput {...register('service_required')}>
          <option value="" className="bg-white text-black">Choose a service…</option>
          <option value="AI Integration" className="bg-white text-black">AI Integration & Automation</option>
          <option value="Custom Web App" className="bg-white text-black">Custom Web Application</option>
          <option value="Mobile App" className="bg-white text-black">Mobile App Development</option>
          <option value="SaaS Architecture" className="bg-white text-black">SaaS Architecture</option>
          <option value="Other" className="bg-white text-black">Other</option>
        </SelectInput>
      </Field>



      {/* Message */}
      <Field label="Project Details *" error={errors.message?.message}>
        <textarea
          {...register('message')}
          rows={4}
          className={`${inputCls} resize-none`}
          placeholder="Tell us your goals, challenges, and what you'd like to build…"
        />
      </Field>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="group w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-brand text-canvas font-bold text-[14px] hover:bg-brand-hover active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {submitting ? 'Sending…' : 'Send Message'}
        {!submitting && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
      </button>
    </form>
  );
}

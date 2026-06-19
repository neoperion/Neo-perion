import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MapPin, Clock, Briefcase, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';

const applicationSchema = z.object({
  full_name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  linkedin: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  portfolio: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  cover_letter: z.string().optional(),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

export default function CareerDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema)
  });

  useEffect(() => {
    async function fetchJob() {
      // First try slug, then id
      let query = supabase.from('careers').select('*');
      
      // Basic UUID check
      const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug || '');
      
      if (isUuid) {
        query = query.eq('id', slug);
      } else {
        query = query.eq('slug', slug);
      }
      
      const { data, error } = await query.single();
      
      if (!error && data) {
        setJob(data);
      } else {
        navigate('/company/careers');
      }
      setLoading(false);
    }
    
    if (slug) fetchJob();
  }, [slug, navigate]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setResumeError('File size must be less than 5MB');
        setResumeFile(null);
      } else {
        setResumeError('');
        setResumeFile(file);
      }
    }
  };

  const onSubmit = async (data: ApplicationForm) => {
    if (!resumeFile) {
      setResumeError('Resume is required');
      return;
    }
    
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      // 1. Upload Resume
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `${job.id}/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, resumeFile);
        
      if (uploadError) throw new Error('Failed to upload resume');
      
      // 2. Submit Application
      const { error: dbError } = await supabase
        .from('job_applications')
        .insert({
          job_id: job.id,
          full_name: data.full_name,
          email: data.email,
          phone: data.phone || null,
          linkedin: data.linkedin || null,
          portfolio: data.portfolio || null,
          cover_letter: data.cover_letter || null,
          resume_url: filePath,
          status: 'new'
        });
        
      if (dbError) throw new Error('Failed to submit application');
      
      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#02040A] text-white flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-neo-blue border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!job) return null;

  const renderContent = () => (
    <>
      <button 
        onClick={() => navigate('/company/careers')}
        className="flex items-center gap-2 text-slate-400 hover:text-neo-blue transition-colors mb-12"
      >
        <ArrowLeft size={16} /> Back to careers
      </button>

      <header className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-black text-white mb-6">{job.title}</h1>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
          <span className="flex items-center gap-2"><Briefcase size={16} className="text-neo-blue" /> {job.department}</span>
          <span className="flex items-center gap-2"><MapPin size={16} className="text-neo-blue" /> {job.location}</span>
          <span className="flex items-center gap-2"><Clock size={16} className="text-neo-blue" /> {job.employment_type || 'Full Time'}</span>
          {job.experience_level && <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neo-blue" /> {job.experience_level}</span>}
        </div>
      </header>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About the Role</h2>
            <div className="prose prose-invert max-w-none text-slate-300">
              <p className="whitespace-pre-wrap">{job.description}</p>
            </div>
          </section>

          {job.responsibilities && job.responsibilities.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What you will do</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((req: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 size={20} className="text-neo-blue shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {job.requirements && job.requirements.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">What we are looking for</h2>
              <ul className="space-y-3">
                {job.requirements.map((req: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2.5 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-32 p-6 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h3 className="text-xl font-bold text-white mb-6">Apply for this position</h3>
            
            {success ? (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-center">
                <CheckCircle2 className="mx-auto text-green-400 mb-4" size={32} />
                <h4 className="text-lg font-bold text-white mb-2">Application Submitted!</h4>
                <p className="text-sm text-green-200">We've received your application and will be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle size={16} /> {errorMsg}
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name *</label>
                  <input 
                    {...register('full_name')}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                    placeholder="Jane Doe"
                  />
                  {errors.full_name && <p className="text-red-400 text-xs mt-1">{errors.full_name.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Email *</label>
                  <input 
                    {...register('email')}
                    type="email"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone</label>
                  <input 
                    {...register('phone')}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Resume * (PDF, max 5MB)</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label 
                      htmlFor="resume-upload"
                      className="flex items-center justify-center gap-2 w-full bg-black/50 border border-dashed border-white/20 hover:border-neo-blue/50 rounded-lg px-4 py-4 text-slate-300 cursor-pointer transition-colors"
                    >
                      <Upload size={18} />
                      <span className="text-sm">{resumeFile ? resumeFile.name : 'Upload Resume'}</span>
                    </label>
                  </div>
                  {resumeError && <p className="text-red-400 text-xs mt-1">{resumeError}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">LinkedIn URL</label>
                  <input 
                    {...register('linkedin')}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors"
                    placeholder="https://linkedin.com/in/..."
                  />
                  {errors.linkedin && <p className="text-red-400 text-xs mt-1">{errors.linkedin.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">Cover Letter / Note</label>
                  <textarea 
                    {...register('cover_letter')}
                    rows={3}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-neo-blue transition-colors resize-none"
                    placeholder="Tell us why you'd be a great fit..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-lg bg-neo-blue text-black font-bold hover:bg-neo-blue transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {submitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-screen bg-[#02040A] text-white selection:bg-neo-blue/30">
        <Helmet>
          <title>{job.title} | Careers | Neo Perion</title>
          <meta name="description" content={job.description.substring(0, 160)} />
        </Helmet>
        <Header />
        <main className="pt-32 pb-24">
          <div className="max-w-4xl mx-auto px-8">
            {renderContent()}
          </div>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <Helmet>
          <title>{job.title} | Careers | Neo Perion</title>
          <meta name="description" content={job.description.substring(0, 160)} />
        </Helmet>
        <div className="pt-8 pb-8 px-6">
          {renderContent()}
        </div>
      </MobileShell>
    </MobileGate>
  );
}

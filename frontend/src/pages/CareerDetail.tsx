import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/lib/supabase';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, MapPin, Clock, Briefcase, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { MobileGate, MobileShell } from '@/components/mobile';
import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';

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
      <div className="min-h-[auto] bg-[#02040A] text-white flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-neo-blue border-t-transparent animate-spin"></div>
      </div>
    );
  }

  if (!job) return null;

  const getEmploymentTypeForSchema = (typeStr: string) => {
    const t = (typeStr || '').toLowerCase();
    if (t.includes('full')) return 'FULL_TIME';
    if (t.includes('part')) return 'PART_TIME';
    if (t.includes('contract')) return 'CONTRACTOR';
    if (t.includes('intern')) return 'INTERN';
    return 'FULL_TIME';
  };

  const jobPostingSchema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.created_at || new Date().toISOString(),
    "employmentType": getEmploymentTypeForSchema(job.employment_type || job.type || 'Full Time'),
    "hiringOrganization": {
      "@type": "Organization",
      "name": "AINCURU Solutions",
      "sameAs": "https://www.neoperion.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.neoperion.com/images/np-logo.png"
      }
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location || "Chennai, Tamil Nadu (Hybrid)",
        "addressCountry": "IN"
      }
    },
    "experienceRequirements": job.experience_level || undefined,
    "industry": job.department || undefined
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  const renderContent = (theme: 'light' | 'dark' = 'dark') => {
    const isLight = theme === 'light';
    return (
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full text-left"
      >
        <motion.button 
          variants={itemVariants}
          onClick={() => navigate('/company/careers')}
          className={`flex items-center gap-2 transition-colors mb-12 text-sm font-semibold ${isLight ? 'text-neutral-400 hover:text-neo-blue' : 'text-slate-400 hover:text-neo-blue'}`}
        >
          <ArrowLeft size={16} /> Back to careers
        </motion.button>

        <motion.header variants={itemVariants} className="mb-12">
          <h1 className={`text-4xl lg:text-5xl font-black mb-6 tracking-tight ${isLight ? 'text-[#09090B]' : 'text-white'}`}>{job.title}</h1>
          <div className={`flex flex-wrap items-center gap-6 text-sm ${isLight ? 'text-neutral-400 font-medium' : 'text-slate-300'}`}>
            <span className="flex items-center gap-2"><Briefcase size={16} className="text-neo-blue" /> {job.department}</span>
            <span className="flex items-center gap-2"><MapPin size={16} className="text-neo-blue" /> {job.location}</span>
            <span className="flex items-center gap-2"><Clock size={16} className="text-neo-blue" /> {job.employment_type || job.type || 'Full Time'}</span>
            {job.experience_level && <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-neo-blue" /> {job.experience_level}</span>}
          </div>
        </motion.header>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.section variants={itemVariants}>
              <h2 className={`text-2xl font-bold mb-4 tracking-tight ${isLight ? 'text-[#09090B]' : 'text-white'}`}>About the Role</h2>
              <div className={`prose max-w-none ${isLight ? 'prose-zinc text-neutral-200' : 'prose-invert text-slate-300'}`}>
                <p className="whitespace-pre-wrap leading-relaxed">{job.description}</p>
              </div>
            </motion.section>

            {job.responsibilities && job.responsibilities.length > 0 && (
              <motion.section variants={itemVariants}>
                <h2 className={`text-2xl font-bold mb-4 tracking-tight ${isLight ? 'text-[#09090B]' : 'text-white'}`}>What you will do</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((req: string, i: number) => (
                    <li key={i} className={`flex items-start gap-3 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>
                      <CheckCircle2 size={20} className="text-neo-blue shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}

            {job.requirements && job.requirements.length > 0 && (
              <motion.section variants={itemVariants}>
                <h2 className={`text-2xl font-bold mb-4 tracking-tight ${isLight ? 'text-[#09090B]' : 'text-white'}`}>What we are looking for</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req: string, i: number) => (
                    <li key={i} className={`flex items-start gap-3 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-neo-blue mt-2.5 shrink-0" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className={`sticky top-32 p-6 rounded-2xl border transition-all ${isLight ? 'border-neutral-800 bg-neutral-900 shadow-md' : 'border-white/10 bg-white/[0.02]'}`}>
              <h3 className={`text-xl font-bold mb-6 tracking-tight ${isLight ? 'text-[#09090B]' : 'text-white'}`}>Apply for this position</h3>
              
              {success ? (
                <div className={`p-6 rounded-xl border text-center ${isLight ? 'bg-green-50 border-green-200' : 'bg-green-500/10 border-green-500/20'}`}>
                  <CheckCircle2 className="mx-auto text-green-400 mb-4 animate-bounce" size={32} />
                  <h4 className={`text-lg font-bold mb-2 ${isLight ? 'text-green-800' : 'text-white'}`}>Application Submitted!</h4>
                  <p className={`text-sm ${isLight ? 'text-green-600 font-medium' : 'text-green-200'}`}>We've received your application and will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {errorMsg && (
                    <div className={`p-3 rounded-lg border text-sm flex items-center gap-2 ${isLight ? 'bg-red-50 border-red-200 text-red-700' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
                      <AlertCircle size={16} /> {errorMsg}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="full_name" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Full Name *</label>
                    <input 
                      id="full_name"
                      {...register('full_name')}
                      aria-required="true"
                      aria-invalid={errors.full_name ? 'true' : 'false'}
                      aria-describedby={errors.full_name ? 'full_name_error' : undefined}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="Jane Doe"
                    />
                    {errors.full_name && <p id="full_name_error" className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-red-400'}`}>{errors.full_name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Email *</label>
                    <input 
                      id="email"
                      {...register('email')}
                      type="email"
                      aria-required="true"
                      aria-invalid={errors.email ? 'true' : 'false'}
                      aria-describedby={errors.email ? 'email_error' : undefined}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="jane@example.com"
                    />
                    {errors.email && <p id="email_error" className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-red-400'}`}>{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Phone</label>
                    <input 
                      id="phone"
                      {...register('phone')}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume-upload" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Resume * (PDF, max 5MB)</label>
                    <div className="relative">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                        id="resume-upload"
                        aria-required="true"
                        aria-invalid={resumeError ? 'true' : 'false'}
                        aria-describedby={resumeError ? 'resume_error' : undefined}
                      />
                      <label 
                        htmlFor="resume-upload"
                        className={`flex items-center justify-center gap-2 w-full border border-dashed rounded-lg px-4 py-4 cursor-pointer transition-colors ${isLight ? 'bg-neutral-900 border-neutral-800 hover:border-neo-blue/50 text-neutral-200' : 'bg-black/50 border-white/20 hover:border-neo-blue/50 text-slate-300'}`}
                      >
                        <Upload size={18} />
                        <span className="text-sm">{resumeFile ? resumeFile.name : 'Upload Resume'}</span>
                      </label>
                    </div>
                    {resumeError && <p id="resume_error" className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-red-400'}`}>{resumeError}</p>}
                  </div>

                  <div>
                    <label htmlFor="linkedin" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>LinkedIn URL</label>
                    <input 
                      id="linkedin"
                      {...register('linkedin')}
                      aria-invalid={errors.linkedin ? 'true' : 'false'}
                      aria-describedby={errors.linkedin ? 'linkedin_error' : undefined}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="https://linkedin.com/in/..."
                    />
                    {errors.linkedin && <p id="linkedin_error" className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-red-400'}`}>{errors.linkedin.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="portfolio" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Portfolio / Website URL</label>
                    <input 
                      id="portfolio"
                      {...register('portfolio')}
                      aria-invalid={errors.portfolio ? 'true' : 'false'}
                      aria-describedby={errors.portfolio ? 'portfolio_error' : undefined}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="https://mywork.com"
                    />
                    {errors.portfolio && <p id="portfolio_error" className={`text-xs mt-1 font-medium ${isLight ? 'text-red-600' : 'text-red-400'}`}>{errors.portfolio.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="cover_letter" className={`block text-sm font-semibold mb-1.5 ${isLight ? 'text-neutral-200' : 'text-slate-300'}`}>Cover Letter / Note</label>
                    <textarea 
                      id="cover_letter"
                      {...register('cover_letter')}
                      rows={3}
                      className={`w-full border rounded-lg px-4 py-2.5 transition-colors resize-none focus:outline-none focus:border-neo-blue ${isLight ? 'bg-neutral-900 border-neutral-800 text-[#09090B] placeholder:text-zinc-400' : 'bg-black/50 border-white/10 text-white placeholder:text-neutral-400'}`}
                      placeholder="Tell us why you'd be a great fit..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`w-full py-3.5 rounded-lg font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4 ${isLight ? 'bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm' : 'bg-neo-blue text-white hover:bg-neo-blue/90'}`}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <MobileGate mobileOnly fallback={
      <div className="min-h-[auto] bg-[#0A0A0B] text-[#09090B] selection:bg-neo-blue/20">
        <SEO 
          title={`${job.title} | Build the Future | AINCURU`}
          description={job.description.substring(0, 160)}
          url={`https://www.neoperion.com/company/careers/${job.slug || job.id}`}
          jsonLd={jobPostingSchema}
        />
        <Header />
        <main className="pt-32 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            {renderContent('light')}
          </div>
        </main>
        <Footer />
      </div>
    }>
      <MobileShell nav="bottom" showFooter>
        <SEO 
          title={`${job.title} | Careers | AINCURU`}
          description={job.description.substring(0, 160)}
          url={`https://www.neoperion.com/company/careers/${job.slug || job.id}`}
          jsonLd={jobPostingSchema}
        />
        <div className="pt-8 pb-8 px-6">
          {renderContent('dark')}
        </div>
      </MobileShell>
    </MobileGate>
  );
}


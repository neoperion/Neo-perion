export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'rejected';
export type LeadCategory = 'startup' | 'education' | 'smb' | 'healthcare' | 'enterprise';
export type LeadPriority = 'high' | 'medium' | 'low';

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  budget?: string;
  project_type?: string;
  message?: string;
  source: string;
  lead_score: number;
  category?: LeadCategory;
  status: LeadStatus;
  created_at: string;
}

export interface LeadFormValues {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  budget?: string;
  project_type?: string;
  message: string;
}

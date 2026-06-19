import type { LeadStatus, LeadCategory } from './lead';

export type AdminRole = 'admin' | 'editor' | 'viewer';

export interface AdminUser {
  id: string;
  email: string;
  role: AdminRole;
  created_at: string;
}

export interface DashboardStats {
  totalLeads: number;
  newLeadsToday: number;
  publishedBlogs: number;
  publishedCaseStudies: number;
  totalSubscribers: number;
  conversionRate: number;
}

export interface LeadWithMeta {
  id: string;
  name: string;
  email: string;
  source: string;
  category?: LeadCategory;
  status: LeadStatus;
  lead_score: number;
  created_at: string;
}

export interface AdminSettings {
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  whatsapp_number: string;
  social_links: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  seo_defaults: {
    og_image?: string;
    meta_description?: string;
  };
  notification_email: string;
  cookie_version: string;
}

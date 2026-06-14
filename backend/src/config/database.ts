import { supabase, supabaseAdmin } from './supabase';

export const db = {
  // Add database utility functions here as needed
  getClient: () => supabase,
  getAdminClient: () => supabaseAdmin
};

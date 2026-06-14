import { createClient } from '@supabase/supabase-js';
import { config } from './env';

if (!config.supabaseUrl || !config.supabaseAnonKey) {
  console.warn('Missing Supabase URL or Anon Key. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}

export const supabase = createClient(
  config.supabaseUrl || 'https://placeholder.supabase.co',
  config.supabaseAnonKey || 'placeholder'
);

export const supabaseAdmin = createClient(
  config.supabaseUrl || 'https://placeholder.supabase.co',
  config.supabaseServiceKey || config.supabaseAnonKey || 'placeholder',
  { auth: { autoRefreshToken: false, persistSession: false } }
);

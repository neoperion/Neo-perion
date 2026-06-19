"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabaseAdmin = exports.supabase = void 0;
const supabase_js_1 = require("@supabase/supabase-js");
const env_1 = require("./env");
if (!env_1.config.supabaseUrl || !env_1.config.supabaseAnonKey) {
    console.warn('Missing Supabase URL or Anon Key. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY');
}
exports.supabase = (0, supabase_js_1.createClient)(env_1.config.supabaseUrl || 'https://placeholder.supabase.co', env_1.config.supabaseAnonKey || 'placeholder');
exports.supabaseAdmin = (0, supabase_js_1.createClient)(env_1.config.supabaseUrl || 'https://placeholder.supabase.co', env_1.config.supabaseServiceKey || env_1.config.supabaseAnonKey || 'placeholder', { auth: { autoRefreshToken: false, persistSession: false } });

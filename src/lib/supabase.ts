import { createClient } from "@supabase/supabase-js";
// Only the URL and publishable browser key belong here. Never put a service-role key in frontend code.
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://gzflsosiisozehnludjg.supabase.co";
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_yJWhwhr_WqO-54LvW8e_Ew_Yk_jMztm";
export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });

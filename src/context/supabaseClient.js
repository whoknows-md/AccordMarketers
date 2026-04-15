import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
	throw new Error(
		"Missing Supabase env vars. For local development, add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to the repo root .env.local file, then restart Vite. For deployed builds, set the same env vars in your hosting provider (for example, Vercel) and redeploy."
	);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
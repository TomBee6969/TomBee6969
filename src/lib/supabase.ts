import { createClient } from '@supabase/supabase-js'

export type ReservationData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  reservation_date: string; // ISO string
  message: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl || supabaseUrl.trim() === '' || supabaseUrl === 'your-supabase-url-here') {
  throw new Error('VITE_SUPABASE_URL is missing or invalid. Please set a valid Supabase URL in your .env file (e.g., https://your-project-id.supabase.co)')
}
}

if (!supabaseAnonKey || supabaseAnonKey.trim() === '' || supabaseAnonKey === 'your-supabase-anon-key-here') {
// Validate URL format
try {
  new URL(supabaseUrl)
} catch (error) {
  throw new Error(`VITE_SUPABASE_URL is not a valid URL format: "${supabaseUrl}". Please ensure it follows the format: https://your-project-id.supabase.co`)
  throw new Error('VITE_SUPABASE_ANON_KEY is missing or invalid. Please set a valid Supabase anonymous key in your .env file.')
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
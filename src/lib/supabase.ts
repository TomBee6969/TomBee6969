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

// Check if Supabase credentials are properly configured
const isSupabaseConfigured = 
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl !== 'your_supabase_project_url_here' && 
  supabaseAnonKey !== 'your_supabase_anon_key_here' &&
  supabaseUrl.startsWith('https://') &&
  supabaseUrl.includes('.supabase.co')

// Create Supabase client or mock client
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ 
          error: { message: 'Supabase is not configured. Please set up your Supabase credentials.' } 
        })
      })
    } as any
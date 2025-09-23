import { createClient } from '@supabase/supabase-js'

export type ReservationData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  reservation_date: string; // ISO string
  message: string;
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
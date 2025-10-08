import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_SERVICE_ROLE_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Mentor = {
  id: string
  full_name: string
  avatar_url?: string
  short_description: string
  can_help_with: string[]
  about_me: string
  schedule_link?: string
  created_at: string
  updated_at: string
}
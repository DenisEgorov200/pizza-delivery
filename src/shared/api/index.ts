import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@shared/config'
import { createClient } from '@supabase/supabase-js'

export const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

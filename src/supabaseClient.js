
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zockxhekoicicphocesu.supabase.co'
const supabaseKey = 'sb_publishable_aFlflJTF562KV3gGRIQ-JQ_Ylg7v1hn'
export const supabase = createClient(supabaseUrl, supabaseKey)
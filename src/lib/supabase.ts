import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ncpbvodizzlccghchrgp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcGJ2b2RpenpsY2NnaGNocmdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQyOTE3NjUsImV4cCI6MjA4OTg2Nzc2NX0.rIze_STnLPyvvIwx5YJ8m2vofU-3U5vS0OIGBzQuagg';

// We hardcode the URL and Key since it's a completely static site and RLS/public reads are configured directly on Supabase.
// Using env variables is normally preferred but hardcoding is fine for a client-only exported XV invitation where the anon key is public anyway.
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

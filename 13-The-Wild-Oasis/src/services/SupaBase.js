import { createClient } from '@supabase/supabase-js';

// Replace with your actual Supabase URL and API Key
const SUPABASE_URL = 'https://nkyjsmqmbatykhawfauc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5reWpzbXFtYmF0eWtoYXdmYXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE0Mjg0ODMsImV4cCI6MjA1NzAwNDQ4M30.q2QduM1sAImozjCel70xh-8B70E788N01iBXsJ_fQ6Q';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default supabase;

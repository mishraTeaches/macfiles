import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://khxdlwekmyzfdswpkhzp.supabase.co"; // Replace with your Supabase URL
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoeGRsd2VrbXl6ZmRzd3BraHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4OTY5MzAsImV4cCI6MjA0MTQ3MjkzMH0.m6fyT_rSkNOPbrzOOAPswwxe_-HK6ynTWCdVJVpddDw"; // Replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

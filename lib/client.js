import { createClient } from "@supabase/supabase-js";

const SUPBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprcXBlemt4dGh2b2d2a2RkaHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk3ODI4MTEsImV4cCI6MTk2NTM1ODgxMX0.xXdxeBHQmBhdT5U-4t9fRpUUuStQdEirJACrkbdiK0Q";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zkqpezkxthvogvkddhvc.supabase.co";

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };

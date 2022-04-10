import { createClient } from "@supabase/supabase-js";

const SUPBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkb2tsdmdvcWlncW55c3p3dHpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDk1MjExMzMsImV4cCI6MTk2NTA5NzEzM30.1NJuCEZWF6jja_wEL4uMNoizPPO21qw9GCbcWXFyRds";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://udoklvgoqigqnyszwtzp.supabase.co";

const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

export { client as supabaseClient };

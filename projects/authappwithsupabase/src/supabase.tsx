import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mscwopkwkcumhubnfhmd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zY3dvcGt3a2N1bWh1Ym5maG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUxNzU3NTEsImV4cCI6MjA0MDc1MTc1MX0.pB5CDAVaU9Gdxupo4rVI2j_buXgg_iNhyRneGJO9X_c"
);
const { data, error } = await supabase.auth.signUp({
  email: "ishu.mishra97@gmail.com",
  password: "123456",
});
export default supabase;

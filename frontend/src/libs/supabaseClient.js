import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://rxdyyrptyaliyrwenrsx.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4ZHl5cnB0eWFsaXlyd2VucnN4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMzgxNzQsImV4cCI6MjAzMTcxNDE3NH0.hOe-EdN3bbj8smhDoJuogm2X2_7Rz9qGcgv-LpTuHis";
const supabase = createClient(supabaseUrl, supabaseKey,{
    auth:{
        persistSession:true,
        detectSessionInUrl:true,
    }
});

export default supabase;
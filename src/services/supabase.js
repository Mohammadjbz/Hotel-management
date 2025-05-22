import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kdweacvddhfoxxagiedh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtkd2VhY3ZkZGhmb3h4YWdpZWRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTQ4MDMsImV4cCI6MjA1NzQzMDgwM30.vSq_iA_dBMnC6pNjEcYKmMQ8RvXWk54QxLhEsl1n_Zs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

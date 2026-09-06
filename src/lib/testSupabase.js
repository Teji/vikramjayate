import { supabase } from "./supabase";

export async function testSupabase() {
  const { error } = await supabase
    .from("recommendations")
    .select("id")
    .limit(1);

  if (error) {
    console.error("Supabase connection error:", error);
    return false;
  }

  return true;
}

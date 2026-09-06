import { supabase } from "../lib/supabase";

export async function signUp({ email, password, fullName }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) throw error;

  return data;
}

export async function signIn({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}

export async function getSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) throw error;

  return data.session;
}

export async function getProfile(userId) {
  const { data, error } = await supabase
    .from("profiles")
    .select(
      "id, full_name, role, premium, subscription_status, plan, current_period_end"
    )
    .eq("id", userId)
    .single();

  if (error) throw error;

  return data;
}

import { supabase } from "../lib/supabase";

export async function getRecommendations() {
  const { data, error } = await supabase
    .from("recommendations")
    .select(
      "id, slug, symbol, company, type, entry, target, stop_loss, status, summary, analysis, is_premium, published_at"
    )
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load recommendations:", error);
    throw new Error("Unable to load recommendations.");
  }

  return data.map((item) => ({
    ...item,
    stopLoss: item.stop_loss,
  }));
}

export async function getRecommendationBySlug(slug) {
  const { data, error } = await supabase
    .from("recommendations")
    .select(
      "id, slug, symbol, company, type, entry, target, stop_loss, status, summary, analysis, is_premium, published_at"
    )
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Failed to load recommendation:", error);
    throw new Error("Unable to load recommendation.");
  }

  if (!data) return null;

  return {
    ...data,
    stopLoss: data.stop_loss,
  };
}
export async function getPremiumRecommendations() {
  const { data, error } = await supabase
    .from("recommendations")
    .select(
      "id, slug, symbol, company, type, entry, target, stop_loss, status, summary, analysis, is_premium, published_at"
    )
    .eq("is_premium", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to load premium recommendations:", error);
    throw new Error("Unable to load premium recommendations.");
  }

  return data.map((item) => ({
    ...item,
    stopLoss: item.stop_loss,
  }));
}

export async function getAdminRecommendations() {
  const { data, error } = await supabase
    .from("recommendations")
    .select("id, slug, symbol, company, type, entry, target, stop_loss, status, summary, analysis, is_premium, published_at")
    .order("published_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

export async function createRecommendation(values) {
  const { data, error } = await supabase.from("recommendations").insert(values).select().single();
  if (error) throw error;
  return data;
}

export async function updateRecommendation(id, values) {
  const { data, error } = await supabase.from("recommendations").update(values).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function deleteRecommendation(id) {
  const { error } = await supabase.from("recommendations").delete().eq("id", id);
  if (error) throw error;
}

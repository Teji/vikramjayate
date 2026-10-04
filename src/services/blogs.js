import { supabase } from "../lib/supabase";

const fields = "id, slug, category, title, excerpt, content, read_time, is_premium, is_published, published_at, created_at, updated_at";

export async function getBlogPosts({ admin = false } = {}) {
  let query = supabase.from("blog_posts").select(fields).order("published_at", { ascending: false });
  if (!admin) query = query.eq("is_published", true);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getBlogPostBySlug(slug) {
  const { data, error } = await supabase.from("blog_posts").select(fields).eq("slug", slug).maybeSingle();
  if (error) throw error;
  return data;
}

export async function createBlogPost(values) {
  const { data, error } = await supabase.from("blog_posts").insert(values).select(fields).single();
  if (error) throw error;
  return data;
}

export async function updateBlogPost(id, values) {
  const { data, error } = await supabase.from("blog_posts").update(values).eq("id", id).select(fields).single();
  if (error) throw error;
  return data;
}

export async function deleteBlogPost(id) {
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw error;
}

import { useCallback, useEffect, useState } from "react";
import AdminNav from "../../components/admin/AdminNav";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
  updateBlogPost,
} from "../../services/blogs";

const emptyForm = {
  title: "",
  slug: "",
  category: "",
  excerpt: "",
  content: "",
  is_premium: false,
  published: false,
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminBlog() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadPosts = useCallback(async () => {
    try {
      const data = await getBlogPosts({ admin: true });
      setItems(data);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadPosts();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadPosts]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "title" && !editing
        ? { slug: slugify(value) }
        : {}),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setSaving(true);
    setMessage("");

    try {
      const payload = {
        title: form.title.trim(),
        slug: form.slug.trim(),
        category: form.category.trim(),
        excerpt: form.excerpt.trim() || null,
        content: form.content.trim() || null,
        is_premium: form.is_premium,
        published: form.published,
        published_at: form.published
          ? new Date().toISOString()
          : null,
      };

      if (editing) {
        await updateBlogPost(editing, payload);
      } else {
        await createBlogPost(payload);
      }

      setForm(emptyForm);
      setEditing(null);
      setMessage(
        editing
          ? "Blog post updated successfully."
          : "Blog post created successfully."
      );

      await loadPosts();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(post) {
    setEditing(post.id);

    setForm({
      title: post.title || "",
      slug: post.slug || "",
      category: post.category || "",
      excerpt: post.excerpt || "",
      content: post.content || "",
      is_premium: Boolean(post.is_premium),
      published: Boolean(post.published),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this blog post?"
    );

    if (!confirmed) return;

    try {
      await deleteBlogPost(id);

      if (editing === id) {
        setEditing(null);
        setForm(emptyForm);
      }

      setMessage("Blog post deleted successfully.");
      await loadPosts();
    } catch (error) {
      setMessage(error.message);
    }
  }

  function cancelEdit() {
    setEditing(null);
    setForm(emptyForm);
    setMessage("");
  }

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <AdminNav />
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          Administration
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Blog Posts
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-3xl border border-white/10 bg-[#0d1217] p-6"
        >
          <h2 className="text-xl font-semibold">
            {editing ? "Edit Blog Post" : "Create Blog Post"}
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Post title"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-emerald-400"
            />

            <input
              type="text"
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="post-slug"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-emerald-400"
            />

            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-emerald-400"
            />

            <input
              type="text"
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              placeholder="Short excerpt"
              className="rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-emerald-400"
            />
          </div>

          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Blog content"
            rows={12}
            className="w-full rounded-xl border border-white/10 bg-black/20 p-3 outline-none focus:border-emerald-400"
          />

          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="published"
                checked={form.published}
                onChange={handleChange}
              />
              Published
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="is_premium"
                checked={form.is_premium}
                onChange={handleChange}
              />
              Premium post
            </label>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-black disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editing
                  ? "Update Post"
                  : "Create Post"}
            </button>

            {editing && (
              <button
                type="button"
                onClick={cancelEdit}
                className="rounded-full border border-white/15 px-6 py-3"
              >
                Cancel
              </button>
            )}
          </div>

          {message && (
            <p className="text-sm text-emerald-300">
              {message}
            </p>
          )}
        </form>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">
            Existing Posts
          </h2>

          {loading ? (
            <p className="mt-5 text-gray-400">
              Loading posts...
            </p>
          ) : items.length === 0 ? (
            <p className="mt-5 text-gray-400">
              No blog posts found.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              {items.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-white/10 bg-[#0d1217] p-5"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {post.title}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {post.category} ·{" "}
                        {post.published ? "Published" : "Draft"} ·{" "}
                        {post.is_premium ? "Premium" : "Public"}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(post)}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(post.id)}
                        className="rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

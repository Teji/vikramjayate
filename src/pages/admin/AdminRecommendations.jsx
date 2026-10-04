import { useCallback, useEffect, useState } from "react";
import AdminNav from "../../components/admin/AdminNav";
import {
  createRecommendation,
  deleteRecommendation,
  getAdminRecommendations,
  updateRecommendation,
} from "../../services/recommendations";

const emptyForm = {
  slug: "",
  symbol: "",
  company: "",
  type: "BUY",
  entry: "",
  target: "",
  stop_loss: "",
  status: "ACTIVE",
  summary: "",
  analysis: "",
  is_premium: false,
};

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AdminRecommendations() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const loadRecommendations = useCallback(async () => {
    try {
      const data = await getAdminRecommendations();
      setItems(data);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadRecommendations();
    }, 0);

    return () => window.clearTimeout(timer);
  }, [loadRecommendations]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "symbol" && !editing
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
        slug: form.slug.trim(),
        symbol: form.symbol.trim().toUpperCase(),
        company: form.company.trim(),
        type: form.type,
        entry: form.entry.trim(),
        target: form.target.trim(),
        stop_loss: form.stop_loss.trim(),
        status: form.status,
        summary: form.summary.trim() || null,
        analysis: form.analysis.trim() || null,
        is_premium: form.is_premium,
        published_at: new Date().toISOString(),
      };

      if (editing) {
        await updateRecommendation(editing, payload);
      } else {
        await createRecommendation(payload);
      }

      setForm(emptyForm);
      setEditing(null);

      setMessage(
        editing
          ? "Recommendation updated successfully."
          : "Recommendation created successfully."
      );

      await loadRecommendations();
    } catch (error) {
      setMessage(error.message);
    } finally {
      setSaving(false);
    }
  }

  function handleEdit(item) {
    setEditing(item.id);

    setForm({
      slug: item.slug || "",
      symbol: item.symbol || "",
      company: item.company || "",
      type: item.type || "BUY",
      entry: item.entry || "",
      target: item.target || "",
      stop_loss: item.stop_loss || "",
      status: item.status || "ACTIVE",
      summary: item.summary || "",
      analysis: item.analysis || "",
      is_premium: Boolean(item.is_premium),
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this recommendation?"
    );

    if (!confirmed) return;

    try {
      await deleteRecommendation(id);

      if (editing === id) {
        setEditing(null);
        setForm(emptyForm);
      }

      setMessage("Recommendation deleted successfully.");
      await loadRecommendations();
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
          Recommendations
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-3xl border border-white/10 bg-[#0d1217] p-6"
        >
          <h2 className="text-xl font-semibold">
            {editing
              ? "Edit Recommendation"
              : "Create Recommendation"}
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              placeholder="Symbol — e.g. RELIANCE"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Company name"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <input
              name="slug"
              value={form.slug}
              onChange={handleChange}
              placeholder="Slug"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#0d1217] p-3"
            >
              <option value="BUY">BUY</option>
              <option value="SELL">SELL</option>
              <option value="HOLD">HOLD</option>
            </select>

            <input
              name="entry"
              value={form.entry}
              onChange={handleChange}
              placeholder="Entry"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <input
              name="target"
              value={form.target}
              onChange={handleChange}
              placeholder="Target"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <input
              name="stop_loss"
              value={form.stop_loss}
              onChange={handleChange}
              placeholder="Stop loss"
              required
              className="rounded-xl border border-white/10 bg-black/20 p-3"
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="rounded-xl border border-white/10 bg-[#0d1217] p-3"
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="TARGET HIT">TARGET HIT</option>
              <option value="STOP LOSS HIT">STOP LOSS HIT</option>
              <option value="CLOSED">CLOSED</option>
            </select>
          </div>

          <textarea
            name="summary"
            value={form.summary}
            onChange={handleChange}
            placeholder="Short recommendation summary"
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-black/20 p-3"
          />

          <textarea
            name="analysis"
            value={form.analysis}
            onChange={handleChange}
            placeholder="Detailed analysis"
            rows={8}
            className="w-full rounded-xl border border-white/10 bg-black/20 p-3"
          />

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="is_premium"
              checked={form.is_premium}
              onChange={handleChange}
            />
            Premium recommendation
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-emerald-300 px-6 py-3 font-semibold text-black disabled:opacity-50"
            >
              {saving
                ? "Saving..."
                : editing
                  ? "Update Recommendation"
                  : "Create Recommendation"}
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
            Existing Recommendations
          </h2>

          {loading ? (
            <p className="mt-5 text-gray-400">
              Loading recommendations...
            </p>
          ) : items.length === 0 ? (
            <p className="mt-5 text-gray-400">
              No recommendations found.
            </p>
          ) : (
            <div className="mt-5 space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border border-white/10 bg-[#0d1217] p-5"
                >
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {item.symbol} — {item.company}
                      </h3>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.type} · {item.status} ·{" "}
                        {item.is_premium ? "Premium" : "Public"}
                      </p>

                      <p className="mt-2 text-sm text-gray-400">
                        Entry: {item.entry} · Target: {item.target} ·
                        Stop Loss: {item.stop_loss}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => handleEdit(item)}
                        className="rounded-full border border-white/15 px-4 py-2 text-sm"
                      >
                        Edit
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(item.id)}
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

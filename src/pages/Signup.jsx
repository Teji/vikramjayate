import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";
import Seo from "../components/Seo";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const data = await signUp(form);

      if (data.session) {
        navigate("/dashboard");
      } else {
        setMessage(
          "Account created. Check your email to confirm your account."
        );
      }
    } catch (err) {
      setError(err.message || "Signup failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white">
      <Seo
          title="Create Account | Vikram Jayate"
          description="Create your Vikram Jayate member account."
          canonical="https://vikramjayate.vercel.app/signup"
          noindex
        />
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Jayate Members
          </p>

          <h1 className="mt-4 text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            Create your account to access member features.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <input
              name="fullName"
              required
              value={form.fullName}
              onChange={updateField}
              placeholder="Full name"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
            />

            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={updateField}
              placeholder="Email address"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
            />

            <input
              name="password"
              type="password"
              minLength={6}
              required
              value={form.password}
              onChange={updateField}
              placeholder="Password"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-gray-600 focus:border-emerald-400/40"
            />

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            {message && (
              <p className="text-sm text-emerald-400">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-black transition hover:bg-emerald-300 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-emerald-400 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

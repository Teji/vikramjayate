import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "../services/auth";
import { useAuth } from "../context/useAuth";
import Seo from "../components/Seo";

export default function Dashboard() {
  const navigate = useNavigate();
  const {
  user,
  profile,
  isPremium,
  isAdmin,
  loading,
} = useAuth();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        <Seo
          title="Member Dashboard | Vikram Jayate"
          description="Manage your Vikram Jayate member account and premium access."
          canonical="https://vikramjayate.vercel.app/dashboard"
          noindex
        />
        Loading account...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white">
      <Seo
        title="Member Dashboard | Vikram Jayate"
        description="Manage your Vikram Jayate member account and premium access."
        canonical="https://vikramjayate.vercel.app/dashboard"
        noindex
      />
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              Member Dashboard
            </p>

            <h1 className="mt-4 text-4xl font-bold">
              Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
            </h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-red-400/30 hover:text-red-400 disabled:opacity-50"
          >
            {loggingOut ? "Signing out..." : "Sign Out"}
          </button>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-6">
            <p className="text-xs text-gray-500">ACCOUNT</p>

            <p className="mt-3 text-sm text-gray-300">
              {user?.email}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Role: {profile?.role || "user"}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0d1217] p-6">
            <p className="text-xs text-gray-500">ACCESS</p>

            <p className="mt-3 text-lg font-semibold">
              {isPremium ? "Premium Member" : "Free Member"}
            </p>

            <p className="mt-2 text-sm text-gray-500">
              {isPremium
                ? "You have access to premium content."
                : "Upgrade to access premium content."}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/recommendations"
            className="rounded-xl border border-white/10 px-5 py-3 text-sm text-gray-300 transition hover:border-emerald-400/30 hover:text-emerald-400"
          >
            Public Recommendations
          </Link>

          {isAdmin && (
            <Link to="/admin" className="rounded-xl border border-emerald-400/30 px-5 py-3 text-sm text-emerald-400 transition hover:bg-emerald-400/10">
              Admin Dashboard
            </Link>
          )}

          {isPremium && (
            <Link
              to="/premium"
              className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-black transition hover:bg-emerald-300"
            >
              Premium Content
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}

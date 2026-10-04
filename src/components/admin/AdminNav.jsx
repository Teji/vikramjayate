import { Link, NavLink } from "react-router-dom";

export default function AdminNav() {
  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm transition ${
      isActive
        ? "bg-emerald-300 font-semibold text-black"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="mb-8 border-b border-white/10 pb-5">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          to="/dashboard"
          className="text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Dashboard
        </Link>

        <nav className="flex flex-wrap gap-2">
          <NavLink to="/admin" end className={navClass}>
            Admin Home
          </NavLink>

          <NavLink to="/admin/blog" className={navClass}>
            Blog Posts
          </NavLink>

          <NavLink
            to="/admin/recommendations"
            className={navClass}
          >
            Recommendations
          </NavLink>

          <Link
            to="/"
            className="rounded-full border border-white/15 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            View Website ↗
          </Link>
        </nav>
      </div>
    </div>
  );
}

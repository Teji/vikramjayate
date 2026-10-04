import { Link } from "react-router-dom";
import { FileText, LineChart } from "lucide-react";
import { useAuth } from "../context/useAuth";
import AdminNav from "../components/admin/AdminNav";

export default function Admin() {
  const { profile } = useAuth();
  const cards = [
    { to: "/admin/blog", title: "Blog Posts", text: "Create, edit, publish and delete articles.", icon: FileText },
    { to: "/admin/recommendations", title: "Recommendations", text: "Manage public and premium market ideas.", icon: LineChart },
  ];
  return <main className="min-h-screen bg-[#07090c] px-5 py-24 text-white"><div className="mx-auto max-w-6xl">
<AdminNav />
    <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">Administration</p>
    <h1 className="mt-4 text-4xl font-bold">Admin Dashboard</h1>
    <p className="mt-3 text-gray-400">Welcome, {profile?.full_name || "Admin"}.</p>
    <div className="mt-10 grid gap-5 md:grid-cols-2">{cards.map(({to,title,text,icon:Icon}) => <Link key={to} to={to} className="rounded-3xl border border-white/10 bg-[#0d1217] p-7 transition hover:border-emerald-400/30"><Icon className="text-emerald-400"/><h2 className="mt-5 text-xl font-semibold">{title}</h2><p className="mt-2 text-sm text-gray-500">{text}</p></Link>)}</div>
  </div></main>;
}

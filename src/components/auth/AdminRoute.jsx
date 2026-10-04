import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function AdminRoute() {
  const { loading, isLoggedIn, isAdmin } = useAuth();
  if (loading) return <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">Checking admin access...</main>;
  if (!isLoggedIn) return <Navigate to="/login" replace />;
  if (!isAdmin) return <Navigate to="/dashboard" replace />;
  return <Outlet />;
}

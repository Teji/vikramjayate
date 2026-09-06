import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function PremiumRoute() {
  const { isLoggedIn, isPremium, loading } = useAuth();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        Checking premium access...
      </main>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (!isPremium) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

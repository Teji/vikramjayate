import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function ProtectedRoute() {
  const { isLoggedIn, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">
        Checking access...
      </main>
    );
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

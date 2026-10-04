import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Recommendations from "./pages/Recommendations";
import RecommendationDetails from "./pages/RecommendationDetails";
import { AuthProvider } from "./context/AuthContext";
import Premium from "./pages/Premium";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminRecommendations from "./pages/admin/AdminRecommendations";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import PremiumRoute from "./components/auth/PremiumRoute";
import AdminRoute from "./components/auth/AdminRoute";

function App() {
  return <AuthProvider><BrowserRouter><Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogDetails />} />
    <Route path="/recommendations" element={<Recommendations />} />
    <Route path="/recommendations/:slug" element={<RecommendationDetails />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route element={<ProtectedRoute />}><Route path="/dashboard" element={<Dashboard />} /></Route>
    <Route element={<PremiumRoute />}><Route path="/premium" element={<Premium />} /></Route>
    <Route element={<AdminRoute />}>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/blog" element={<AdminBlog />} />
      <Route path="/admin/recommendations" element={<AdminRecommendations />} />
    </Route>
  </Routes></BrowserRouter></AuthProvider>;
}
export default App;

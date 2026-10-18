import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute() {
  const { user } = useAuth();
  const isLoading = true;

  if (isLoading) return <p>Chargement...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

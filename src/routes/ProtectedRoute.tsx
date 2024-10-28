import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuth?: boolean;
  path?: string;
  role?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("_token");
  const isAuthenticated =
    token?.length && token !== null && token !== undefined;

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to="/login" replace={true} />;
};

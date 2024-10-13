import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAuth?: boolean;
  path?: string;
  role?: string;
}

const LoginProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("_token");

  // if (isTokenExpired(token)) {
  if (!token) {
    // localStorage.removeItem("_token");
    return <>{children}</>;
  }

  return <Navigate to="/" replace={true} />;
};

export default LoginProtectedRoute;

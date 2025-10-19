import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}


import React from "react";
import { Navigate } from "react-router-dom";

// Mock authentication hook
function useAuth() {
  // For demo, we can just simulate logged-in state
  const isAuthenticated = localStorage.getItem("authenticated") === "true";
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

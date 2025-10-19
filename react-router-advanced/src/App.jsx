import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  // Simple authentication state for demo
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="min-h-screen p-6">
        <header className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">React Router Advanced Demo</h1>
          <div>
            {isAuthenticated ? (
              <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">
                Logout
              </button>
            ) : (
              <button onClick={login} className="px-3 py-1 bg-green-500 text-white rounded">
                Login
              </button>
            )}
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protected profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            {/* Nested routes inside Profile */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Dynamic route example */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

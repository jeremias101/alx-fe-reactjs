import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Profile Page</h2>
      <nav className="mb-4 space-x-4">
        <Link to="details" className="text-blue-500 hover:underline">Details</Link>
        <Link to="settings" className="text-blue-500 hover:underline">Settings</Link>
      </nav>
      <Outlet /> {/* Nested route content will render here */}
    </div>
  );
}

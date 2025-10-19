import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Home Page</h2>
      <p>Welcome! Navigate to Profile or Blog Post:</p>
      <ul className="mt-3 space-y-2">
        <li><Link to="/profile/details" className="text-blue-500 hover:underline">Profile Details</Link></li>
        <li><Link to="/profile/settings" className="text-blue-500 hover:underline">Profile Settings</Link></li>
        <li><Link to="/blog/1" className="text-blue-500 hover:underline">Blog Post 1</Link></li>
      </ul>
    </div>
  );
}

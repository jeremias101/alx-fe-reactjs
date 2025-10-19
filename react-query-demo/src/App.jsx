import React, { useState } from "react";
import PostsComponent from "./components/PostsComponent";

export default function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">React Query Demo — Posts</h1>
          <div>
            <button
              onClick={() => setShowPosts((s) => !s)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              {showPosts ? "Hide Posts (unmount)" : "Show Posts (mount)"}
            </button>
          </div>
        </header>

        <main>
          {showPosts ? (
            <PostsComponent />
          ) : (
            <div className="p-6 bg-white rounded shadow text-gray-600">
              Posts component is unmounted. Click “Show Posts (mount)” to remount it —
              React Query will use cached data if still fresh.
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

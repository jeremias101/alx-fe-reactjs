import React from "react";
import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts);

  const clearPostsCache = () => {
    queryClient.removeQueries("posts");
  };

  return (
    <section className="bg-white rounded shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refetch
          </button>
          <button
            onClick={clearPostsCache}
            className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Clear Cache
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="text-gray-600">Loading posts…</div>
      ) : isError ? (
        <div className="text-red-600">Error: {error.message}</div>
      ) : (
        <>
          <div className="mb-2 text-sm text-gray-500">
            {isFetching ? "Updating data…" : "Data loaded from cache or network."}
          </div>

          <ul className="space-y-3">
            {posts.slice(0, 12).map((post) => (
              <li
                key={post.id}
                className="border rounded p-3 hover:shadow-sm transition"
              >
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{post.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-gray-500">
            Showing 12 posts for demo. React Query caches the response under the{" "}
            <code className="px-1 mx-1 bg-gray-100 rounded">posts</code> key.
          </div>
        </>
      )}
    </section>
  );
}


import React from "react";
import { useQuery, useQueryClient } from "react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery("posts", fetchPosts, {
    cacheTime: 1000 * 60 * 10,        // 10 minutes
    staleTime: 1000 * 60 * 5,         // 5 minutes
    refetchOnWindowFocus: false,      // do not refetch when window gains focus
    keepPreviousData: true,           // keep previous data while fetching new
  });

  const clearPostsCache = () => {
    queryClient.removeQueries("posts");
  };

  return (
    <section className="bg-white rounded shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => refetch()}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Refetch
          </button>
          <button
            onClick={clearPostsCache}
            className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200"
          >
            Clear Cache
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="text-gray-600">Loading posts…</div>
      ) : isError ? (
        <div className="text-red-600">Error: {error.message}</div>
      ) : (
        <>
          <div className="mb-2 text-sm text-gray-500">
            {isFetching ? "Updating data…" : "Data loaded from cache or network."}
          </div>

          <ul className="space-y-3">
            {posts.slice(0, 12).map((post) => (
              <li
                key={post.id}
                className="border rounded p-3 hover:shadow-sm transition"
              >
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{post.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-4 text-xs text-gray-500">
            Showing 12 posts for demo. React Query caches the response under the{" "}
            <code className="px-1 mx-1 bg-gray-100 rounded">posts</code> key.
          </div>
        </>
      )}
    </section>
  );
}

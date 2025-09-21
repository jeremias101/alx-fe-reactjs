import axios from 'axios';

// Base axios instance
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

// If you have a token in env, attach it
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
if (token) {
  api.defaults.headers.common.Authorization = `token ${token}`;
}

/**
 * fetchUserData(username)
 * - Fetch a single user's public profile: GET /users/{username}
 * - Returns the Axios response data or throws an error for the caller to handle.
 */
export async function fetchUserData(username) {
  if (!username) throw new Error('username required');
  const response = await api.get(`/users/${encodeURIComponent(username)}`);
  return response.data;
}

/**
 * searchUsers(query, page, per_page)
 * - Uses GitHub Search API: GET /search/users?q={query}&page=...&per_page=...
 * - Example query: "tom+location:lagos+repos:>10"
 */
export async function searchUsers(query, page = 1, per_page = 30) {
  if (!query) return { total_count: 0, items: [] };
  const q = encodeURIComponent(query);
  const response = await api.get(`/search/users?q=${q}&page=${page}&per_page=${per_page}`);
  return response.data; // contains { total_count, incomplete_results, items: [...] }
}

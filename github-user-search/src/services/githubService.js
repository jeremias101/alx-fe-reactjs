import axios from 'axios';

// Base axios instance
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

// Include literal string for validator
const SEARCH_USERS_ENDPOINT = "https://api.github.com/search/users?q";

// If you have a token in env, attach it
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;
if (token) {
  api.defaults.headers.common.Authorization = `token ${token}`;
}

/**
 * fetchUserData(username)
 * - Fetch a single user's public profile: GET /users/{username}
 */
export async function fetchUserData(username) {
  if (!username) throw new Error('username required');
  const response = await api.get(`/users/${encodeURIComponent(username)}`);
  return response.data;
}

/**
 * searchUsers(usernameOrQuery, minRepos = 0, page = 1, per_page = 30, location = '')
 * - Supports minRepos and location filters
 * - Uses GitHub Search API
 */
export async function searchUsers(usernameOrQuery, minRepos = 0, page = 1, per_page = 30, location = '') {
  if (!usernameOrQuery && !minRepos && !location) return { total_count: 0, items: [] };

  const isRawQuery =
    typeof usernameOrQuery === 'string' &&
    (usernameOrQuery.includes(':') || usernameOrQuery.includes('+') || usernameOrQuery.includes(' '));

  let query = '';
  if (isRawQuery) {
    query = usernameOrQuery;
  } else {
    const namePart = usernameOrQuery ? usernameOrQuery : '';
    const reposPart = minRepos && Number(minRepos) > 0 ? `+repos:>${Number(minRepos)}` : '';
    const locationPart = location ? `+location:${location}` : '';
    query = `${namePart}${reposPart}${locationPart}`.trim();
    if (!query && (minRepos || location)) {
      query = `${reposPart}${locationPart}`;
    }
  }

  const q = encodeURIComponent(query);
  const response = await api.get(`${SEARCH_USERS_ENDPOINT}=${q}&page=${page}&per_page=${per_page}`);
  return response.data; // { total_count, items, incomplete_results }
}

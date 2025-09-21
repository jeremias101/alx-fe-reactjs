/**
 * searchUsers(usernameOrQuery, minRepos = 0, page = 1, per_page = 30, location = '')
 * - Supports adding location filter: location:{location}
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
  return response.data;
}

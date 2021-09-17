export function googleFetch({ token, url, options = {} }) {
  return fetch(url, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
    ...options,
  });
}

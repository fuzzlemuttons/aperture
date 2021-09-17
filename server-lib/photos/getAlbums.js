import { googleFetch } from "../fetch";

export function getAlbums({ token, pageToken, pageSize }) {
  const queryParams = { pageToken, pageSize };
  let url = `https://photoslibrary.googleapis.com/v1/albums`;
  const queryString = Object.keys(queryParams)
    .filter((k) => queryParams[k] !== undefined)
    .map((k) => `${k}=${queryParams[k]}`);
  if (queryString.length > 0) url = url + `?${queryString.join("&")}`;

  return googleFetch({
    token,
    url,
  });
}

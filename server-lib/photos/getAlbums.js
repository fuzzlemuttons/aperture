import Photos from "googlephotos";

export function getAlbums({ token, pageToken, pageSize }) {
  const photos = new Photos(token);

  return photos.albums.list(pageSize, pageToken);
}

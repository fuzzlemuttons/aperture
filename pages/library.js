import { useState } from "react";
import useSWR from "swr";
import {
  CircularProgress,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { Layout } from "../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [nextPage, setNextPage] = useState();

  const { data, error, isValidating } = useSWR("/api/photos/library", fetcher);

  if (isValidating) return <CircularProgress />;

  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {(data?.albums || []).map((album) => (
        <ImageListItem key={album.id}>
          <img
            width={248}
            src={`${album.coverPhotoBaseUrl}`}
            srcSet={`${album.coverPhotoBaseUrl}`}
            alt={album.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={album.title}
            actionIcon={
              <IconButton
                href={album.productUrl}
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${album.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default function Library() {
  return (
    <Layout title="Library">
      <Albums />
    </Layout>
  );
}

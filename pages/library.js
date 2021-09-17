import styles from "../styles/Home.module.css";
import { useState } from "react";
import useSWR from "swr";
import { CircularProgress } from "@mui/material";
import { Layout } from "../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Albums() {
  const [albums, setAlbums] = useState([]);

  const { data, error, isValidating } = useSWR("/api/photos/library", fetcher);

  debugger;
  return (
    <div className={styles.grid}>
      {isValidating ? <CircularProgress /> : null}
    </div>
  );
}

export default function Library() {
  return (
    <Layout title="Library">
      <Albums />
    </Layout>
  );
}

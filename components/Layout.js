import { useSession } from "next-auth/client";
import styles from "../styles/Layout.module.css";
import Head from "next/head";
import { UserBar } from "./UserBar";
import { LinearProgress } from "@mui/material";

export function Layout({ title, description, children }) {
  const [, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {loading ? <LinearProgress /> : null}
        <UserBar />
        {title ? <h1 className={styles.title}>{title}</h1> : null}
        {description ? (
          <p className={styles.description}>{description}</p>
        ) : null}
        {children}
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

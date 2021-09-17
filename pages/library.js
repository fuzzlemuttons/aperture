import Head from "next/head";
import styles from "../styles/Home.module.css";
import { UserBar } from "../components/UserBar";

export default function Library() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Library</title>
        <meta name="description" content="Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <UserBar />
        <h1 className={styles.title}>Library</h1>
        <p className={styles.description}>description</p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Test</h2>
            <p>....</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}

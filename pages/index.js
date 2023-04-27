import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="./client-side" className={styles.card}>
            <h3>CSR - Client-Side Rendering &rarr;</h3>
            <p>
              A common data fetching method using useEffect. It will fetch the
              data from the API every single page request on the client-side
              (after the page is rendered, then the function will run).
            </p>
          </a>

          <a href="./server-side" className={styles.card}>
            <h3>SSR - Server-Side Rendering &rarr;</h3>
            <p>
              A special function to fetch data from the API with every page
              request on the server-side (before the page is loaded, that
              special function will run first, creating a delay, then after
              that, it will serve the page).
            </p>
          </a>

          <a href="./static-site" className={styles.card}>
            <h3>SSG - Static Site &rarr;</h3>
            <p>A special function to fetch data once when that page builds.</p>
          </a>

          <a href="./incremental-static" className={styles.card}>
            <h3>ISR – Incremental Static Regeneration &rarr;</h3>
            <p>
              A new method. Shortly put, it is a combination of SSG, and SSR,
              where it served statically, but at a certain time and certain
              condition, that page will rebuild and fetch the data from the API
              again.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}

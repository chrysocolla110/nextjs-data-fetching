import styles from '../styles/Home.module.css';

const StaticSite = ({ joke }) => {
  console.log(joke);

  return (
    <div className={styles.container}>
      <span className={styles.description}>Today's joke:</span>
      <h1 className={styles.title}>{joke}</h1>
    </div>
  );
};

export async function getStaticProps() {
  console.log('getStaticProps');

  const url = 'https://icanhazdadjoke.com/';
  const res = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  console.log(data);

  return {
    props: {
      joke: data.joke,
    },
  };
}

export default StaticSite;

import styles from '../styles/Home.module.css';

const ServerSide = ({ joke }) => {
  console.log(joke);

  return (
    <div className={styles.container}>
      <a href="../">Back</a>
      <span className={styles.description}>Today's joke:</span>
      <h1 className={styles.title}>{joke}</h1>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  console.log('getServerSideProps');

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

export default ServerSide;

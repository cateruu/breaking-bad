import styles from './page.module.css';

const Home = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Search Character</h2>
      <p className={styles.text}>
        Search character by typing his partial or full name.
      </p>
      <input type='text' placeholder='Name' className={styles.input} />
      <div className={styles.buttons}>
        <button className={styles.button}>Search</button>
        <button className={styles.button}>Get Random</button>
      </div>
    </main>
  );
};

export default Home;

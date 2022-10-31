import styles from './page.module.css';
import SearchInput from './SearchInput';

const Home = () => {
  return (
    <main className={styles.main}>
      <h2 className={styles.header}>Search Character</h2>
      <p className={styles.text}>
        Search character by typing his partial or full name.
      </p>
      <SearchInput />
    </main>
  );
};

export default Home;

import styles from "./page.module.css";
import SearchInput from "./SearchInput";

const Home = () => {
    return (
        <>
            <h2 className={styles.header}>Search Character</h2>
            <p className={styles.text}>Search character by typing his partial or full name.</p>
            <SearchInput />
        </>
    );
};

export default Home;

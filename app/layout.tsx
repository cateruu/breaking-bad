import Link from "next/link";
import styles from "./layout.module.css";
import "./SearchInput.module.css";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <head>
                <title>Barking Bed</title>
                <meta name="description" content="Breaking bed info mordo" />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <header className={styles.header}>
                    <div>
                        <h1 className={styles.name}>Barking Bed</h1>
                        <nav className={styles.nav}>
                            <Link href="/" className={styles.link}>
                                Search
                            </Link>
                            <Link href="/killers" className={styles.link}>
                                Top Killers
                            </Link>
                        </nav>
                    </div>
                </header>
                <main className={styles.main}>{children}</main>
                <footer className={styles.footer}>
                    Made by{" "}
                    <a href="https://github.com/cateruu" target="_blank" rel="noreferrer">
                        Paweł
                    </a>{" "}
                    and{" "}
                    <a href="https://github.com/chmery" target="_blank" rel="noreferrer">
                        Wiktor
                    </a>
                </footer>
            </body>
        </html>
    );
};

export default RootLayout;

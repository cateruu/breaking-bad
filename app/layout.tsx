import Link from 'next/link';
import styles from './layout.module.css';
import './globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <title>Bearking Bed</title>
        <meta name='description' content='Breaking bed info mordo' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <header className={styles.header}>
          <h1 className={styles.name}>Barking Bed</h1>
          <nav className={styles.nav}>
            <Link href='/' className={styles.link}>
              Search
            </Link>
            <Link href='/killers' className={styles.link}>
              Killers
            </Link>
          </nav>
        </header>
        {children}
        <footer>
          Made by <a href='https://github.com/cateruu'>Paweł</a> and{' '}
          <a href='https://github.com/chmery'>Wiktor</a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;

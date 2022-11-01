'use client';

import styles from './SearchInput.module.css';
import { useState } from 'react';
import Link from 'next/link';

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearchInput = (input: string) => {
    setSearchInput(input);
  };

  return (
    <>
      <input
        type='text'
        placeholder='Name'
        className={styles.input}
        value={searchInput}
        onChange={(e) => handleSearchInput(e.target.value)}
      />
      <div className={styles.buttons}>
        <Link href='/aha' className={styles.button}>
          Search
        </Link>
        <Link href='/aha' className={styles.button}>
          Get Random
        </Link>
      </div>
    </>
  );
};

export default SearchInput;

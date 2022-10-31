'use client';

import styles from './SearchInput.module.css';
import { useState } from 'react';

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
        <button className={styles.button}>Search</button>
        <button className={styles.button}>Get Random</button>
      </div>
    </>
  );
};

export default SearchInput;

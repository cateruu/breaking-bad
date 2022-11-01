'use client';

import { use } from 'react';
import styles from './DeathPage.module.css';

export type DeathType = {
  death_id: number;
  death: string;
  cause: string;
  responsible: string;
  last_words: string;
  season: number;
  episode: number;
  occupation: string[];
  img: string;
  nickname: string;
};

const getRandomDeath = async () => {
  const response = await fetch('https://breakingbadapi.com/api/random-death', {
    cache: 'no-store',
  });

  return response.json();
};

const DeathPage = () => {
  const randomDeath: DeathType = use(getRandomDeath());

  return (
    <section className={styles.death}>
      <img
        src={randomDeath.img}
        alt={randomDeath.death}
        className={styles.image}
      />
      <h2 className={styles.name}>
        {randomDeath.death.split(' ')[0]} {`"${randomDeath.nickname}"`}{' '}
        {randomDeath.death.split(' ')[1]}
      </h2>
      <p className={styles.words}>
        Last words: {`"${randomDeath.last_words}"`}
      </p>
      <button onClick={() => console.log('halo')}>Another one</button>
    </section>
  );
};

export default DeathPage;

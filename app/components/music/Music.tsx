import React from 'react';

import styles from './Music.module.css';
import { myMusic, shows } from './musicArrays';
import MusicCard from './MusicCard';

const Music = () => (
  <section id="music">
    <h2>My music</h2>
    <div className={styles.container}>
      <div className={styles.flexBox}>
        {myMusic.map((item) => (
          <MusicCard
            key={item.name}
            hover={item.hover}
            image={item.image}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
      <iframe
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className={styles.player}
        loading="lazy"
        src="https://open.spotify.com/embed/playlist/0m8kbDywszaeyAOdlf9S30?utm_source=generator"
        title="Spotify Player"
      />
      <h3>Where you can find my music?</h3>
      <div className={styles.flexBox}>
        {shows.map((item) => (
          <MusicCard
            key={item.name}
            hover={item.hover}
            image={item.image}
            link={item.link}
            name={item.name}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Music;

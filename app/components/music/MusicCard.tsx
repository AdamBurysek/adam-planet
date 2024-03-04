import Image from 'next/image';
import React from 'react';

import styles from './Music.module.css';

type Props = {
  name: string;
  image: string;
  link: string;
  hover: string;
};

const MusicCard = ({ name, image, link, hover }: Props) => (
  <a className={styles.musicCard} href={link} rel="noreferrer" target="_blank">
    <p className={styles.musicCardText}>{hover}</p>
    <Image
      alt={name}
      className={styles.musicCardImage}
      height={180}
      src={image}
      width={180}
    />
  </a>
);

export default MusicCard;

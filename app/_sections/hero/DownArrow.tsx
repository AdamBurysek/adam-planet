/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { useLenis } from '@studio-freight/react-lenis';
import Image from 'next/image';
import { useState } from 'react';

import styles from './Hero.module.css';

const DownArrow = () => {
  const [showArrow, setShowArrow] = useState<boolean>(true);

  const lenis = useLenis(({ scroll }) => {
    setShowArrow(scroll === 0);
  });

  const handleDownArrowClick = () => {
    const section: HTMLElement | null = document.querySelector('#about');
    const navHeight: number = 70;
    const position: number = section!.offsetTop - navHeight;
    lenis?.scrollTo(position);
  };

  return (
    <>
      {showArrow ? (
        <button onClick={handleDownArrowClick} type="button">
          <Image
            alt="Down Arrow"
            className={styles.downArrow}
            height={32}
            priority
            src="/down-arrow.svg"
            width={32}
          />
        </button>
      ) : null}
    </>
  );
};

export default DownArrow;

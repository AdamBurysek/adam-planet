'use client';

import { useTransform, useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

import styles from './About.module.css';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start end', 'end start'],
  });

  const imagePostion = useTransform(
    scrollYProgress,
    [0, 1],
    ['-180px', '100px'],
  );

  return (
    <section ref={aboutRef} id="about">
      <h2>About Me</h2>
      <div className={styles.container}>
        <motion.div style={{ y: imagePostion }}>
          <Image
            alt="Adam Planet"
            className={styles.image}
            height={676}
            src="/adam-planet.jpg"
            width={1064}
          />
        </motion.div>
        <div className={styles.aboutTextBox}>
          <p className={styles.aboutText}>
            Adam Planet aka Adam Buryšek is electronic music producer and dj
            from Czech Republic. Mainly focused on liquid and dancefloor Drum &
            Bass. He started with djing in 2005 as dj in hip hop crew. Back in
            time he also competes in scratching and beat juggling competitions
            like ITF or DMC. In 2017, he began producing music and started
            enjoying this journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

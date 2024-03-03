import Image from 'next/image';

import { MotionParagraph } from '../motion/MotionParagraph';

import DownArrow from './DownArrow';
import styles from './Hero.module.css';

const Hero = () => (
  <section id="home">
    <div className={styles.container}>
      <Image
        alt="Adam Planet LogoText"
        className={styles.logoText}
        height={160}
        priority
        src="/adam_planet_logotext.png"
        width={780}
      />
      <MotionParagraph
        animate={{ opacity: 1, x: 0 }}
        className={styles.logoParagraph}
        initial={{ opacity: 0, x: '5vw' }}
        transition={{ duration: 2, delay: 2 }}
      >
        Electronic Music Producer and Dj
      </MotionParagraph>
      <DownArrow />
    </div>
  </section>
);

export default Hero;

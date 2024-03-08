import Image from 'next/image';

import styles from './Footer.module.css';
import { links } from './links';

import './linksStyles.css';

type Link = {
  name: string;
  image: string;
  target: string;
};

const Footer = () => (
  <footer className={styles.container}>
    <div>
      {links.map((link: Link) => (
        <a
          key={link.name}
          aria-label="Link"
          href={link.target}
          rel="noreferrer"
          target="_blank"
          type="button"
        >
          <svg className={`link link_${link.name}`}>
            <use xlinkHref={link.image} />
          </svg>
        </a>
      ))}
    </div>
    <div className={styles.logoContainer}>
      <Image
        alt="Adam Planet Logo"
        className={styles.logo}
        height={80}
        priority
        src="/ap-logo.svg"
        width={80}
      />
      <Image
        alt="Adam Planet LogoText"
        className={styles.logoText}
        height={60}
        priority
        src="/adam_planet_logotext.png"
        width={493}
      />
    </div>
    <p className={styles.text}>
      © Adam Planet 2024 | Created with ❤️ by&nbsp;
      <a
        className={styles.adamLink}
        href="https://www.adamplanet.cz/adamcode"
        rel="noreferrer"
        target="_blank"
      >
        Adam Code.
      </a>
    </p>
  </footer>
);

export default Footer;

'use client';

import { useLenis } from '@studio-freight/react-lenis';
import Image from 'next/image';
import { useState } from 'react';

import HamburgerButton from './Hamburger';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const lenis = useLenis(() => {});

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpened(false);
    const navHeight: number = 70;
    const targetId: string | undefined = e.currentTarget.dataset.target;
    const section: HTMLElement | null = document.querySelector(
      `#${targetId}` || '',
    );
    if (section && lenis) {
      const position: number = section.offsetTop - navHeight;
      lenis.scrollTo(position);
    }
  };

  return (
    <header className={`${styles.navbar} ${menuOpened ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <button onClick={() => lenis?.scrollTo(0)} type="button">
          <Image
            alt="Adam Planet Logo"
            className={styles.logo}
            height={40}
            priority
            src="/ap-logo.svg"
            width={40}
          />
        </button>
        <HamburgerButton
          handleHamburgerClick={handleHamburgerClick}
          menuOpened={menuOpened}
        />
        <nav>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.target}>
                <button
                  data-target={link.target}
                  onClick={handleNavLinkClick}
                  type="button"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

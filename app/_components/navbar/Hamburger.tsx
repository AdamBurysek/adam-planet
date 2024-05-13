import styles from './Hamburger.module.css';

type Props = {
  handleHamburgerClick: () => void;
  menuOpened: boolean;
};

const HamburgerButton = ({ handleHamburgerClick, menuOpened }: Props) => (
  <button
    aria-label="Hamburger"
    className={`${styles.hamburger} ${menuOpened ? styles.isActive : ''}`}
    onClick={handleHamburgerClick}
    type="button"
  >
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </button>
);

export default HamburgerButton;

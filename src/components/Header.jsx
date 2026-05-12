import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.status}>
        <div className={styles.dot}></div>
        <span>SYSTEM ONLINE</span>
      </div>
      <div className={styles.branding}>
        <h1 className={styles.title}>JEDDAH MOTORS</h1>
        <div className={styles.subtitle}>LIVE RACE TRACKER — 2026</div>
      </div>
    </header>
  );
};

export default Header;

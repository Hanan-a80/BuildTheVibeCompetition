import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.links}>
          <a href="#">RACE SCHEDULE</a>
          <a href="#">TRACK INFO</a>
          <a href="#">TICKETS</a>
          <a href="#">CONTACT</a>
        </div>
        <div className={styles.copy}>
          &copy; 2026 JEDDAH MOTORS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

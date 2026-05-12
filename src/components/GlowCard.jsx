import styles from './GlowCard.module.css';

const GlowCard = ({ children, className = '', variant = 'default' }) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`}>
      <div className={styles.glow} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default GlowCard;

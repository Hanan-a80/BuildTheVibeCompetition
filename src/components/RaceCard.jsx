import GlowCard from './GlowCard';
import styles from './RaceCard.module.css';

const RaceCard = ({ carName, time, track, heat, image }) => {
  return (
    <GlowCard className={styles.raceCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={carName} className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.info}>
        <div className={styles.header}>
          <h3 className={styles.carName}>{carName}</h3>
          <div className={styles.timer}>{time}</div>
        </div>
        <div className={styles.footer}>
          <span className={styles.track}>{track}</span>
          <span className={styles.divider}>•</span>
          <span className={styles.heat}>{heat}</span>
        </div>
      </div>
      <div className={styles.glowBorder}></div>
    </GlowCard>
  );
};

export default RaceCard;

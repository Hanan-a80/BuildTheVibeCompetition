import GlowCard from './GlowCard';
import styles from './FeaturedRace.module.css';

const FeaturedRace = ({ carName, time, subtitle, image }) => {
  return (
    <GlowCard className={styles.featuredCard} variant="featured">
      <div className={styles.imageContainer}>
        <img src={image} alt={carName} className={styles.image} />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.badge}>FEATURED RACE</div>
        <h2 className={styles.carName}>{carName}</h2>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.timerContainer}>
          <span className={styles.startsIn}>STARTS IN</span>
          <div className={styles.timer}>{time}</div>
        </div>
        <button className={styles.cta}>VIEW LIVE STREAM</button>
      </div>
    </GlowCard>
  );
};

export default FeaturedRace;

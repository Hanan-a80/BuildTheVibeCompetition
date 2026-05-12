import styles from './LiveTicker.module.css';

const LiveTicker = () => {
  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerContent}>
        <div className={styles.item}>
          <div className={styles.liveIndicator}>
            <div className={styles.pulse}></div>
            LIVE
          </div>
          <span className={styles.label}>CURRENT RACE:</span>
          <span className={styles.value}>HURACÁN EVO SPRINT</span>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.item}>
          <span className={styles.label}>LOCATION:</span>
          <span className={styles.value}>GATE 3 NORTH</span>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.item}>
          <span className={styles.label}>EXPECTED TIME:</span>
          <span className={styles.value}>14:30</span>
        </div>
        
        <div className={styles.divider}></div>
        
        <div className={styles.item}>
          <span className={styles.label}>SEATS AVAILABLE:</span>
          <span className={styles.value}>240</span>
        </div>
      </div>
    </div>
  );
};

export default LiveTicker;

import React, { useState, useEffect } from 'react';
import styles from './DigitalClock.module.css';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');
    return `${hh}:${mm}:${ss}`;
  };

  return (
    <div className={styles.clockContainer}>
      <div className={styles.label}>SYSTEM TIME</div>
      <div className={styles.time}>{formatTime(time)}</div>
      <div className={styles.scanline}></div>
    </div>
  );
};

export default DigitalClock;

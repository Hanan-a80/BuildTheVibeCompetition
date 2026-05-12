import styles from './RaceGrid.module.css';

const RaceGrid = ({ children }) => {
  return (
    <div className={styles.gridContainer}>
      {children}
    </div>
  );
};

export default RaceGrid;

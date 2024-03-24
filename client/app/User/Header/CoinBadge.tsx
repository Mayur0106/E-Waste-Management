import styles from '../styles/CoinBadge.module.css'; // Import CSS file for styling


const CoinBadge = ({ count }) => {
  return (
    <div className={styles.coinBadge}>
      <span className={styles.coinCount}>{count}</span>
    </div>
  );
};

export default CoinBadge;
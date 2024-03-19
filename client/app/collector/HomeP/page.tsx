import Link from 'next/link';
import styles from '../styles/HomeP.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to E-Waste Management</h1>
      <p>Are you a User or a Collector?</p>
      <div className={styles.options}>
        {/* <Link href="/user"> */}
          <a className={styles.option}>
            <div className={styles.optionContent}>
              <h2>User</h2>
              <p>Find out how you can dispose of your e-waste responsibly.</p>
            </div>
          </a>
        {/* </Link> */}
        {/* <Link href="/collector"> */}
          <a className={styles.option}>
            <div className={styles.optionContent}>
              <h2>Collector</h2>
              <p>Learn how you can contribute by collecting e-waste from users.</p>
            </div>
          </a>
        {/* </Link> */}
      </div>
    </div>
  );
}
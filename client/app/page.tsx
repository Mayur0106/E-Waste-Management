"use client";

// import Image from "next/image";
import Link from "next/link";
 import styles from './styles/Home.module.css';
 import { useRouter } from 'next/router';
//import Collector from "./Collector/page";
// import home from "./User/HomeP/page";
// import collector from "./Collector/page";

export default function Home() {

  const handleClick = () => {
    // Do something when the box is clicked
    console.log('Box clicked!');
  };

  return (
    <div className={styles.container}>
      
    <h1>Welcome to E-Waste Management</h1>
    <p>Are you a User or a Collector?</p>
    <div className={styles.options}>

    <Link href="/User" className={styles.option} >
        <div onClick={handleClick} >
          <div className={styles.optionContent}>
            <h2>User</h2>
            <p>Find out how you can dispose of your e-waste responsibly.</p>
          </div>
        </div>
      </Link>
        <Link href="/Collector" className={styles.option} >
        <div onClick={handleClick} >
          <div className={styles.optionContent}>
            <h2>Collector</h2>
            <p>Learn how you can contribute by collecting e-waste from users.</p>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
}

/*
<Link href="/login">
        <button className={layout.signin} type="button">
          Sign In
        </button>
      </Link>
      <div>
        <HomeMiddle />
      </div> 
      {/* <div className={layout.card} >{CardContainer()}</div> */
   /*   <div className={layout.card}>
        <CardContainer />
      </div>
      <div>{Footer()}</div> */
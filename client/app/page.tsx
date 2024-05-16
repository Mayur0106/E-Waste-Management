"use client";

// import Image from "next/image";
import Link from "next/link";
import "./styles/globals.css";
import "animate.css";
import styles from "./styles/Home.module.css";
import { useRouter } from "next/router";
//import Collector from "./Collector/page";
// import home from "./User/HomeP/page";
// import collector from "./Collector/page";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    // Do something when the box is clicked
    console.log("Box clicked!");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.fstyleP}>
          <h1 className="animate__animated animate__fadeInTopLeft">
            {" "}
            Welcome to E-Waste Management
          </h1>
        </div>
        <div className={styles.fstyleC}>
          <p className="animate__animated animate__fadeInTopRight">
            {" "}
            Are you a User or a Collector?
          </p>
        </div>

        <div className={styles.options}>
      <Link href="/User" className={styles.option} passHref>
        <div>
          <Image
            priority
            src="/single_user.png"
            alt="User"
            width={35}
            height={300}
          />
          <div className={styles.optionContent}>
            <h2>User</h2>
            <p>Find out how you can dispose of your e-waste responsibly.</p>
          </div>
        </div>
      </Link>
      <Link href="/collector" className={styles.option} passHref>
        <div>
          <Image
            priority
            src="/multiple_user.png"
            alt="Collector"
            width={64}
            height={37}
          />
          <div className={styles.optionContent}>
            <h2>Collector</h2>
            <p>Learn how you can contribute by collecting e-waste from users.</p>
          </div>
        </div>
      </Link>
    </div>



      </div>
    </>
  );
}

/*
<Link href="/login">

         className={`${styles.optionContent} ${styles.mainContainer}`

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

"use client";

// import Image from "next/image";
import Link from "next/link";
import HomeMiddle from "./HomeMiddle/page";
import CardContainer from "./Card/page";
import layout from "./styles/layout.module.css";
import Footer from "./Footer/page";
export default function Home() {
  return (
    <div>
      <div>
        <HomeMiddle />
      </div>
      {/* <div className={layout.card} >{CardContainer()}</div> */}
      <div className={layout.card}>
        <CardContainer />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

"use client";

// import Image from "next/image";
import Link from "next/link";
import Middle from "./Name/page";
import CardContainer from "./Card/page";
import layout from "./styles/layout.module.css";
import Footer from "./Footer/page";
export default function Home() {
  return (
    <div>
     <Link href="/login">  
        <button
           className={layout.signin}
          type="button">
          Sign In
        </button>
      </Link>
      <div>{Middle()}</div>
      <div className={layout.card} >{CardContainer()}</div>
      <div>{Footer()}</div>
    </div>
   
  );
}

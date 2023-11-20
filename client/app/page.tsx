"use client";

// import Image from "next/image";
import Link from "next/link";
import Middle from "./Name/page";
import Mainpage from "./MainPage/page";
import layout from "./styles/layout.module.css";

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
     
    </div>
   
  );
}

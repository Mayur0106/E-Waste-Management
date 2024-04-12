"use client";

import "../styles/globals.css";
import "animate.css";
import { Roboto } from "next/font/google";
import homemiddle from "../styles/HomeMiddle.module.css";
import mpage from "../styles/MainPage.module.css";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState, useEffect, use } from "react";


export default function HomeMiddle() {

  const [login, setLogin] = useState(false);
  // const coinCount = 16;

  const userFromLocalStorage = localStorage.getItem("collector");
  const tokenFromLocalStorage = localStorage.getItem("collectorToken");

  useEffect(() => {
    if (!tokenFromLocalStorage) {
      // router.push("/User/login");
      setLogin(false);
    } else {
      setLogin(true);
    }

    // Respond to the "storage" event
    function storageEventHandler(event: StorageEvent) {
      if (event.key === "token") {
        const token = JSON.parse(event.newValue as string);
        setLogin(true);
      }
    }

    // Hook up the event handler
    window.addEventListener("storage", storageEventHandler);

    // Clean up: Remove the event handler when the component unmounts
    return () => {
      window.removeEventListener("storage", storageEventHandler);
    };
  }, []);



  return (
    <>
      <div>
      {!login && (
          <div>
        <Link href="/collector/collectorLogin">
        <button className={homemiddle.signin} type="button">
          Sign In
        </button>
        </Link>
        </div>
        )}

        <div className={homemiddle.logo}>
          <Image
            priority={true}
            className="h-auto w-auto"
            src="/logo2.png"
            alt="Description of the image"
            width={235}
            height={300}
          />
        </div>
        <div className={homemiddle.fstyle}>
          <h1 className="animate__animated animate__backInDown">
            {" "}
            E-waste Recycling
          </h1>
        </div>
        <div className={mpage.buttonbody}>
          <Link href={!login ? "/collector/collectorSignUp" : "/collector/orders"}>
            <button className={mpage.cssbutton}>
              Get started
              <div className={mpage.icon}>
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </Link>
        </div>

      </div>
    </>
  );
}

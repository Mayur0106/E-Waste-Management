import "../styles/globals.css";
import "animate.css";
import { Roboto } from "next/font/google";
import homemiddle from "../styles/HomeMiddle.module.css";
import mpage from "../styles/MainPage.module.css";
import Image from "next/image";
import Link from "next/link";

export default function HomeMiddle() {
  return (
    <>
      <div>
        <div className={homemiddle.logo}>
          <Image
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
          <Link href="/userSignUp">
            <button className={mpage.cssbutton}>
              {" "}
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

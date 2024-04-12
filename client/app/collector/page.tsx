import Link from "next/link";
import styles from "./styles/Home.module.css";
import layout from "./styles/layout.module.css";
import HomeMiddle from "./HomeMiddle/page";

export default function collector() {
  return (
    <div>
      {/* <Link href="/collector/collectorLogin" className={layout.signin}>
        <button type="button">Sign In</button>
      </Link> */}
      <div>
        <HomeMiddle />
      </div>
    </div>
  );
}

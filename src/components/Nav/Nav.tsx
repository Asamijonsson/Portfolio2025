"use client";

// import Link from "next/link";
// import { FaHome } from "react-icons/fa";
import style from "./Nav.module.css";
// import colorstyle from "../Color.module.css";

export const Nav = () => {
  return (
    <div className={style.navbar}>
      {/* <Link href="/" className={style.link}>
        <h3 className={colorstyle.primary}>
          <FaHome />
        </h3>
      </Link>
      <Link href="works" className={style.link}>
        <h3 className={colorstyle.primary}>Works</h3>
      </Link>
      <Link id="ffxiv" href="/ffxiv" className={style.link}>
        <h3 className={colorstyle.primary}>Look up FFXIVitems!</h3>
      </Link> */}
      {/* <Link id="marketBoard" to="marketboard" className={style.link}reloadDocument>
      <h3 className={colorstyle.primary}>Look up Market Board(coming soon)</h3>
      </Link>    */}
      {/* <Link href="/pokemon" className={style.link}>
        <h3 className={colorstyle.primary}>Look up Pokemon</h3>
      </Link>
      <Link href="/aboutme" className={style.link}>
        <h3 className={colorstyle.primary}>About</h3>
      </Link> */}
    </div>
  );
};

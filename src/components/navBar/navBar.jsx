// import { useState } from "react";
import { Link } from "react-router-dom";
import NavBarMenu from "./navBarMenu";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navbar}>
        <div className={styles.row}>
        <Link to="/">Logo</Link>
          <NavBarMenu/>
          <span>Card:</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

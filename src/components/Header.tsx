import React from "react";
import logo from "../assets/images/valtech.svg";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="Valtech logo"
        width={180}
        height={40}
        className={styles.logo}
      />
    </header>
  );
};

export default Header;

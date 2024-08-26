import React from "react";
import logo from "../assets/images/valtech.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header">
      <Image
        src={logo}
        alt="Valtech logo"
        width={180}
        height={40}
        className="logo"
      />
    </header>
  );
};

export default Header;

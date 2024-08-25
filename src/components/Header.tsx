import React from "react";
import logo from "../assets/images/valtech.svg";
import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{
        height: "100px",
        backgroundColor: "#ff5959",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src={logo}
        alt="Valtech logo"
        width={180}
        height={40}
        style={{ marginLeft: "120px" }}
      />
    </header>
  );
};

export default Header;

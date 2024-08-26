"use client";

import React from "react";
import Image from "next/image";
import { useContent } from "../context/IndexContext";

const Footer = () => {
  const content = useContent();

  const footerContent = content.footer;

  if (!footerContent) return null;

  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${footerContent.background})`,
      }}
    >
      <p className="footerText">{footerContent.text}</p>
    </footer>
  );
};

export default Footer;

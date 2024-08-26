"use client";

import React from "react";
import { useContent } from "../context/IndexContext";

const Footer = () => {
  const content = useContent();

  const footerContent = content.footer;

  if (!footerContent) return null;

  const backgroundImageUrl = `https://placehold.co/1440x400/black/black`; //here change it so i use the Image tag instead for performance

  return (
    <footer
      style={{
        width: "100%", // Explicitly set the width
        height: "400px", // Explicitly set the height           fix ici le pb d'opti si l'ecran ne fait pas exactement 1440
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "192px",
        overflow: "hidden",
      }}
    >
      <p style={{ fontSize: "16px" }}>{footerContent.text}</p>
    </footer>
  );
};

export default Footer;

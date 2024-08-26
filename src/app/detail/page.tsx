"use client"; //why use client ?

import React from "react";
import "../../app/globals.css";
import Image from "next/image";
import {
  useArticleContent,
  ArticleContentProvider,
} from "@/context/ArticleContext";
import Carousel from "@/components/Carousel/Carousel";
import DetailBanner from "@/components/DetailBanner/DetailBanner";

const DetailPage = () => {
  const articleContent = useArticleContent();
  if (!articleContent) return <p>Loading...</p>;

  const heroContent = articleContent.content.find(
    (item) => item.type === "HERO_ARTICLE"
  );

  const highlightedParagraph = articleContent.content.find(
    (item) => item.type === "PARAGRAPH" && item.highlight
  );

  const regularParagraph = articleContent.content.find(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  );

  const carouselContent = articleContent.content.find(
    (item) => item.type === "CAROUSEL"
  );

  const lastParagraph = articleContent.content.filter(
    (item) => item.type === "PARAGRAPH" && !item.highlight
  )[1];

  const img = "https://placehold.co/466x480/D1D3CA/D1D3CA/png";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1196px",
          width: "100%",
        }}
      >
        <div
          style={{
            marginTop: "80px",
          }}
        >
          <p>Back</p>
        </div>

        {/* Banner */}
        <div>
          <DetailBanner />
        </div>
        <div>
          {/* Carousel */}
          {carouselContent && <Carousel items={carouselContent.items} />}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;

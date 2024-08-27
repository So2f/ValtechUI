import React from "react";
import Image from "next/image";
import styles from "./detailBanner.module.css";
import { useArticleContent } from "@/context/ArticleContext";

const DetailBanner = () => {
  const articleContent = useArticleContent();

  const heroContent = articleContent?.content.find(
    (item) => item.type === "HERO_ARTICLE"
  );

  if (!heroContent) return null;

  return (
    <div className={styles.bannerContainer}>
      <Image
        src={`${heroContent?.sideAsset?.url}/png`}
        alt="Side Image"
        width={466}
        height={480}
        className={styles.sideImage}
      />
      <div className={styles.backgroundContainer}>
        <Image
          src={`${heroContent?.backgroundAsset?.url}/png`}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className={styles.backgroundImage}
        />
        <div className={styles.textContainer}>
          <p className={styles.subtitle}>{heroContent?.subtitle}</p>
          <h1 className={styles.title}>{heroContent?.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;

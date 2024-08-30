import React from 'react';
import Image from 'next/image';
import styles from './detailBanner.module.css';
import { useArticleContent } from '@/context/ArticleContext';

const DetailBanner = () => {
  const articleContent = useArticleContent();

  const heroContent = articleContent?.content.find(
    (item) => item.type === 'HERO_ARTICLE'
  );

  if (!heroContent) return null;

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.sideImage}>
        <Image
          src={`${heroContent?.sideAsset?.url}/png`}
          alt="Side Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.backgroundContainer}>
        <Image
          src={`${heroContent?.backgroundAsset?.url}/png`}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />

        <div className={styles.textContainer}>
          <p className={`${styles.subtitle} text-large`}>
            {heroContent?.subtitle}
          </p>
          <h1 className={`${styles.title} heading-medium`}>
            {heroContent?.title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;

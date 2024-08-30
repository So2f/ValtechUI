import React from 'react';
import Image from 'next/image';
import { useContent } from '../../context/IndexContext';
import styles from './banner.module.css';

const Banner = () => {
  const { content } = useContent();

  const heroContent = content.find((section) => section.type === 'HERO');

  if (!heroContent) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContainer}>
        <div
          className={styles.backgroundImage}
          style={{
            backgroundImage: `url(${heroContent.backgroundAsset?.url || ''})`,
          }}
        >
          <div className={styles.textContent}>
            <h1 className="heading-large">{heroContent.title}</h1>
            <p className="text-large">{heroContent.subtitle}</p>
            <p className="text-large">{heroContent.description}</p>
          </div>
        </div>

        {heroContent.foregroundAsset?.url && (
          <div className={styles.foregroundImageContainer}>
            <Image
              src={`${heroContent.foregroundAsset?.url}/png`}
              alt={heroContent.foregroundAsset.alt || 'Foreground image'}
              layout="fill"
              className={styles.foregroundImage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;

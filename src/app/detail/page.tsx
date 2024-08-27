'use client';

import React from 'react';
import '../../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { useArticleContent } from '@/context/ArticleContext';
import Carousel from '@/components/Carousel/Carousel';
import DetailBanner from '@/components/DetailBanner/DetailBanner';
import Arrow from '@/assets/images/arrow.svg';
import styles from './page.module.css';
import { CarouselItem } from '@/types/types';

const DetailPage = () => {
  const articleContent = useArticleContent();
  if (!articleContent) return <p>Loading...</p>;

  const heroContent = articleContent.content.find(
    (item) => item.type === 'HERO_ARTICLE'
  );

  const highlightedParagraph = articleContent.content.find(
    (item) => item.type === 'PARAGRAPH' && item.highlight
  );

  const regularParagraph = articleContent.content.find(
    (item) => item.type === 'PARAGRAPH' && !item.highlight
  );

  const carouselContent = articleContent.content.find(
    (item) => item.type === 'CAROUSEL'
  );

  const lastParagraph = articleContent.content.filter(
    (item) => item.type === 'PARAGRAPH' && !item.highlight
  )[1];

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.topMargin}>
          <div className={`${styles.flexRow} text-large`}>
            <Link href="/">
              <Image src={Arrow} alt="Back Button" width={20} height={15} />
            </Link>
            <p className={styles.backText}>Back</p>
          </div>
        </div>

        {/* Banner */}
        <div>
          <DetailBanner />
        </div>

        {/* Author div */}
        <div>
          <div className={`${styles.authorContainer} text-small`}>
            <p>{heroContent?.publishingDate}</p>
            <p>Author: {heroContent?.author}</p>
          </div>
        </div>

        {/* Highlighted Paragraph */}
        <blockquote
          className={`${styles.highlightedParagraph} heading-medium`}
          dangerouslySetInnerHTML={{
            __html: highlightedParagraph?.text || '',
          }}
        />

        {/* Not highlighted Paragraph */}
        <div className={styles.regularParagraphContainer}>
          <h2
            className={`${styles.regularParagraph} text-large`}
            dangerouslySetInnerHTML={{
              __html: regularParagraph?.text || '',
            }}
          />
        </div>

        {/* Carousel */}
        <div>
          {carouselContent && (
            <Carousel items={carouselContent.items as CarouselItem[]} />
          )}
        </div>

        {/* Last Paragraph */}
        <div className={styles.lastParagraphContainer}>
          <h2
            className={`${styles.lastParagraph} text-large`}
            dangerouslySetInnerHTML={{
              __html: lastParagraph?.text || '',
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default DetailPage;

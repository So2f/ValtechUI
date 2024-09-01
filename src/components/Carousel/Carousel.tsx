'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';
import leftArrow from '@/assets/images/arrow.svg';
import rightArrow from '@/assets/images/arrow.svg';
import { CarouselItem } from '@/types/types';

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const handlePrevClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setFadeOut(false);
    }, 500);
  };

  const handleNextClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setFadeOut(false);
    }, 500);
  };

  const translateX = -currentIndex * 100;

  return (
    <div className={styles.carouselContainer}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(${translateX}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.carouselSlide}>
            <Image
              src={`${item.url}/png`}
              alt={item.alt}
              width={1195}
              height={454}
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className={`${styles.arrowButton} ${styles.leftArrow}`}
      >
        <Image src={leftArrow} alt="Previous" layout="fill" />
      </button>

      <button
        onClick={handleNextClick}
        className={`${styles.arrowButton} ${styles.rightArrow}`}
      >
        <Image src={rightArrow} alt="Next" layout="fill" />
      </button>

      <div
        className={`${styles.descriptionContainer} ${fadeOut ? styles['fade-out'] : ''}`}
      >
        <p>{items[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Carousel;

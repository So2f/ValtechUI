import React, { useState } from 'react';
import Image from 'next/image';
import styles from './carousel.module.css';
import leftArrow from '@/assets/images/arrow.svg';
import rightArrow from '@/assets/images/arrow.svg';

//type the item to avoid errors
interface CarouselItem {
  url: string;
  alt: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carouselContainer}>
      {/* Left Arrow */}
      <button
        onClick={handlePrevClick}
        className={`${styles.arrowButton} ${styles.leftArrow}`}
      >
        <Image
          src={leftArrow.src}
          alt="Previous"
          width={40}
          height={40}
          className={styles.arrowIcon}
        />
      </button>

      {/* Image */}
      <Image
        src={`${items[currentIndex].url}/png`}
        alt={items[currentIndex].alt}
        width={1195}
        height={400}
        className={styles.carouselImage}
      />

      {/* Description */}
      <div className={styles.descriptionContainer}>
        <p>{items[currentIndex].description}</p>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        className={`${styles.arrowButton} ${styles.rightArrow}`}
      >
        <Image
          src={rightArrow.src}
          alt="Next"
          width={40}
          height={40}
          className={styles.arrowIcon}
        />
      </button>
    </div>
  );
};

export default Carousel;

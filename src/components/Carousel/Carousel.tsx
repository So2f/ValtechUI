import React, { useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import leftArrow from "@/assets/images/arrow.svg";
import rightArrow from "@/assets/images/arrow.svg";

const Carousel = ({ items }) => {
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
        <img src={leftArrow.src} alt="Previous" className={styles.arrowIcon} />
      </button>

      {/* Image */}
      <div className={styles.carouselImage}>
        <Image
          src={`${items[currentIndex].url}/png`}
          alt={items[currentIndex].alt}
          width={1195}
          height={400}
        />
      </div>

      {/* Description */}
      <div className={styles.descriptionContainer}>
        <p>{items[currentIndex].description}</p>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNextClick}
        className={`${styles.arrowButton} ${styles.rightArrow}`}
      >
        <img src={rightArrow.src} alt="Next" className={styles.arrowIcon} />
      </button>
    </div>
  );
};

export default Carousel;

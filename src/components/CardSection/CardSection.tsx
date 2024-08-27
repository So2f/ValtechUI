import React from 'react';
import Link from 'next/link';
import { useContent } from '../../context/IndexContext';
import styles from './cardSection.module.css';

const CardSection = () => {
  const { content } = useContent();

  const cardGridContent = content.find(
    (section) => section.type === 'CARD_GRID'
  );

  if (!cardGridContent) return null;

  return (
    <section className={styles.cardSection}>
      <div>
        <h2 className={styles.sectionTitle}>{cardGridContent.title}</h2>

        <div className={styles.cardGrid}>
          {cardGridContent.cards?.map((card, index) => {
            const isLargeCard = index === 0 || index === 5;

            return (
              <div
                key={index}
                className={`${styles.card} ${
                  isLargeCard ? styles.largeCard : styles.smallCard
                }`}
                style={{
                  backgroundImage: `url(https://placehold.co/${
                    isLargeCard ? 588 : 284
                  }x479/D1D3CA/D1D3CA)`,
                }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.titleSubtitle}>
                    <h2 className="text-large">{card.subtitle}</h2>
                    <h3 className="heading-small">{card.title}</h3>
                  </div>

                  <div className={styles.descriptionContainer}>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>

                  <div className={styles.buttonContainer}>
                    <Link
                      href="/detail"
                      className={styles.button}
                      aria-label={`Explore more about ${card.title}`}
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardSection;

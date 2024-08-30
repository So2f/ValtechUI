import React from 'react';
import Link from 'next/link';
import { useContent } from '../../context/IndexContext';
import styles from './cardSection.module.css';

type Card = {
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset?: {
    url: string;
    alt: string;
  };
  cta?: {
    url: string;
    text: string;
    ariaLabel: string;
    target: string;
  };
};

type CardGridContent = {
  type: string;
  title: string;
  cards: Card[];
};

type ContentContextType = {
  content: CardGridContent[];
};

const CardSection: React.FC = () => {
  const { content } = useContent() as ContentContextType;

  const cardGridContent = content.find(
    (section) => section.type === 'CARD_GRID'
  );

  if (!cardGridContent) return null;

  return (
    <div className={styles.cardSection}>
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
                backgroundImage: `url(${card.backgroundAsset?.url})`,
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

                {card.cta && (
                  <div className={styles.buttonContainer}>
                    <Link
                      href={card.cta.url}
                      className={styles.button}
                      aria-label={card.cta.ariaLabel}
                    >
                      {card.cta.text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;

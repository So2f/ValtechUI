import React from "react";
import Link from "next/link";
import { useContent } from "../../context/IndexContext";
<<<<<<< HEAD
import styles from "./cardSection.module.css";
=======
import styles from "./cardSection.module.css"; // Import the CSS module
>>>>>>> 6b37cc560f1aeef747c8a30b76f99547be01fade

const CardSection = () => {
  const { content } = useContent();

  const cardGridContent = content.find(
    (section) => section.type === "CARD_GRID"
  );

  if (!cardGridContent) return null;

  return (
    <section className={styles.cardSection}>
      <div>
        <h2 className={styles.sectionTitle}>{cardGridContent.title}</h2>

        <div className={styles.cardGrid}>
          {cardGridContent.cards?.map((card, index) => {
<<<<<<< HEAD
            const isLargeCard = index === 0 || index === 5;
=======
            const isLargeCard = index === 0 || index === 5; // Apply largeCard to the 1st and 6th cards
>>>>>>> 6b37cc560f1aeef747c8a30b76f99547be01fade

            return (
              <div
                key={index}
                className={`${styles.card} ${
                  isLargeCard ? styles.largeCard : styles.smallCard
<<<<<<< HEAD
                }`}
=======
                }`} // Apply largeCard or smallCard class conditionally
>>>>>>> 6b37cc560f1aeef747c8a30b76f99547be01fade
                style={{
                  backgroundImage: `url(https://placehold.co/${
                    isLargeCard ? 588 : 284
                  }x479/D1D3CA/D1D3CA)`,
                }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.titleSubtitle}>
                    <p style={{ marginBottom: "20px" }}>{card.subtitle}</p>
                    <p>{card.title}</p>
                  </div>

                  <div className={styles.descriptionContainer}>
                    <p className={styles.cardDescription}>{card.description}</p>
                  </div>

                  <div className={styles.buttonContainer}>
                    <Link href="/details" className={styles.button}>
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

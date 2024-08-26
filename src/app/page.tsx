"use client";
import Banner from "@/components/Banner/Banner";
import styles from "./page.module.css";
import ContentProviderWrapper from "./ContentProviderWrapper";
import CardSection from "@/components/CardSection/CardSection";

export default function Home() {
  return (
    <ContentProviderWrapper>
      <main className={styles.main}>
        <Banner />
<<<<<<< HEAD
=======

>>>>>>> 6b37cc560f1aeef747c8a30b76f99547be01fade
        <CardSection />
      </main>
    </ContentProviderWrapper>
  );
}

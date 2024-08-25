"use client";
import Banner from "@/components/Banner/Banner";
import styles from "./page.module.css";
import ContentProviderWrapper from "./ContentProviderWrapper";

export default function Home() {
  return (
    <ContentProviderWrapper>
      <main className={styles.main}>
        <Banner />
      </main>
    </ContentProviderWrapper>
  );
}

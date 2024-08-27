'use client';
import Banner from '@/components/Banner/Banner';
import styles from './page.module.css';
// import ContentProviderWrapper from './ContentProviderWrapper';
import CardSection from '@/components/CardSection/CardSection';

export default function Home() {
  return (
    // <ContentProviderWrapper>
    <main className={styles.main}>
      <Banner />
      <CardSection />
    </main>
    // </ContentProviderWrapper>
  );
}

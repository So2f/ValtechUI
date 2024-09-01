'use client';
import Banner from '@/components/Banner/Banner';
import styles from './page.module.css';
// import ContentProviderWrapper from './ContentProviderWrapper';
import CardSection from '@/components/CardSection/CardSection';
import Separator from '@/components/Separator/Separator';

export default function Home() {
  return (
    // <ContentProviderWrapper>
    <main className={styles.main}>
      <Banner />
      <Separator />
      <CardSection />
    </main>
    // </ContentProviderWrapper>
  );
}

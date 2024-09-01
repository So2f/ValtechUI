'use client';

import Banner from '@/components/Banner/Banner';
import styles from './page.module.css';
import CardSection from '@/components/CardSection/CardSection';
import Separator from '@/components/Separator/Separator';

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Separator />
      <CardSection />
    </main>
  );
}

'use client';

import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import StyledComponentsRegistry from './registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Header />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

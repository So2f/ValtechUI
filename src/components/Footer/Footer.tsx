'use client';

import React from 'react';
import { useContent } from '../../context/IndexContext';
import styles from './footer.module.css';

const Footer = () => {
  const content = useContent();
  const footerContent = content.footer;

  if (!footerContent) return null;

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: `url(${footerContent.background})`,
      }}
    >
      <p className={styles.footerText}>{footerContent.text}</p>
    </footer>
  );
};

export default Footer;

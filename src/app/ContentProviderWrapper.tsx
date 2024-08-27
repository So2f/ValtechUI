'use client';

import React from 'react';
import { ContentProvider } from '../context/IndexContext';

export default function ContentProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContentProvider>{children}</ContentProvider>;
}

import React, { createContext, useContext, ReactNode } from 'react';
import indexData from '../data/index.json';

type ContentType = typeof indexData;

const ContentContext = createContext<ContentType>(indexData);

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ContentContext.Provider value={indexData}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  return useContext(ContentContext);
};

import React, { createContext, useContext, ReactNode } from 'react';
import articleData from '../data/article.json';

type ArticleContentType = typeof articleData;

const ArticleContentContext = createContext<ArticleContentType>(articleData);

export const ArticleContentProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ArticleContentContext.Provider value={articleData}>
      {children}
    </ArticleContentContext.Provider>
  );
};

export const useArticleContent = () => {
  return useContext(ArticleContentContext);
};

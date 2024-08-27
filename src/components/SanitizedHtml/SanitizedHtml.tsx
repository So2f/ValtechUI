'use client';

import React from 'react';

interface SanitizedHtmlProps {
  content: string;
}

const SanitizedHtml: React.FC<SanitizedHtmlProps> = ({ content }) => {
  // const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default SanitizedHtml;

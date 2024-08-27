"use client";

import React from "react";

const SanitizedHtml = ({ content }) => {
  // const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default SanitizedHtml;

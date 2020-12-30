import React from 'react';

export const GalleryImage = ({ className, alt, src }) => {
  return <img className={className} alt={alt} src={src} />;
};

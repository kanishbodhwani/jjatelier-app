import { useState, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const LazyImage = ({ src, alt, className }) => {

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={`${className}`}
    />
  );
};
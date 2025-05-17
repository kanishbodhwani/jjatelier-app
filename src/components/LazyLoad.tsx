import { useState, useEffect, useRef } from 'react';

export const LazyImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !loaded) {
          const img = new Image();
          img.src = src;
          img.onload = () => {
            if (imgRef.current) {
              imgRef.current.src = src;
              setLoaded(true);
            }
          };
          observer.disconnect();
        }
      });
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      alt={alt}
      className={`${className} ${!loaded ? 'bg-gray-100 animate-pulse' : ''}`}
    />
  );
};
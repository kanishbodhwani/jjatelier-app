import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const imageCache: Record<string, boolean> = {};

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  small?: boolean;
  bigHeader?: boolean;
  onClickButton?: () => void;
  isExiting?: boolean;
  onAnimationEnd?: () => void;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink = '/jj-atelier',
  small = false,
  bigHeader = false,
  isExiting = false,
  onAnimationEnd,
  onClickButton
}: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(() => {
    return imageCache[backgroundImage] || false;
  });

  useEffect(() => {
    if (imageCache[backgroundImage]) {
      setImageLoaded(true);
      return;
    }

    const img = new Image();
    let timeout: NodeJS.Timeout;

    const handleLoad = () => {
      clearTimeout(timeout);
      imageCache[backgroundImage] = true;
      setImageLoaded(true);
    };

    const handleError = () => {
      console.error('Failed to load hero image');
      clearTimeout(timeout);
    };

    timeout = setTimeout(() => {
      console.warn('Image loading timed out');
      setImageLoaded(true);
    }, 5000);

    img.src = backgroundImage;
    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      clearTimeout(timeout);
      img.onload = null;
      img.onerror = null;
    };
  }, [backgroundImage]);


  return (
    <section 
      className={`hero-container ${small ? 'h-[65vh]' : onClickButton ? 'h-[100vh]' : 'h-[80vh]'} overflow-hidden ${isExiting ? 'animate-frontpage-exit' : ''}`} 
      onAnimationEnd={onAnimationEnd}
    >
      <div 
        className="hero-bg absolute inset-0 bg-cover bg-center transition-opacity duration-300"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          opacity: imageLoaded ? 1 : 0,
        }}
      >
        <div className={`absolute inset-0 bg-black/30 ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`} />
      </div>
      
      <div className="relative z-10 text-center px-4 h-full flex flex-col justify-center">
        <h2 className={`cormorant-sc-font text-2xl ${small || bigHeader ? 'md:text-6xl' : 'md:text-4xl'} text-white mb-4 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {subtitle}
        </h2>
        
        <h1 className={`cormorant-sc-font text-5xl md:text-7xl text-white mb-8 transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {title || "WORLD OF JJ"}
        </h1>
        
        {buttonText && (
          <div className={`transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <Link to={buttonLink}>
              <button onClick={onClickButton} className={`btn-primary-light ${onClickButton && 'rounded-full'}`}>
                {buttonText}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
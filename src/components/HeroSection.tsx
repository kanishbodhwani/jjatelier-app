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
      cleanup();
    };

    const handleError = () => {
      console.error('Failed to load hero image');
      cleanup();
    };

    const cleanup = () => {
      img.onload = null;
      img.onerror = null;
      clearTimeout(timeout);
    };

    timeout = setTimeout(() => {
      console.warn('Image loading timed out');
      cleanup();
    }, 10000);

    img.src = backgroundImage;
    img.onload = handleLoad;
    img.onerror = handleError;

    return cleanup;
  }, [backgroundImage]);

  return (
    <>
      {!imageLoaded && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50 animate-fade-out">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}

      <section 
        className={`hero-container ${small ? 'h-[65vh]' : onClickButton ? 'h-[100vh]' : 'h-[80vh]'} overflow-hidden ${isExiting ? 'animate-frontpage-exit' : ''}`} 
        onAnimationEnd={onAnimationEnd}
        style={{ visibility: imageLoaded ? 'visible' : 'hidden' }}
      >
        {imageLoaded && (
          <>
            <div 
              className="hero-bg"
              style={{ 
                backgroundImage: `url(${backgroundImage})`,
                opacity: 1,
                transition: 'opacity 0.3s ease-in-out'
              }}
            >
              <div className={`absolute inset-0 bg-black/30 ${isExiting ? 'animate-fade-out' : 'animate-fade-in'}`} />
            </div>
            
            <div className="z-10 text-center px-4">
              <h2 className={`cormorant-sc-font text-2xl ${small || bigHeader ? 'md:text-6xl' : 'md:text-4xl'}  ${isExiting ? 'animate-fade-out-up' : 'animate-fade-in-up'} text-white mb-4 opacity-0 animate-delay-300`}>
                {subtitle}
              </h2>
              
              <h1 className={`cormorant-sc-font text-5xl md:text-7xl text-white mb-8 opacity-0 ${isExiting ? 'animate-fade-out-up' : 'animate-fade-in-up'} animate-delay-500`}>
                {title || "WORLD OF JJ"}
              </h1>
              
              {buttonText && (
                <div className={`opacity-0 animate-fade-in-up animate-delay-700 ${isExiting ? 'animate-fade-out' : 'animate-fade-in-up'}`}>
                  <Link to={buttonLink}>
                    <button onClick={onClickButton} className={`btn-primary-light delay-200 ${onClickButton && 'rounded-full'}`}>
                      {buttonText}
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default HeroSection;
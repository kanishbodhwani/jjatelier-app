import { Link  } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
  }, [backgroundImage]);

  return (
    <section className={`hero-container ${small ? 'h-[65vh]' : onClickButton ? 'h-[100vh]' : 'h-[80vh]'} overflow-hidden ${isExiting ? 'animate-frontpage-exit' : 'animate-zoom-in'}`} onAnimationEnd={onAnimationEnd}>
      <div 
        className="hero-bg animate-zoom-in"
        style={{ 
          backgroundImage: imageLoaded ? `url(${backgroundImage})` : 'none',
          animation: 'zoom-in 1.5s ease-out forwards'
        }}
      >
        {!imageLoaded && <div className="absolute inset-0 bg-gray-100 animate-pulse" />}
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
    </section>
  );
};

export default HeroSection;
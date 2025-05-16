import { Link } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  small?: boolean;
  bigHeader?: boolean;
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink = '/jj-atelier',
  small = false,
  bigHeader = false
}: HeroSectionProps) => {
  return (
    <section className={`hero-container ${small ? 'h-[55vh]' : 'h-[75vh]'} overflow-hidden`}>
      <div 
        className="hero-bg animate-zoom-in"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          animation: 'zoom-in 1.5s ease-out forwards'
        }}
      >
        <div className="absolute inset-0 bg-black/30 animate-fade-in" />
      </div>
      
      <div className="z-10 text-center px-4">
        <h2 className={`cormorant-sc-font text-2xl ${small || bigHeader ? 'md:text-6xl' : 'md:text-4xl'} text-white mb-4 opacity-0 animate-fade-in-up animate-delay-300`}>
          {subtitle}
        </h2>
        
        <h1 className="cormorant-sc-font text-5xl md:text-7xl text-white mb-8 opacity-0 animate-fade-in-up animate-delay-500">
          {title || "WORLD OF JJ"}
        </h1>
        
        {buttonText && (
          <div className="opacity-0 animate-fade-in-up animate-delay-700">
            <Link to={buttonLink}>
              <button className="btn-primary-light">
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
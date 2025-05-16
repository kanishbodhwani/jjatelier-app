import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-color-light-brown py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-center">
            <img src="/images/jjlogo.png" alt="JJ Logo" className="h-[184px] w-[184px]" />
            <p className="text-sm corsorant-infant-font-semibold md:text-3xl text-center md:text-center text-jj-darkbrown">
              We Design Emotions with Bespoke Collections.
            </p>
          </div>
          
          {/* Customer Support */}
          <div className="text-center md:text-left">
            <h3 className="corsorant-sc-font-bold text-3xl mb-4 text-black">Customer Support</h3>
            <ul className="space-y-2 text-xl">
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Customer Service</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Buy Online. Pick Up in-Store.</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Store Location</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Gift Cards</Link></li>
            </ul>
          </div>
          
          {/* JJ Atelier */}
          <div className="text-center md:text-left">
            <h3 className="corsorant-sc-font-bold text-3xl mb-4 text-black">JJ Atelier</h3>
            <ul className="space-y-2 text-xl">
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Our Story</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">My Rewards</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Why Us</Link></li>
            </ul>
          </div>
          
          {/* About Us */}
          <div className="text-center md:text-left">
            <h3 className="corsorant-sc-font-bold text-3xl mb-4 text-black">About Us</h3>
            <ul className="space-y-2 text-xl">
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Our Values</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Sustainability</Link></li>
              <li><Link to="#" className="hover:underline cormorant-upright-font-regular text-black">Careers</Link></li>
            </ul>
          </div>

          <div className="absolute bottom-0 right-20 flex space-x-3">
            <img src="/images/insta.png" alt="Instagram" className="h-10 w-10" />
            <img src="/images/facebook.png" alt="Facebook" className="h-10 w-10" />
            <img src="/images/mail.png" alt="Twitter" className="h-10 w-10" />
          </div>
        </div>
        
        {/* Social and copyright */}
        <div className="mt-12 flex flex-col md:flex-row justify-center items-center border-t border-black/80 pt-6">
          <p className="text-xl corsorant-infant-font-light text-black/70 tracking-wide mb-4 md:mb-0">
            Copyright 2025 Reserved to JJ Atelier.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import HeroSection from '../components/HeroSection';
import AppointmentForm from '../components/AppointmentForm';
import { LazyImage } from '@/components/LazyLoad';

const heroImage = '/images/hero-contactus.jpg';

const ContactUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={heroImage}
        title="Text Away"
        subtitle="WE ARE JUST A"
        bigHeader={true}
      />
      
      {/* Contact Intro */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title">We are waiting on the<br />Next Step.....</h2>
        </div>
      </section>
      
      {/* Contact Information and Images */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side - Contact information */}
            <div>
              <div className="mb-10">
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-5xl">DISCOVER US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  {/* Rick is here to help you.<br /> */}
                  Our experts are available to answer any questions you might have. We've got the answers.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">VISIT US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  B-96 Mayapuri Phase 1 New Delhi 110064, DL, India
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">EMAIL US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  jateenjasmeet@gmail.com
                </p>
              </div>
              
              <div>
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">CALL US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  +91 9625831118
                </p>
              </div>
            </div>
            
            {/* Right side - Images grid */}
            <div className="relative overflow-hidden grid grid-cols-12 grid-rows-6 gap-3 h-[600px]">
              {/* Top right image */}
              <div className="absolute w-[200px] md:top-[200px] top-[100px] z-10">
                <LazyImage 
                  src="/images/c1.png" 
                  alt="JJ Atelier Collection" 
                  className="md:w-full md:h-full object-cover"
                />
              </div>
              
              {/* Bottom left big image */}
              <div className="absolute w-[200px] left-[120px] md:top-[80px] top-[-10px]">
                <LazyImage 
                  src="/images/c2.png" 
                  alt="JJ Atelier Collection" 
                  className="md:w-full md:h-full object-cover"
                />
              </div>
              
              {/* Right side image */}
              <div className="absolute w-[200px] z-10 md:right-[30px] right-[20px] md:bottom-[200px] bottom-[150px]">
                <LazyImage 
                  src="/images/c3.png" 
                  alt="JJ Atelier Collection" 
                  className="md:w-full md:h-full object-cover"
                />
              </div>
              
              {/* Bottom right detailed image */}
              <div className="absolute w-[200px] z-10 md:right-[140px] right-[150px] md:bottom-[40px] bottom-[0px]">
                <LazyImage 
                  src="/images/c4.png" 
                  alt="JJ Atelier Collection Detail" 
                  className="md:w-full md:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reach Out Form */}
      <section id="book-appointment" className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Reach Out To Us</h2>
          </div>
          
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
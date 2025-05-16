import HeroSection from '../components/HeroSection';
import AppointmentForm from '../components/AppointmentForm';

// Placeholder image - replace with actual image
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
                  Rick is here to help you.<br />
                  Our experts are available to answer any questions you might have. We've got the answers.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">VISIT US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  Office no. G-02, Building 1, Ground Floor, Dubai Media City - Dubai
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">EMAIL US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  rick@flick.com
                </p>
              </div>
              
              <div>
                <h3 className="uppercase font-color-grey cormorant-sc-font-regular mb-4 text-4xl">CALL US</h3>
                <p className="corsorant-infant-font-light text-black/60 text-2xl">
                  +971-4-576-9770<br />
                  +971-55-983-7007
                </p>
              </div>
            </div>
            
            {/* Right side - Images grid */}
            <div className="relative grid grid-cols-12 grid-rows-6 gap-3 h-[600px]">
              {/* Top right image */}
              <div className="absolute w-[271px] top-[120px] z-10">
                <img 
                  src="/images/c1.png" 
                  alt="JJ Atelier Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom left big image */}
              <div className="absolute w-[271px] left-[120px] top-[-80px]">
                <img 
                  src="/images/c2.png" 
                  alt="JJ Atelier Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Right side image */}
              <div className="absolute w-[271px] z-10 right-[-130px] bottom-[200px]">
                <img 
                  src="/images/c3.png" 
                  alt="JJ Atelier Collection" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom right detailed image */}
              <div className="absolute w-[271px] z-10 right-[-20px] bottom-0">
                <img 
                  src="/images/c4.png" 
                  alt="JJ Atelier Collection Detail" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Reach Out Form */}
      <section className="py-16 bg-white border-t border-gray-100">
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
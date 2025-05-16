import HeroSection from '../components/HeroSection';
import AppointmentForm from '../components/AppointmentForm';

// Placeholder images - replace with actual images
const heroImage = '/images/hero-aboutus.jpg';
const storyImage = '/images/story.png';
const foundersImage = '/images/founders.png';

// Detail images
const detailImage1 = '/images/detail1.png';
const detailImage2 = '/images/detail2.jpg';
const detailImage3 = '/images/detail3.png';

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={heroImage}
        title="our MASTERPIECES"
        subtitle="THE STORY BEHIND"
        bigHeader={true}
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center max-w-4xl">
          <h2 className="section-title">We Draft Emotions and<br />Stitch Memories.</h2>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img 
              src={storyImage} 
              alt="Our Story" 
              className="rounded-md shadow-lg"
            />
            <div>
              <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center">Where we Started From</h2>
              <p className="corsorant-infant-font-light text-black/60 text-center text-2xl ml-4">
                Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery.The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white w-[80%] mx-auto">
        <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center">Where we Started From</h2>
        <p className="corsorant-infant-font-light text-black/60 text-center text-2xl ml-4">
          Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery.
        </p>
      </section>
      
      {/* Founder's Note */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center mb-20">From The Founder's Pen</h2>
              <p className="corsorant-infant-font-light text-black/60 text-center text-2xl">
                Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery.
              </p>
            </div>
            
            <img 
              src={foundersImage} 
              alt="Founders of JJ Atelier" 
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Difference Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h3 className="corsorant-infant-font font-color-light-black text-6xl mb-2">What makes the</h3>
            <h2 className="corsorant-infant-font text-8xl text-black">Difference?</h2>
          </div>
          
          <div className="space-y-8">
            {/* Trust */}
            <div className="relative h-[300px] overflow-hidden w-screen ml-[calc(-50vw+50%)]">
              <img 
                src={detailImage1} 
                alt="Trust" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-jj-darkbrown/20 flex items-center justify-center">
                <h3 className="corsorant-infant-font text-9xl text-white">Trust</h3>
              </div>
            </div>
            
            {/* Design */}
            <div className="relative h-[300px] overflow-hidden w-screen ml-[calc(-50vw+50%)]">
              <img 
                src={detailImage2} 
                alt="Design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-jj-darkbrown/20 flex items-center justify-center">
                <h3 className="corsorant-infant-font text-9xl text-white">Design</h3>
              </div>
            </div>
            
            {/* Story */}
            <div className="relative h-[300px] overflow-hidden w-screen ml-[calc(-50vw+50%)]">
              <img 
                src={detailImage3} 
                alt="Story" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-jj-darkbrown/20 flex items-center justify-center">
                <h3 className="corsorant-infant-font text-9xl text-white">Story</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book an Appointment */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="corsorant-infant-font font-color-light-black text-3xl mb-2 tracting-wider">Explore Our Bespoke Collection</h3>
            <h2 className="cormorant-sc-font-semibold text-6xl text-black">Book an Appointment</h2>
          </div>
          
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
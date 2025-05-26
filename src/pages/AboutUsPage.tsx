import HeroSection from '../components/HeroSection';
import AppointmentForm from '../components/AppointmentForm';
import { LazyImage } from '@/components/LazyLoad';

// Placeholder images - replace with actual images
const heroImage = '/images/hero-aboutus.jpg';
const storyImage = '/images/story.png';
const foundersImage = '/images/founders.jpeg';

// Detail images
const detailImage1 = '/images/detail1.jpeg';
const detailImage2 = '/images/detail2.jpg';
const detailImage3 = '/images/detail3.jpeg';

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
          <p className="corsorant-infant-font-light text-black/70 text-center text-2xl ml-4">
            Every silhouette we craft is more than fabric — it’s a whisper of memory, a sculpture of emotion, a story waiting to be worn. At Jateen & Jasmeet, couture is not a garment. It’s a feeling, tailored.
          </p>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <LazyImage 
              src={storyImage} 
              alt="Our Story" 
              className="rounded-md shadow-lg"
            />
            <div>
              <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center">Where we Started From</h2>
              <p className="corsorant-infant-font-light text-black/70 text-center text-2xl ml-4">
                From an intimate atelier to a canvas of evocative silhouettes—our journey unfolds through couture that breathes memory, movement, and meaning. Every stitch is a narrative, weaving artistry into timeless form.
                Each piece in our debut collection Aarambh is a testament to our roots in craftsmanship — marrying heritage techniques with sculpted modernity. From hand-draped silks to our signature print embroidery, we design not for the moment, but for the soul that carries it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white w-[80%] mx-auto">
        <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center">Where we Started From</h2>
        <p className="corsorant-infant-font-light text-black/70 text-center text-2xl ml-4">
          Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery. Enhanced with sequin work, beads, and detailed kasab embroidery, this sherwani offers a perfect blend of classic elegance and fine craftsmanship. Where we Started From The Rich Black Sherwani Set exudes timeless sophistication, adorned with intricate resham threadwork and antique gold metallic embroidery.
        </p>
      </section> */}
      
      {/* Founder's Note */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center mb-20">From The Founder's Pen</h2>
              <p className="corsorant-infant-font-light text-black/70 text-center text-2xl">
              “We didn’t start with a label — we began with an instinct to design stories. What we wear holds memory, and memory deserves care, structure, and emotion. Jateen & Jasmeet is a journey of form and feeling — of telling tales through thread and time.”
              <br />— Jateen & Jasmeet
              <br />Founders & Creators
              </p>
            </div>
            
            <LazyImage 
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
            <h2 className="corsorant-infant-font text-6xl md:text-8xl text-black">Difference?</h2>
          </div>
          
          <div className="space-y-8">
            {/* Trust */}
            <div className="relative h-[300px] overflow-hidden w-screen ml-[calc(-50vw+50%)]">
              <LazyImage 
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
              <LazyImage 
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
              <LazyImage 
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
      <section id="book-appointment" className="py-16 bg-white border-t border-gray-100">
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
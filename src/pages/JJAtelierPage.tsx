import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import AppointmentForm from '../components/AppointmentForm';

// Placeholder images - replace with actual images
const heroImage = '/images/hero-jj.jpg';

const JJAtelierPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        backgroundImage={heroImage}
        title="JJ Atelier Story"
        subtitle=""
        buttonText="Book an Appointment"
        buttonLink="/jj-atelier"
        small={true}
      />

      <section className="py-16 bg-white w-[80%] mx-auto">
        <h2 className="corsorant-infant-font-regular text-6xl mb-6 text-jj-darkbrown text-center">Step inside the world of sculpted emotion</h2>
        <p className="corsorant-infant-font-light text-black/60 text-center text-2xl ml-4">
          At Jateen & Jasmeet, the atelier is more than a space — it is a living gallery where craftsmanship meets quiet theatre. Each corner holds the imprint of a silhouette in the making, each fabric drape echoing the movement of memory.
          Here, couture isn’t made. It is born — through sketches, fittings, and hand-embellished patience. Every client is a muse, every garment a narrative. With controlled intimacy and an unwavering eye for form, JJ Atelier is where modern emotion meets ancestral grace.
          Welcome to our atelier. Where you don’t just wear the piece — <b>You become the story</b>.
        </p>
      </section>
      
      {/* Featured Collection */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title jj-section-title">Featured Collection by <b>JJ Atelier</b></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map(product => (
              <ProductCard key={product._id} _id={product._id} title={product.name} image={product.images[0]} brand={"JJ Atelier"} price={product.price} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <button className="btn-primary">
              View More
            </button>
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

export default JJAtelierPage;
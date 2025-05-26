import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import AppointmentForm from '../components/AppointmentForm';
import { fetchProducts } from '../services/api';
import { LazyImage } from '../components/LazyLoad';

const heroImage = '/images/hero.jpg';
const secondaryImage = '/images/secondary.jpg';
const foundersImage = '/images/founders.jpeg';

const HomePage = () => {
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
        title="WORLD OF JJ"
        subtitle="WELCOME TO THE"
        buttonText="Enter the World of JJ"
        buttonLink="/jj-atelier"
      />
      
      {/* Quote Section */}
      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title">"Where Presence is Left, Not Seen"</h2>
          <p className="corsorant-infant-font-light text-4xl text-black tracking-tight">Designs That Remember!</p>
        </div>
      </section>
      
      {/* Second Hero Section */}
      <section className="relative h-[80vh]">
        <div 
          className="absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${secondaryImage})` }}
        ></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
          <h2 className="corsorant-infant-font-regular text-6xl mb-8 tracking-wider">A Sacred Space Of Creation.</h2>
          <Link to="/jj-atelier">
            <button className="btn-primary-light bg-white/10 border-white/30 text-white hover:bg-white/80 delay-200">
              Enter the World of JJ
            </button>
          </Link>
        </div>
      </section>
      
      {/* Featured Collection */}
      <section className="py-16 bg-color-light-brown">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="corsorant-sc-font-bold text-5xl font-color-light-brown mb-2 tracking-tight">Featured Collection</h3>
            <h2 className="corsorant-sc-font-bold text-6xl md:text-8xl text-jj-darkbrown">Aarambh</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product._id} _id={product._id} title={product.name} image={product.images[0]} brand={"JJ Atelier"} price={product.price} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Link to="/jj-atelier">
              <button className="btn-primary button-primary text-white">
                Visit the Atelier
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Founder's Note */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="section-title">Founder's Note</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            <div className="w-full md:h-[600px] h-[500px]"> {/* Adjust these values as needed */}
              <LazyImage 
                src={foundersImage} 
                alt="Founders of JJ Atelier" 
                className="rounded-md shadow-lg w-full h-full object-cover"
              />
            </div>
            
            <div className='md:mt-0 transform md:transform-none'> 
              <h3 className="cormorant-sc-font-regular text-jj-darkbrown mb-6 text-center tracking-wider">
                <p className='text-2xl md:text-5xl mb-6'>THE DESIGNERS:</p>
                <p className='text-3xl md:text-[60px] mb-6'>JATEEN & JASMEET</p>
              </h3>
              
              <p className="corsorant-infant-font-light text-black mb-4 text-center tracking-wider text-xl mt-16 w-[84%] ml-8 md:ml-12">
                Jateen and Jasmeet are not just designers — they are architects of emotion, storytellers in silhouette. With an instinct for form and an unwavering devotion to craft, they sculpt memories into movement, creating garments that transcend fashion and become lived expressions.
                Their design language is rooted in heritage, yet refracted through a modern lens — where tradition meets precision, and fluidity meets form. Each piece is a quiet dialogue between structure and sentiment, tailored not just to fit, but to feel.
                At Jateen & Jasmeet, the philosophy is rare yet resonant: design less, mean more. Every creation is for the few who wear emotion — not ensembles.
              </p>
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

export default HomePage;
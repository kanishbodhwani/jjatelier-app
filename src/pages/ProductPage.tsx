import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentForm from '../components/AppointmentForm';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Add smooth scrolling behavior
    });
  }, [id]);

  useEffect(() => {
    const loadProductData = async () => {
      try {
        const { data } = await fetchProducts();
        const foundProduct = data.find((p: any) => p._id === id);
        
        if (foundProduct) {
          setProduct(foundProduct);
          // Get related products from same category
          const related = data
            .filter((p: any) => p._id !== id && p.category === foundProduct.category)
            .slice(0, 3);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error loading product:', error);
      }
    };
    loadProductData();
  }, [id]);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(prev => (prev === section ? null : section));
  };

  const handleImageNavigation = (direction: 'prev' | 'next') => {
    if (!product) return;
    
    setSelectedImage(prev => {
      const maxIndex = product.images.length - 1;
      return direction === 'prev' 
        ? prev === 0 ? maxIndex : prev - 1
        : prev === maxIndex ? 0 : prev + 1;
    });
  };

  if (!product) return <div className="text-center py-16">Loading product...</div>;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[55vh]">
        <div 
          className="absolute inset-0 bg-center bg-cover" 
          style={{ backgroundImage: `url(${product.images[0]})` }}
        ></div>
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <h1 className="cormorant-sc-font text-7xl text-white tracking-tight">{product.name}</h1>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - Gallery */}
          <div className="flex flex-col md:flex-row items-start gap-4 w-full overflow-hidden">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto w-full md:w-auto">
              {product.images.map((img: string, index: number) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 object-cover rounded-md cursor-pointer border-2 ${
                    selectedImage === index 
                      ? 'border-jj-darkbrown' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                />
              ))}
            </div>

            {/* Main Image with arrows */}
            <div className="relative w-full">
              <button 
                onClick={() => handleImageNavigation('prev')}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>
              <button 
                onClick={() => handleImageNavigation('next')}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>

              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-[650px] object-cover rounded-md"
              />
            </div>
          </div>

          {/* Right - Info */}
          <div className="flex flex-col h-full">
            <div className="flex-grow">
              <div className="mb-6">
                <h2 className="cormorant-upright-font-light text-sm text-black">{product.name}</h2>
                <h1 className="cormorant-upright-font-semibold text-2xl text-jj-darkbrown mt-1">{product?.subHeading}</h1>
              </div>
              
              <p className="cormorant-garamond-font-light text-black mb-8 text-xl">
                All taxes included · Shipping calculated at checkout
              </p>
              
              <div className="cormorant-garamond-font-light text-black mb-8 text-xl">
                <p>{product.description}</p>
              </div>
            </div>

            {/* New text and button container */}
            <div className="mt-auto">
              <p className="cormorant-garamond-font-light text-black/70 text-xl mb-4">
                Interested in the Master Piece? <span className="font-semibold">Buy Now</span>
              </p>
              <button 
                onClick={() => {
                  const section = document.getElementById('book-appointment');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="cormorant-garamond-font-light shadow-lg bg-transparent hover:bg-jj-cream text-black/70 border border-black/60 hover:border-transparent px-12 py-3 transition-all duration-300 text-2xl tracking-wide w-full">
                Book an Appointment Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Accordion */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-custom max-w-4xl space-y-4">
          {product.includes.length > 0 && (
            <div className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleAccordion('Includes')}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="font-serif text-lg text-jj-darkbrown">Includes</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-jj-brown transition-transform duration-300 ${
                    openAccordion === 'Includes' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAccordion === 'Includes' && (
                <ul className="list-disc space-y-2 pl-6 mt-4 text-jj-brown">
                  {product.includes.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion('Fabrics')}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="font-serif text-lg text-jj-darkbrown">Fabrics</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-jj-brown transition-transform duration-300 ${
                  openAccordion === 'Fabrics' ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openAccordion === 'Fabrics' && (
              <ul className="list-disc space-y-2 pl-6 mt-4 text-jj-brown">
                {product.fabrics.split('–').map((point: string, index: number) => (
                  point.trim() && (
                    <li key={index} className="text-jj-brown/90">
                      {point.trim()}
                    </li>
                  )
                ))}
              </ul>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion('FitFinish')}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="font-serif text-lg text-jj-darkbrown">Fit & Finish</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-jj-brown transition-transform duration-300 ${
                  openAccordion === 'FitFinish' ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openAccordion === 'FitFinish' && (
              <ul className="list-disc space-y-2 pl-6 mt-4 text-jj-brown">
                {product.fitFinish.split('–').map((point: string, index: number) => (
                  point.trim() && (
                    <li key={index} className="text-jj-brown/90">
                      {point.trim()}
                    </li>
                  )
                ))}
              </ul>
            )}
          </div>

          <div className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleAccordion('Care')}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="font-serif text-lg text-jj-darkbrown">Care Instructions</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-jj-brown transition-transform duration-300 ${
                  openAccordion === 'Care' ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openAccordion === 'Care' && (
              <ul className="list-disc space-y-2 pl-6 mt-4 text-jj-brown">
                {product.care.split('–').map((point: string, index: number) => (
                  point.trim() && (
                    <li key={index} className="text-jj-brown/90">
                      {point.trim()}
                    </li>
                  )
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom">
          <h2 className="section-title">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map(product => (
              <ProductCard 
                key={product._id} 
                _id={product._id}
                title={product.name}
                image={product.images[0]}
                price={product.price}
                brand={"JJ Atelier"}
              />
            ))}
          </div>
          {/* {relatedProducts.length > 0 && (
            <div className="flex justify-center mt-12">
              <button className="btn-primary">View Collection</button>
            </div>
          )} */}
        </div>
      </section>

      {/* Appointment Form */}
      <section id="book-appointment" className="py-16 bg-white border-t border-gray-100">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="corsorant-infant-font text-3xl mb-2 tracking-wider text-jj-brown">
              Experience Bespoke Craftsmanship
            </h3>
            <h2 className="cormorant-sc-font-semibold text-6xl text-jj-darkbrown">
              Book a Private Consultation
            </h2>
          </div>
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
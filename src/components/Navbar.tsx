import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { fetchProducts } from '@/services/api';
import { X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await fetchProducts();
        setAllProducts(data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Debounced search function
  const debouncedSearch = useCallback(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(results);
  }, [searchQuery, allProducts]);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(debouncedSearch, 300);
    return () => clearTimeout(handler);
  }, [searchQuery, debouncedSearch]);

  const handleSearchInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (productId) => {
    navigate(`/product/${productId}`);
    closeSearch();
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isSearchOpen) closeSearch();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSearchOpen]);
  
  return (
    <header className="py-4 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          {isSearchOpen && (
            <div className="fixed inset-0 bg-white z-[9999]">
              <div className="container-custom pt-4">
                <div className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="flex-1 p-4 border-b border-gray-300 text-lg focus:outline-none"
                    value={searchQuery}
                    onChange={handleSearchInput}
                    autoFocus
                  />
                  <button onClick={closeSearch} className="p-2">
                    <X size={24} />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {isLoading ? (
                    <div className="p-4 text-gray-500">Loading products...</div>
                  ) : searchResults.length > 0 ? (
                    searchResults.map((product) => (
                      <button
                        key={product._id}
                        onClick={() => handleSuggestionClick(product._id)}
                        className="block w-full text-left p-4 hover:bg-gray-50 border-b transition-colors"
                      >
                        <h3 className="font-medium text-jj-darkbrown">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 truncate">
                          {product.description}
                        </p>
                        <span className="text-sm text-jj-brown mt-1">
                          ${product.price.toFixed(2)}
                        </span>
                      </button>
                    ))
                  ) : searchQuery ? (
                    <div className="p-4 text-gray-500">
                      No products found for "{searchQuery}"
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          )}

          {/* Logo centered at the top */}
          <div className="flex justify-between items-center w-full mb-4">
            <div className="flex-1" />
            <Link to="/" className="flex flex-1 justify-center">
              <img 
                src="/images/jjlogo.png" 
                alt="JJ Logo" 
                className={`${isMobile ? 'h-[72px] w-[72px]' : 'h-[96px] w-[96px]'}`} 
              />
            </Link>
            <Link 
              to="#book-appointment"  
              onClick={() => {
                const section = document.getElementById('book-appointment');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden md:flex flex-1 justify-end w-full"
            >
              <button className="playfair-display-font-regular bg-transparent hover:bg-jj-cream text-jj-darkbrown border border-black/60 hover:border-transparent px-10 py-3 transition-all duration-300 text-md tracking-wide">
                Book an Appointment
              </button>
            </Link>
            <div className="flex-1 md:hidden flex justify-end">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-gray-700 p-2"
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex justify-between items-center w-full">
            <div className="flex-1" />
            
            <div className="flex items-center space-x-10">
              <Link to="/" className="playfair-display-font text-md tracking-wide hover:text-jj-brown transition-colors">Home</Link>
              <Link to="/jj-atelier" className="playfair-display-font text-md tracking-wide hover:text-jj-brown transition-colors">JJ Atelier</Link>
              <Link to="/about-us" className="playfair-display-font text-md tracking-wide hover:text-jj-brown transition-colors">About Us</Link>
              <Link to="/contact-us" className="playfair-display-font text-md tracking-wide hover:text-jj-brown transition-colors">Contact Us</Link>
              <button onClick={() => setIsSearchOpen(true)} className="text-gray-800 hover:text-jj-brown transition-colors">
                <Search size={20} />
              </button>
            </div>
            
            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="flex items-center gap-4">
                {/* Additional icons can be placed here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md fixed top-[96px] left-0 right-0 z-50 h-screen">
          <div className="flex flex-col space-y-6 pt-4">
            <Link to="/" className="playfair-display-font text-lg tracking-wide hover:text-jj-brown transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/jj-atelier" className="playfair-display-font text-lg tracking-wide hover:text-jj-brown transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              JJ Atelier
            </Link>
            <Link to="/about-us" className="playfair-display-font text-lg tracking-wide hover:text-jj-brown transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/contact-us" className="playfair-display-font text-lg tracking-wide hover:text-jj-brown transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </Link>
            <div className="flex items-center py-4" onClick={() => {
              setIsSearchOpen(true);
              setIsMenuOpen(false);
            }}>
              <button className="text-gray-800 hover:text-jj-brown transition-colors" >
                <Search size={24} />
              </button>
              <span className="ml-4 text-gray-600">Search</span>
            </div>
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link 
                to="#book-appointment"
                onClick={() => {
                  setIsMenuOpen(false);
                  const section = document.getElementById('book-appointment');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full"
              >
                <button 
                  onClick={() => {
                    const section = document.getElementById('book-appointment');
                    section?.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }} 
                  className="playfair-display-font-regular bg-transparent hover:bg-jj-cream text-jj-darkbrown border border-black/60 hover:border-transparent px-6 py-3 transition-all duration-300 text-md tracking-wide w-full">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
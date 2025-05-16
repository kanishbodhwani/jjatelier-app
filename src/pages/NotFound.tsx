
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="min-h-screen w-full h-full flex items-center justify-center bg-jj-cream/30">
      <div className="text-center">
        <h1 className="text-6xl font-serif text-jj-darkbrown mb-4">404</h1>
        <p className="text-xl text-jj-brown mb-8">Oops! Page not found</p>
        <Link to="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
    </div>
  );
};

export default NotFound;

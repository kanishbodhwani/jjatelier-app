import { Link } from 'react-router-dom';

interface ProductCardProps {
  key?: string;
  _id: string;
  title: string;
  image: string;
  brand: string;
  price?: string;
}

const ProductCard = ({ _id, title, image, brand, price, key }: ProductCardProps) => {
  const id = _id;
  return (
    <div key={key} className="flex flex-col">
      <div className="overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="text-center space-y-2">
        <h4 className="font-serif text-sm text-jj-brown">{brand}</h4>
        <h3 className="font-serif text-lg text-jj-darkbrown">{title}</h3>
        {/* {price && <p className="font-serif text-sm text-jj-brown">${price}</p>} */}

        <Link to={`/product/${id}`}>
          <button className="btn-primary mt-2">Enquire Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
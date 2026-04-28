import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, slug }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">${price.toFixed(2)}</p>
        <a href={`/product/${slug}`} className="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded">
          View Product
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
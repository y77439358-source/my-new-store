import React from 'react';

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <img src={images[0]} alt="Product Image" className="w-full h-auto" />
      </div>
      <div className="flex space-x-2 mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Thumbnail ${index + 1}`}
            className="w-24 h-24 object-cover cursor-pointer"
            onClick={() => {
              const mainImage = document.querySelector('.product-main-image') as HTMLImageElement;
              if (mainImage) {
                mainImage.src = image;
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
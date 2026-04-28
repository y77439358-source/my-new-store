'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProductBySlug } from '../../../lib/sanity';
import ProductGallery from '../../../components/ProductGallery';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const fetchProduct = async () => {
        const productData = await getProductBySlug(slug);
        setProduct(productData);
        setLoading(false);
      };
      fetchProduct();
    }
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <ProductGallery images={product.images} />
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <div className="options">
        {/* Size and color selection logic goes here */}
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductPage;


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/actions/shopActions'; // Adjust import path if needed
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'; // Uncomment if using

const Product = () => {
  const { productId } = useParams(); // Get productId from URL params
  const dispatch = useDispatch();

  // Get products, loading, and error from Redux store
  const { products, loading, error } = useSelector((state) => state.shop || { products: [], loading: false, error: null });

  // Fetch all products on component mount
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Find the product by ID
  const product = products.find((p) => p._id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Breadcrum product={product} /> {/* Breadcrumb component */}
      <ProductDisplay product={product} /> {/* Display the product */}
      <RelatedProducts productId={productId} />
    </div>
  );
};

export default Product;

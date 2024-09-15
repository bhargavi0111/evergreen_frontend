

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../redux/actions/shopActions'; 
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'; 

const Product = () => {
  const { productId } = useParams(); 
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.shop || { products: [], loading: false, error: null });

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const product = products.find((p) => p._id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Breadcrum product={product} /> 
      <ProductDisplay product={product} /> 
      <RelatedProducts productId={productId} />
    </div>
  );
};

export default Product;

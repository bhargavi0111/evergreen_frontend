// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../../redux/actions/cartActions'; 
// // import './ProductDisplay.css';

// // const ProductDisplay = ({ product }) => {
// //   const dispatch = useDispatch();
// //   console.log(product)

// //   const handleAddToCart = () => {
// //     dispatch(addToCart(product));
// //   };

// //   if (!product) {
// //     return <div>Product not found</div>;
// //   }

// //   const imageUrl = product.image.startsWith('/') ? `http://localhost:4000${product.image}` : product.image;

// //   return (
// //     <div className='productdisplay'>
// //       <div className="productdisplay-left">
// //         <div className="productdisplay-img-list">
// //           {product.images && product.images.map((img, index) => (
// //             <img key={index} src={img.startsWith('/') ? `http://localhost:4000${img}` : img} alt={`Product ${index}`} />
// //           ))}
// //         </div>
// //         <div className="productdisplay-img">
// //           <img className='productdisplay-main-img' src={imageUrl} alt={product.name} />
// //         </div>
// //       </div>
// //       <div className="productdisplay-right">
// //         <h1>{product.name}</h1>
// //         {product.category === 'plants' && (
// //           <div className="productdisplay-right-plant-details">
// //             <p>Watering Needs: {product.wateringNeeds}</p>
// //             <p>Sunlight: {product.sunlight}</p>
// //           </div>
// //         )}
// //         {product.category === 'pots' && (
// //           <div className="productdisplay-right-pot-details">
// //             <p>Material: {product.material}</p>
// //             <p>Dimensions: {product.dimensions}</p>
// //           </div>
// //         )}
// //         {product.category === 'planters' && (
// //           <div className="productdisplay-right-planter-details">
// //             <p>Material: {product.material}</p>
// //             <p>Size: {product.size}</p>
// //           </div>
// //         )}
// //         {product.category === 'tools' && (
// //           <div className="productdisplay-right-tool-details">
// //             <p>Type: {product.toolType}</p>
// //             <p>Material: {product.material}</p>
// //           </div>
// //         )}
// //         <div className="productdisplay-right-stars">
// //           {Array.from({ length: 5 }, (_, index) => (
// //             <span key={index} className={index < product.rating ? 'star filled' : 'star'}>★</span>
// //           ))}
// //         </div>
// //         <div className="productdisplay-right-prices">
// //           <div className="productdisplay-right-price-old">${product.old_price}</div>
// //           <div className="productdisplay-right-price-new">${product.new_price}</div>
// //         </div>
// //         <div className="productdisplay-right-description">
// //           <p>{product.description}</p>
// //         </div>
// //         {product.category !== 'tools' && (
// //           <div className="productdisplay-right-size">
// //             <h1>Select Size</h1>
// //             <div className="productdisplay-right-sizes">
// //               {/* {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
// //                 <div key={size}>{size}</div>
// //               ))} */}
// //             </div>
// //           </div>
// //         )}
// //         <button onClick={handleAddToCart}>Add to Cart</button>
// //         <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
// //         <p className='productdisplay-right-tags'><span>Tags :</span>Lesswater, low light</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDisplay;

// // import React from 'react';
// // import { useDispatch } from 'react-redux';
// // import { addToCart } from '../../redux/actions/cartActions'; 
// // import './ProductDisplay.css';

// // const ProductDisplay = ({ product, }) => {
// //   const dispatch = useDispatch();

// //   const handleAddToCart = () => {
// //     if (product && product._id) {
// //       dispatch(addToCart(product));  // Pass the product to the action
// //     }
// //   };

// //   if (!product) {
// //     return <div>Product not found</div>;
// //   }

// //   const imageUrl = product.image.startsWith('/') ? `http://localhost:4000${product.image}` : product.image;



// //   return (
// //     <div className='productdisplay'>
// //       <div className="productdisplay-left">
// //         <div className="productdisplay-img-list">
// //           {product.images && product.images.map((img, index) => (
// //             <img key={index} src={img.startsWith('/') ? `http://localhost:4000${img}` : img} alt={`Product ${index}`} />
// //           ))}
// //         </div>
// //         <div className="productdisplay-img">
// //           <img className='productdisplay-main-img' src={imageUrl} alt={product.name} />
// //         </div>
// //       </div>
// //       <div className="productdisplay-right">
// //         <h1>{product.name}</h1>
// //         {/* Category-specific details */}
// //         {product.category === 'plants' && (
// //           <div className="productdisplay-right-plant-details">
// //             <p>Watering Needs: {product.wateringNeeds}</p>
// //             <p>Sunlight: {product.sunlight}</p>
// //           </div>
// //         )}
// //         {/* ... (other category-specific details) ... */}
// //         <div className="productdisplay-right-stars">
// //           {Array.from({ length: 5 }, (_, index) => (
// //             <span key={index} className={index < product.rating ? 'star filled' : 'star'}>★</span>
// //           ))}
// //         </div>
// //         <div className="productdisplay-right-prices">
// //           <div className="productdisplay-right-price-old">${product.old_price}</div>
// //           <div className="productdisplay-right-price-new">${product.new_price}</div>
// //         </div>
// //         <div className="productdisplay-right-description">
// //           <p>{product.description}</p>
// //         </div>
// //         {product.category !== 'tools' && (
// //           <div className="productdisplay-right-size">
// //             <h1>Select Size</h1>
// //             <div className="productdisplay-right-sizes">
// //               {/* Size selection options */}
// //             </div>
// //           </div>
// //         )}
// //         <button onClick={handleAddToCart}>Add to Cart</button>
// //         <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
// //         <p className='productdisplay-right-tags'><span>Tags :</span>Lesswater, low light</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductDisplay;


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartActions'; 
// import './ProductDisplay.css';



//   const ProductDisplay = ({ product }) => {
//     const dispatch = useDispatch();
  
//     const handleAddToCart = () => {
//       console.log('Product:', product); // Log the product for verification
      
//       const itemId = product._id;
//       console.log('Extracted itemId:', itemId);
  
//       if (!itemId || typeof itemId !== 'string') {
//         console.error('Invalid itemId:', itemId);
//         return;
//       }
  
//       dispatch(addToCart(itemId)); // Assuming addToCart is an action creator
//     };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const imageUrl = product.image.startsWith('/') ? `http://localhost:4000${product.image}` : product.image;

//   return (
//     <div className='productdisplay'>
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           {product.images && product.images.map((img, index) => (
//             <img key={index} src={img.startsWith('/') ? `http://localhost:4000${img}` : img} alt={`Product ${index}`} />
//           ))}
//         </div>
//         <div className="productdisplay-img">
//           <img className='productdisplay-main-img' src={imageUrl} alt={product.name} />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         {/* Category-specific details */}
//         {product.category === 'plants' && (
//           <div className="productdisplay-right-plant-details">
//             <p>Watering Needs: {product.wateringNeeds}</p>
//             <p>Sunlight: {product.sunlight}</p>
//           </div>
//         )}
//         {/* ... (other category-specific details) ... */}
//         <div className="productdisplay-right-stars">
//           {Array.from({ length: 5 }, (_, index) => (
//             <span key={index} className={index < product.rating ? 'star filled' : 'star'}>★</span>
//           ))}
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">₹{product.old_price}</div>
//           <div className="productdisplay-right-price-new">₹{product.new_price}</div>
//         </div>
//         <div className="productdisplay-right-description">
//           <p>{product.description}</p>
//         </div>
//         {product.category !== 'tools' && (
//           <div className="productdisplay-right-size">
//             <h1>Select Size</h1>
//             <div className="productdisplay-right-sizes">
//               {/* Size selection options */}
//             </div>
//           </div>
//         )}
//         <button onClick={handleAddToCart}>Add to Cart</button>
//         <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
//         <p className='productdisplay-right-tags'><span>Tags :</span>Lesswater, low light</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;


// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartActions'; 
// import './ProductDisplay.css';

// const ProductDisplay = ({ product }) => {
//   const dispatch = useDispatch();

//   const handleAddToCart = () => {
//     console.log('Product:', product); // Log the product for verification

//     const itemId = product._id;
//     console.log('Extracted itemId:', itemId);

//     if (!itemId || typeof itemId !== 'string') {
//       console.error('Invalid itemId:', itemId);
//       return;
//     }

//     dispatch(addToCart(itemId)); // Assuming addToCart is an action creator
//   };

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const imageUrl = product.image.startsWith('/') ? `http://localhost:4000${product.image}` : product.image;

//   return (
//     <div className='productdisplay'>
//       <div className="productdisplay-left">
//         <div className="productdisplay-img-list">
//           {product.images && product.images.map((img, index) => (
//             <img 
//               key={index} 
//               src={img.startsWith('/') ? `http://localhost:4000${img}` : img} 
//               alt={`Product ${index}`} 
//               className='productdisplay-thumbnail'
//             />
//           ))}
//         </div>
//         <div className="productdisplay-img">
//           <img className='productdisplay-main-img' src={imageUrl} alt={product.name} />
//         </div>
//       </div>
//       <div className="productdisplay-right">
//         <h1>{product.name}</h1>
//         {/* Category-specific details */}
//         {product.category === 'plants' && (
//           <div className="productdisplay-right-plant-details">
//             <p>Watering Needs: {product.wateringNeeds || 'N/A'}</p>
//             <p>Sunlight: {product.sunlight || 'N/A'}</p>
//           </div>
//         )}
//         {/* ... (other category-specific details) ... */}
//         <div className="productdisplay-right-stars">
//           {Array.from({ length: 5 }, (_, index) => (
//             <span 
//               key={index} 
//               className={index < product.rating ? 'star filled' : 'star'}
//               aria-label={`Star rating ${index + 1}`}
//             >
//               ★
//             </span>
//           ))}
//         </div>
//         <div className="productdisplay-right-prices">
//           <div className="productdisplay-right-price-old">₹{product.old_price.toFixed(2)}</div>
//           <div className="productdisplay-right-price-new">₹{product.new_price.toFixed(2)}</div>
//         </div>
//         <div className="productdisplay-right-description">
//           <p>{product.description}</p>
//         </div>
//         {product.category !== 'tools' && (
//           <div className="productdisplay-right-size">
//             <h1>Select Size</h1>
//             <div className="productdisplay-right-sizes">
//               {/* Size selection options */}
//             </div>
//           </div>
//         )}
//         <button onClick={handleAddToCart}>Add to Cart</button>
//         <p className='productdisplay-right-category'>
//           <span>Category :</span> {product.category}
//         </p>
//         <p className='productdisplay-right-tags'>
//           <span>Tags :</span> Lesswater, low light
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart,getCart } from '../../redux/actions/cartActions';
import './ProductDisplay.css';

const ProductDisplay = ({ product }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = async () => {
    if (!product || !product._id) {
      console.error('Invalid product:', product);
      return;
    }

    setIsAdding(true);
    try {
      await dispatch(addToCart(product._id));
      dispatch(getCart());
    } catch (error) {
      console.error('Error adding to cart:', error);
    } finally {
      setIsAdding(false);
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  const imageUrl = product.image.startsWith('/') ? `http://localhost:4000${product.image}` : product.image;

  return (
    // <div className='productdisplay'>
    //   <div className="productdisplay-left">
    //     <div className="productdisplay-img-list">
    //       {product.images && product.images.map((img, index) => (
    //         <img
    //           key={index}
    //           src={img.startsWith('/') ? `http://localhost:4000${img}` : img}
    //           alt={`Product ${index}`}
    //           className='productdisplay-thumbnail'
    //         />
    //       ))}
    //     </div>
    //     <div className="productdisplay-img">
    //       <img className='productdisplay-main-img' src={imageUrl} alt={product.name} />
    //     </div>
    //   </div>
    //   <div className="productdisplay-right">
    //     <h1>{product.name}</h1>
    //     {product.category === 'plants' && (
    //       <div className="productdisplay-right-plant-details">
    //         <p>Watering Needs: {product.wateringNeeds || 'N/A'}</p>
    //         <p>Sunlight: {product.sunlight || 'N/A'}</p>
    //       </div>
    //     )}
    //     <div className="productdisplay-right-stars">
    //       {Array.from({ length: 5 }, (_, index) => (
    //         <span
    //           key={index}
    //           className={index < product.rating ? 'star filled' : 'star'}
    //           aria-label={`Star rating ${index + 1}`}
    //         >
    //           ★
    //         </span>
    //       ))}
    //     </div>
    //     <div className="productdisplay-right-prices">
    //       <div className="productdisplay-right-price-old">₹{product.old_price.toFixed(2)}</div>
    //       <div className="productdisplay-right-price-new">₹{product.new_price.toFixed(2)}</div>
    //     </div>
    //     <div className="productdisplay-right-description">
    //       <p>{product.description}</p>
    //     </div>
    //     {product.category !== 'tools' && (
    //       <div className="productdisplay-right-size">
    //         <h1>Select Size</h1>
    //         <div className="productdisplay-right-sizes">
    //         </div>
    //       </div>
    //     )}
    //     <button onClick={handleAddToCart} disabled={isAdding}>
    //       {isAdding ? 'Adding...' : 'Add to Cart'}
    //     </button>
    //     <p className='productdisplay-right-category'>
    //       <span>Category :</span> {product.category}
    //     </p>
    //     <p className='productdisplay-right-tags'>
    //       <span>Tags :</span> Lesswater, low light
    //     </p>
    //   </div>
    // </div>
    <div className="product-display">
  <div className="product-display-left">
    <div className="product-display-img-list">
      {product.images && product.images.map((img, index) => (
        <img
          key={index}
          src={img.startsWith('/') ? `http://localhost:4000${img}` : img}
          alt={`Product ${index}`}
          className='product-display-thumbnail'
        />
      ))}
    </div>
    <div className="product-display-img">
      <img className='product-display-main-img' src={imageUrl} alt={product.name} />
    </div>
  </div>
  <div className="product-display-right">
    <h1 className='product-display-name'>{product.name}</h1>
    {product.category === 'plants' && (
      <div className="product-display-plant-details">
        <p><strong>Watering Needs:</strong> {product.wateringNeeds || 'N/A'}</p>
        <p><strong>Sunlight:</strong> {product.sunlight || 'N/A'}</p>
      </div>
    )}
    <div className="product-display-stars">
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={index < product.rating ? 'star filled' : 'star'}
          aria-label={`Star rating ${index + 1}`}
        >
          ★
        </span>
      ))}
    </div>
    <div className="product-display-prices">
      <div className="product-display-price-old">₹{product.old_price.toFixed(2)}</div>
      <div className="product-display-price-new">₹{product.new_price.toFixed(2)}</div>
    </div>
    <div className="product-display-description">
      <p>{product.description}</p>
    </div>
    {product.category !== 'tools' && (
      <div className="product-display-size">
        <h2>Select Size</h2>
        <div className="product-display-sizes">
          {/* Size options will go here */}
        </div>
      </div>
    )}
    <button onClick={handleAddToCart} disabled={isAdding} className="add-to-cart-button">
     Add to Cart
    </button>
    <p className='product-display-category'>
      <span>Category:</span> {product.category}
    </p>
    <p className='product-display-tags'>
      <span>Tags:</span> Lesswater, low light
    </p>
  </div>
</div>

  );
};

export default ProductDisplay;

// import React, { useEffect } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { useSelector, useDispatch } from "react-redux";


// import { getCart, updateCartQuantity, removeFromCart } from '../../redux/actions/cartActions';

// const CartItems = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items);
//   const error = useSelector(state => state.cart.error);
//   const loading = useSelector(state => state.cart.loading);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   const handleIncrease = (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item) {
//       dispatch(updateCartQuantity(itemId, item.quantity + 1));
//     }
//   };

//   const handleDecrease = (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item && item.quantity > 1) {
//       dispatch(updateCartQuantity(itemId, item.quantity - 1));
//     }
//   };

//   const handleRemove = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };
//   if (loading) {
//     return <div>Loading cart items...</div>;
//   }

//   if (error) {
//     return (
//       <div>
//         <p>Error loading cart: {error}</p>
//         <button onClick={() => dispatch(getCart())}>Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul className="cart-list">
//           {cartItems.map(item => (
//             <li key={item._id} className="cart-item">
//               <img src={`http://localhost:4000${item.image}`} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h2>{item.name}</h2>
//                 <p>Price: ₹{item.new_price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => handleDecrease(item._id)} className="quantity-button">-</button>
//                 <button onClick={() => handleIncrease(item._id)} className="quantity-button">+</button>
//                 <button onClick={() => handleRemove(item._id)} className="remove-button">
//                   Remove
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && (
//         <div className="cart-total">
//           <h2>Total: ₹{cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0).toFixed(2)}</h2>
//         </div>
//       )}
//     </div>
   
// );
// };
  


// export default CartItems;


// import React, { useEffect } from "react";
// import "./CartItems.css";
// import cross_icon from "../Assets/cart_cross_icon.png";
// import { useSelector, useDispatch } from "react-redux";
// import { getCart, updateCartQuantity, removeFromCart ,addToCart} from '../../redux/actions/cartActions';

// const CartItems = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector(state => state.cart.items || []); // Default to empty array
// const error = useSelector(state => state.cart.error);
//   const loading = useSelector(state => state.cart.loading);

//   useEffect(() => {
//     dispatch(getCart());
//   }, [dispatch]);

//   useEffect(() => {
//   }, [cartItems]);

//   console.log("Cart items in UI:", cartItems);

  
//   const handleRemove = (itemId) => {
//     dispatch(removeFromCart(itemId)).then(() => {
//       dispatch(getCart()); // Refresh cart data after removing
//     });
//   };
  
 
  
//   const handleIncrease = (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item) {
//       dispatch(updateCartQuantity(itemId, item.quantity + 1));
//     }
//   dispatch(getCart());

//   };

//   const handleDecrease = (itemId) => {
//     const item = cartItems.find(item => item._id === itemId);
//     if (item && item.quantity > 1) {
//       dispatch(updateCartQuantity(itemId, item.quantity - 1));
//     }
//     else{
//       dispatch(removeFromCart(itemId))
//     }
//     dispatch(getCart());

//   };



//   if (loading) {
//     return <div className="loading-indicator">Loading cart items...</div>;
//   }

//   if (error) {
//     return (
//       <div className="error-container">
//         <p>Error loading cart: {error.message || error}</p>
//         <button onClick={() => dispatch(getCart())} className="retry-button">Try Again</button>
//       </div>
//     );
//   }

//   return (
//     <div className="cart-container">
//       <h1>Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <ul className="cart-list">
//           {cartItems.map(item => (
//             <li key={item._id} className="cart-item">
//               <img src={`http://localhost:4000${item.image}`} alt={item.name} className="cart-item-image" />
//               <div className="cart-item-details">
//                 <h2>{item.name}</h2>
//                 <p>Price: ₹{item.new_price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <div className="cart-item-actions">
//                 <button onClick={() => handleDecrease(item._id)} className="quantity-button">-</button>
//                   <button onClick={() => handleIncrease(item._id)} className="quantity-button">+</button>
//                   <button onClick={() => handleRemove(item._id)} className="remove-button">Remove</button>
                  
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && (
//         <div className="cart-total">
//           <h2>Total: ₹{cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0).toFixed(2)}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartItems;

import React, { useEffect, useCallback } from "react";
import "./CartItems.css";
import { useSelector, useDispatch } from "react-redux";
import { getCart, updateCartQuantity, removeFromCart } from '../../redux/actions/cartActions';
import debounce from 'lodash/debounce';

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items || []);
  const error = useSelector(state => state.cart.error);
  const loading = useSelector(state => state.cart.loading);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log("Cart items in UI:", cartItems);

  const debouncedUpdateQuantity = useCallback(
    debounce((itemId, newQuantity) => {
      dispatch(updateCartQuantity(itemId, newQuantity));
    }, 500),
    [dispatch]
  );

  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrease = (itemId) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item) {
      const newQuantity = item.quantity + 1;
      debouncedUpdateQuantity(itemId, newQuantity);
      // Optimistic update
      dispatch({ type: 'OPTIMISTIC_UPDATE_QUANTITY', payload: { itemId, quantity: newQuantity } });
    }
  };

  const handleDecrease = (itemId) => {
    const item = cartItems.find(item => item._id === itemId);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      debouncedUpdateQuantity(itemId, newQuantity);
      // Optimistic update
      dispatch({ type: 'OPTIMISTIC_UPDATE_QUANTITY', payload: { itemId, quantity: newQuantity } });
    } else {
      dispatch(removeFromCart(itemId));
    }
  };

  if (loading && cartItems.length === 0) {
    return <div className="loading-indicator">Loading cart items...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading cart: {error.message || error}</p>
        <button onClick={() => dispatch(getCart())} className="retry-button">Try Again</button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map(item => (
            <li key={item._id} className="cart-item">
              <img src={`http://localhost:4000${item.image}`} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ₹{item.new_price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button onClick={() => handleDecrease(item._id)} className="quantity-button">-</button>
                  <button onClick={() => handleIncrease(item._id)} className="quantity-button">+</button>
                  <button onClick={() => handleRemove(item._id)} className="remove-button">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h2>Total: ₹{cartItems.reduce((total, item) => total + item.new_price * item.quantity, 0).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default CartItems;

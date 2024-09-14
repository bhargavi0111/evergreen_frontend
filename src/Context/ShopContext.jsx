// import React, { createContext, useState, useEffect } from "react";
// import axios from 'axios';

// // Define getDefaultCart function
// const getDefaultCart = (products) => {
//   let cart = {};
//   for (let index = 0; index < products.length; index++) {
//     cart[products[index]._id] = 0;
//   }
//   return cart;
// };

// export const ShopContext = createContext(null);

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/allproducts');
//         console.log('Fetched products:', response.data); // Debugging log
//         setProducts(response.data);
//         setCartItems(getDefaultCart(response.data)); // Set default cart after fetching products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) - 1 }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = products.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += cartItems[item] * itemInfo.new_price;
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const contextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     products,
//     cartItems,
//     addToCart,
//     removeFromCart
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
import React, { createContext, useState, useEffect, useMemo } from "react";
import axios from 'axios';

// Define getDefaultCart function
const getDefaultCart = (products) => {
  let cart = {};
  products.forEach((product) => {
    cart[product._id] = 0;
  });
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Error state for handling API errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/allproducts');
        console.log('Fetched products:', response.data); // Debugging log
        setProducts(response.data);
        setCartItems(getDefaultCart(response.data)); // Set default cart after fetching products
      } catch (error) {
        setError('Error fetching products. Please try again later.'); // Update error state
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  };

  const getTotalCartAmount = () => {
    return products.reduce((totalAmount, product) => {
      if (cartItems[product._id] > 0) {
        totalAmount += cartItems[product._id] * product.new_price;
      }
      return totalAmount;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((totalItem, quantity) => totalItem + quantity, 0);
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    getTotalCartItems,
    getTotalCartAmount,
    products,
    cartItems,
    addToCart,
    removeFromCart
  }), [cartItems, products]);

  return (
    <ShopContext.Provider value={contextValue}>
      {error && <div className="error-message">{error}</div>} {/* Error message display */}
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

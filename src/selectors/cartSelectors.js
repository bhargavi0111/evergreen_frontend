// src/selectors/cartSelectors.js
export const getTotalCartAmount = (state) => {
    const cartItems = state.cart.cartItems;
    const products = state.products.products;
    return Object.keys(cartItems).reduce((total, id) => {
      const product = products.find(p => p._id === id);
      return total + (product ? product.new_price * cartItems[id] : 0);
    }, 0);
  };
  
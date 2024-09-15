import React, { useEffect, useCallback } from "react";
import "./CartItems.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCart,
  updateCartQuantity,
  removeFromCart,
} from "../../redux/actions/cartActions";
import debounce from "lodash/debounce";

const CartItems = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);
  const error = useSelector((state) => state.cart.error);
  const loading = useSelector((state) => state.cart.loading);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  // const debouncedUpdateQuantity = useCallback(
  //   debounce((itemId, newQuantity) => {
  //     dispatch(updateCartQuantity(itemId, newQuantity));
  //   }, 500),
  //   [dispatch]
  // );
  const debouncedUpdateQuantity = useCallback(
    (itemId, newQuantity) => {
      const update = () => {
        dispatch(updateCartQuantity(itemId, newQuantity));
      };
      debounce(update, 500)();
    },
    [dispatch]
  );
  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrease = (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item) {
      const newQuantity = item.quantity + 1;
      debouncedUpdateQuantity(itemId, newQuantity);
      dispatch({
        type: "OPTIMISTIC_UPDATE_QUANTITY",
        payload: { itemId, quantity: newQuantity },
      });
    }
  };

  const handleDecrease = (itemId) => {
    const item = cartItems.find((item) => item._id === itemId);
    if (item && item.quantity > 1) {
      const newQuantity = item.quantity - 1;
      debouncedUpdateQuantity(itemId, newQuantity);
      dispatch({
        type: "OPTIMISTIC_UPDATE_QUANTITY",
        payload: { itemId, quantity: newQuantity },
      });
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
        <button onClick={() => dispatch(getCart())} className="retry-button">
          Try Again
        </button>
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
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              <img
                src={`http://localhost:4000${item.image}`}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: ₹{item.new_price}</p>
                <p>Quantity: {item.quantity}</p>
                <div className="cart-item-actions">
                  <button
                    onClick={() => handleDecrease(item._id)}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleIncrease(item._id)}
                    className="quantity-button"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="cart-total">
          <h2>
            Total: ₹
            {cartItems
              .reduce(
                (total, item) => total + item.new_price * item.quantity,
                0
              )
              .toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
};

export default CartItems;

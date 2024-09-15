import axios from "axios";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const CART_ERROR = "CART_ERROR";
export const UPDATE_QUANTITY_SUCCESS = "UPDATE_QUANTITY_SUCCESS";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";
export const GET_CART_REQUEST = "GET_CART_REQUEST";

export const addToCart = (itemId) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("User not authenticated");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };


    if (!itemId || typeof itemId !== "string") {
      throw new Error("Invalid itemId");
    }

    const response = await axios.post(
      "http://localhost:4000/cart/addtocart",
      { itemId }, 
      config
    );

    dispatch({
      type: "ADD_TO_CART_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TO_CART_FAIL",
      payload: error.response ? error.response.data : error.message,
    });
    console.error(
      "Error adding to cart:",
      error.response ? error.response.data : error.message
    );
  }
};

export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:4000/cart/getcart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: GET_CART_SUCCESS, payload: response.data.cart });
  } catch (error) {
    console.error("Error fetching cart:", error); 
    dispatch({ type: GET_CART_FAIL, payload: error.message });
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost:4000/cart/removefromcart`,
      {
        headers: { Authorization: `Bearer ${token}` },

        data: { itemId },
      }
    );
    dispatch({
      type: "REMOVE_FROM_CART_SUCCESS",
      payload: response.data.cart.products,
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    dispatch({ type: "CART_ERROR", payload: error.response.data.message });
  }
};

export const updateCartQuantity =
  (itemId, newQuantity) => async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.patch(
        "http://localhost:4000/cart/updatequantity",
        { itemId, newQuantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "UPDATE_CART_SUCCESS",
        payload: response.data.cart.products,
      });
    } catch (error) {
      console.error("Error updating cart:", error);
      dispatch({ type: "CART_ERROR", payload: error.response.data.message });
    }
  };

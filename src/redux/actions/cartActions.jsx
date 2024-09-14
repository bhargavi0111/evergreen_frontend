import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
export const CART_ERROR = "CART_ERROR";
export const UPDATE_QUANTITY_SUCCESS = "UPDATE_QUANTITY_SUCCESS";

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

    console.log("Sending itemId:", itemId); // Log the itemId being sent

    if (!itemId || typeof itemId !== "string") {
      throw new Error("Invalid itemId");
    }

    const response = await axios.post(
      "http://localhost:4000/cart/addtocart",
      { itemId }, // Only sending itemId as a string
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

export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAIL = "GET_CART_FAIL";
export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CART_REQUEST });
    const token = localStorage.getItem("token");

    const response = await axios.get("http://localhost:4000/cart/getcart", {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch({ type: GET_CART_SUCCESS, payload: response.data.cart });
  } catch (error) {
    console.error("Error fetching cart:", error); // Log error
    dispatch({ type: GET_CART_FAIL, payload: error.message });
  }
};

export const removeFromCart = (itemId) => async (dispatch) => {
  const token = localStorage.getItem("token");
  console.log(`Removing item with ID: ${itemId}`);
  try {
    const response = await axios.delete(
      `http://localhost:4000/cart/removefromcart`,
      {
        headers: { Authorization: `Bearer ${token}` },

        data: { itemId },
      }
    );
    console.log("Response from server:", response);
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

// export const REMOVE_FROM_CART_REQUEST="REMOVE_FROM_CART_REQUEST";
// export const REMOVE_FROM_CART_FAIL="REMOVE_FROM_CART_FAIL";
// export const UPDATE_QUANTITY_REQUEST="UPDATE_QUANTITY_REQUEST";
// export const UPDATE_QUANTITY_FAIL="UPDATE_QUANTITY_FAIL";

// export const updateCartQuantity = (itemId, newQuantity) => async (dispatch, getState) => {
//   const currentItems = getState().cart.items;
//   const updatedItems = currentItems.map(item => 
//     item._id === itemId ? { ...item, quantity: newQuantity } : item
//   );

//   dispatch({ type: UPDATE_QUANTITY_REQUEST, payload: { itemId } });
//   dispatch({ type: UPDATE_QUANTITY_SUCCESS, payload: updatedItems, meta: { itemId } });

//   try {
//     const response = await axios.patch(
//       `${API_URL}/cart/updatequantity`,
//       { itemId, newQuantity },
//       getConfig()
//     );
//     dispatch({ type: UPDATE_QUANTITY_SUCCESS, payload: response.data.cart.products, meta: { itemId } });
//   } catch (error) {
//     dispatch({ type: UPDATE_QUANTITY_FAIL, payload: error.message, meta: { itemId } });
//     dispatch({ type: UPDATE_QUANTITY_SUCCESS, payload: currentItems, meta: { itemId } });
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch, getState) => {
//   const currentItems = getState().cart.items;
//   const updatedItems = currentItems.filter(item => item._id !== itemId);

//   dispatch({ type: REMOVE_FROM_CART_REQUEST, payload: { itemId } });
//   dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: updatedItems, meta: { itemId } });

//   try {
//     const response = await axios.delete(
//       `${API_URL}/cart/removefromcart`,
//       { ...getConfig(), data: { itemId } }
//     );
//     dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: response.data.cart.products, meta: { itemId } });
//   } catch (error) {
//     dispatch({ type: REMOVE_FROM_CART_FAIL, payload: error.message, meta: { itemId } });
//     dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: currentItems, meta: { itemId } });
//   }
// };

// import axios from "axios";

// export const ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS";
// export const ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL";
// export const REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS";
// export const REMOVE_FROM_CART_FAIL = "REMOVE_FROM_CART_FAIL";
// export const UPDATE_CART_SUCCESS = "UPDATE_CART_SUCCESS";
// export const UPDATE_CART_FAIL = "UPDATE_CART_FAIL";
// export const GET_CART_REQUEST = "GET_CART_REQUEST";
// export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
// export const GET_CART_FAIL = "GET_CART_FAIL";
// export const CART_ERROR = "CART_ERROR";

// const getToken = () => localStorage.getItem("token");

// const handleError = (error) => {
//   console.error("API Error:", error);
//   return error.response ? error.response.data : error.message;
// };

// export const addToCart = (itemId) => async (dispatch) => {
//   try {
//     const token = getToken();
//     if (!token) throw new Error("User not authenticated");

//     const config = {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     };

//     const response = await axios.post(
//       "http://localhost:4000/cart/addtocart",
//       { itemId },
//       config
//     );

//     dispatch({
//       type: ADD_TO_CART_SUCCESS,
//       payload: response.data.cart.products, // Ensure this payload is the updated cart
//     });
//   } catch (error) {
//     dispatch({
//       type: ADD_TO_CART_FAIL,
//       payload: handleError(error),
//     });
//   }
// };

// export const getCart = () => async (dispatch) => {
//   try {
//     dispatch({ type: GET_CART_REQUEST });

//     const token = getToken();
//     if (!token) throw new Error("User not authenticated");

//     const response = await axios.get("http://localhost:4000/cart/getcart", {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     dispatch({
//       type: GET_CART_SUCCESS,
//       payload: response.data.cart.products, // Ensure this payload is the current cart state
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_CART_FAIL,
//       payload: handleError(error),
//     });
//   }
// };

// export const removeFromCart = (itemId) => async (dispatch) => {
//   try {
//     const token = getToken();
//     if (!token) throw new Error("User not authenticated");

//     const response = await axios.delete(
//       "http://localhost:4000/cart/removefromcart",
//       {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { itemId },
//       }
//     );

//     dispatch({
//       type: REMOVE_FROM_CART_SUCCESS,
//       payload: response.data.cart.products, // Ensure this payload is the updated cart
//     });
//   } catch (error) {
//     dispatch({
//       type: REMOVE_FROM_CART_FAIL,
//       payload: handleError(error),
//     });
//   }
// };

// export const updateCartQuantity = (itemId, newQuantity) => async (dispatch) => {
//   try {
//     const token = getToken();
//     if (!token) throw new Error("User not authenticated");

//     const response = await axios.patch(
//       "http://localhost:4000/cart/updatequantity",
//       { itemId, newQuantity },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     dispatch({
//       type: UPDATE_CART_SUCCESS,
//       payload: response.data.cart.products, // Ensure this payload is the updated cart
//     });
//   } catch (error) {
//     dispatch({
//       type: UPDATE_CART_FAIL,
//       payload: handleError(error),
//     });
//   }
// };

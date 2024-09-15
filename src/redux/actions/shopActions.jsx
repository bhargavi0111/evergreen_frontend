import axios from "axios";

export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

axios.defaults.baseURL = "http://localhost:4000";

export const fetchAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get("/allproducts");
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const fetchProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get(`/allproducts/${category}`);
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message,
      });
    }
  };
};

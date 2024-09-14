// import axios from 'axios';
// export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
// export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
// export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// export const fetchAllProducts = () => {
//   return async (dispatch) => {
//     dispatch({ type: FETCH_PRODUCTS_REQUEST });

//     try {
//       const response = await axios.get('http://localhost:4000/allproducts');
//       dispatch({
//         type: FETCH_PRODUCTS_SUCCESS,
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: FETCH_PRODUCTS_FAILURE,
//         payload: error.message
//       });
//     }
//   };
// };



// export const fetchProductsByCategory = (category) => async (dispatch) => {
//     console.log("Dispatching fetchProductsByCategory with category:", category); // Debug log
//     try {
//       dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
//       const response = await axios.get(`http://localhost:4000/allproducts/${category}`);
//       console.log("Category fetch success:", response.data); // Debug log
//       dispatch({
//         type: 'FETCH_PRODUCTS_SUCCESS',
//         payload: response.data,
//       });
//     } catch (error) {
//       console.error("Category fetch error:", error); // Debug log
//       dispatch({
//         type: 'FETCH_PRODUCTS_FAILURE',
//         payload: error.message,
//       });
//     }
//   };
  
import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Set up axios base URL for consistency
axios.defaults.baseURL = 'http://localhost:4000';

// Fetch all products
export const fetchAllProducts = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });

    try {
      const response = await axios.get('/allproducts');
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message
      });
    }
  };
};

// Fetch products by category
export const fetchProductsByCategory = (category) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const response = await axios.get(`/allproducts/${category}`);
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        payload: error.message
      });
    }
  };
};


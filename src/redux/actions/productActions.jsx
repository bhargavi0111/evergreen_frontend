import axios from 'axios';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Action Creators
export const fetchProductsRequest = () => ({ type: FETCH_PRODUCTS_REQUEST });
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});
export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

// Async Action Creator
export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const response = await axios.get('http://localhost:4000/products');
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};


// import {
//     FETCH_PRODUCTS_REQUEST,
//     FETCH_PRODUCTS_SUCCESS,
//     FETCH_PRODUCTS_FAILURE
//   } from '../actions/shopActions';
  
//   const initialState = {
//     products: [],
//     loading: false,
//     error: null
//   };
  
//   export const shopReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case FETCH_PRODUCTS_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
//       case FETCH_PRODUCTS_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           products: action.payload
//         };
//       case FETCH_PRODUCTS_FAILURE:
//         return {
//           ...state,
//           loading: false,
//           error: action.payload
//         };
//       default:
//         return state;
//     }
//   };
  
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../../redux/actions/shopActions';

const initialState = {
  products: [],
  loading: false,
  error: null
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null // Reset error state
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload // Update products with fetched data
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload // Set error message
      };
      // case 'OPTIMISTIC_UPDATE_PRODUCT':
      //   return {
      //     ...state,
      //     products: state.products.map(product =>
      //       product._id === action.payload.productId
      //         ? { ...product, ...action.payload.updatedData } // Merge updated fields
      //         : product
      //     )
      //   };
    default:
      return state;
  }
};


import {
  ADD_TO_CART,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_QUANTITY_SUCCESS,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  CART_ERROR,
} from "../actions/cartActions";

const initialState = {
  items: [],
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case GET_CART_REQUEST:
      return { ...state, loading: true };
    case GET_CART_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case GET_CART_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        items: action.payload,
        error: null,
      };
      case 'OPTIMISTIC_ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload], // Add the new item to the items array
          error: null,
        };
    case UPDATE_QUANTITY_SUCCESS:
      return { ...state, loading: false, items: action.payload };
    case REMOVE_FROM_CART_SUCCESS:
      return { ...state, loading: false, items: action.payload };

    case CART_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case 'OPTIMISTIC_UPDATE_QUANTITY':
  return {
    ...state,
    items: state.items.map(item =>
      item._id === action.payload.itemId
        ? { ...item, quantity: action.payload.quantity }
        : item
    )
  };
    default:
      return state;
  }
};

export default cartReducer;

// import {
//   ADD_TO_CART,
//   REMOVE_FROM_CART_SUCCESS,
//   UPDATE_QUANTITY_SUCCESS,
//   GET_CART_REQUEST,
//   GET_CART_SUCCESS,
//   GET_CART_FAIL,
//   CART_ERROR,
//   UPDATE_QUANTITY_REQUEST,
//   UPDATE_QUANTITY_FAIL,
//   REMOVE_FROM_CART_REQUEST,
//   REMOVE_FROM_CART_FAIL,
// } from "../../redux/actions/cartActions";

// const initialState = {
//   items: [],
//   error: null,
//   loading: false,
//   updating: {},
// };

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CART_REQUEST:
//       return { ...state, loading: true, error: null };
//     case GET_CART_SUCCESS:
//       return { ...state, loading: false, items: action.payload, error: null };
//     case GET_CART_FAIL:
//       return { ...state, loading: false, error: action.payload };

//     case ADD_TO_CART:
//       return {
//         ...state,
//         items: action.payload,
//         error: null,
//       };

//     case UPDATE_QUANTITY_REQUEST:
//       return {
//         ...state,
//         updating: { ...state.updating, [action.payload.itemId]: true },
//       };
//     case UPDATE_QUANTITY_SUCCESS:
//       return {
//         ...state,
//         items: action.payload,
//         updating: { ...state.updating, [action.meta.itemId]: false },
//       };
//     case UPDATE_QUANTITY_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         updating: { ...state.updating, [action.meta.itemId]: false },
//       };

//     case REMOVE_FROM_CART_REQUEST:
//       return {
//         ...state,
//         updating: { ...state.updating, [action.payload.itemId]: true },
//       };
//     case REMOVE_FROM_CART_SUCCESS:
//       return {
//         ...state,
//         items: action.payload,
//         updating: { ...state.updating, [action.meta.itemId]: false },
//       };
//     case REMOVE_FROM_CART_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         updating: { ...state.updating, [action.meta.itemId]: false },
//       };

//     case CART_ERROR:
//       return {
//         ...state,
//         error: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// export default cartReducer;

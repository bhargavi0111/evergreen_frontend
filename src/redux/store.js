import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import cartReducer from "./reducers/cartReducer";
import authReducer from "./reducers/authReducer";
import { shopReducer } from "./reducers/shopReducer";
import { themeReducer } from "./reducers/themeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
  cart: cartReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

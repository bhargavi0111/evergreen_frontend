import { createStore,applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import cartReducer from './reducers/cartReducer';
import productReducer from './reducers/productReducer';
import authReducer from './reducers/authReducer'; // Add the new reducer
import newCollectionsReducer from './reducers/newCollectionsReducer';
import { shopReducer } from './reducers/shopReducer';
import { themeReducer } from './reducers/themeReducer';

const rootReducer = combineReducers({
 
  auth: authReducer, // Add the new reducer here
  newCollections: newCollectionsReducer,
  productsData: productReducer,
  shop:shopReducer,
  cart: cartReducer,
  theme: themeReducer,

  
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
export default store;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, productsReducer, cartReducer, ordersReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

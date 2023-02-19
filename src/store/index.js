import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, productsReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

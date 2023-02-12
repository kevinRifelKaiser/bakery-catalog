import { createStore, combineReducers } from 'redux';

import { categoriesReducer, productsReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducer);

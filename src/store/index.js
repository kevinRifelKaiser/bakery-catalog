import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, productsReducer } from './reducers';

const rootReducer = combineReducers({
  category: categoriesReducer,
  products: productsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

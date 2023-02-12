import { PRODUCTS } from '../../constants/data/index';

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;

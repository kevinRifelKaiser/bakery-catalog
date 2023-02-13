/* eslint-disable no-case-declarations */
import { PRODUCTS } from '../../constants/data/index';
import { productsTypes } from '../types/products.types';

const { SELECT_PRODUCT, FILTER_PRODUCT } = productsTypes;

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productId),
      };
    case FILTER_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.productId
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;

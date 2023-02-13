import { productsTypes } from '../types/products.types';

const { SELECT_PRODUCT, FILTER_PRODUCT } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCT,
  productId: id,
});

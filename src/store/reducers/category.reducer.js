/* eslint-disable no-case-declarations */
import { CATEGORIES } from '../../constants/data/index';
import { categoryTypes } from '../types/category.types';

const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );

      if (categoryIndex === -1) return state;

      return {
        ...state,
        selected: state.categories[categoryIndex],
      };
    default:
      return state;
  }
};

export default categoriesReducer;

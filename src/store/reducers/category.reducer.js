import { CATEGORIES } from '../../constants/data/index';

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoriesReducer = (state = initialState, action) => {
  return state;
};

export default categoriesReducer;

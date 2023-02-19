import { sumTotal } from '../../utils';
import { cartTypes } from '../types/cart.types';

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART } = cartTypes;

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_TO_CART: {
      let updatedCart = [];
      if (state.items.find((item) => item.id === actions.item.id)) {
        updatedCart = state.items.map((item) => {
          if (item.id === actions.item.id) item.quantity += 1;
          return item;
        });
      } else {
        const item = { ...actions.item, quantity: 1 };
        updatedCart = [...state.items, item];
      }
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };
    }
    case REMOVE_FROM_CART: {
      let updatedCart = [];
      const getItem = state.items.find((item) => item.id === actions.id);
      if (getItem.quantity === 1) {
        updatedCart = state.items.filter((item) => item.id !== actions.id);
      } else {
        updatedCart = state.items.map((item) => {
          if (item.quantity > 1) item.quantity -= 1;
          return item;
        });
      }
      return {
        ...state,
        items: updatedCart,
        total: sumTotal(updatedCart),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;

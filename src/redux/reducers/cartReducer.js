import * as actionTypes from "../constants/cartConstant";

export const cartReducer = (state = { cartItem: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const items = action.payload;
      const exists = state.cartItem.find((meal) => meal.name == items.name);
      if (exists) {
        return;
      }
      return { ...state, cartItem: [...state.cartItem, items] };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItem: state.cartItem.filter((meal) => meal.name != action.payload),
      };

    default:
      return state;
  }
};

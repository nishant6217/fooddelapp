import * as actionType from "../constants/restConstant";

export const getRestroReducer = (state = { restro: [] }, action) => {
  switch (action.type) {
    case actionType.GET_RESTRO_SUCCESS:
      return { restro: action.payload };

    case actionType.GET_RESTRO_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const getRestroDetailReducer = (state = { restro: {} }, action) => {
  switch (action.type) {
    case actionType.GET_RESTRO_DETAIL_SUCCESS:
      return { restro: action.payload };
    case actionType.GET_RESTRO_DETAIL_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const getMealDetailReducer = (state = { meal: {} }, action) => {
  switch (action.type) {
    case actionType.GET_MEAL_DETAIL_SUCCESS:
      return { meal: action.payload };
    case actionType.GET_MEAL_DETAIL_FAIL:
      return { err: action.payload };
    default:
      return state;
  }
};

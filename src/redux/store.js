import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getRestroReducer,
  getRestroDetailReducer,
  getMealDetailReducer,
} from "./reducers/restroReducer";
import {cartReducer} from "./reducers/cartReducer";

const reducer = combineReducers({
  getRestro: getRestroReducer,
  getRestroDetail: getRestroDetailReducer,
  getMealDetail: getMealDetailReducer,
  cart: cartReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

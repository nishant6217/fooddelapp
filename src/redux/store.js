import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getRestroReducer,
  getRestroDetailReducer,
} from "./reducers/restroReducer";

const reducer = combineReducers({
  getRestro: getRestroReducer,
  getRestroDetail: getRestroDetailReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

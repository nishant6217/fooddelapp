import axios from "axios";
import * as actionTypes from "../constants/cartConstant";
const URL = "https://fooddelback.herokuapp.com";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getmeals/${id}`);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (err) {
    console.log("error", err);
  }
};
export const addAddon = (id) => (dispatch) => {
  try {
    const  data  = id;
    console.log("aaaaaaaaaaaa0 inside addon", data);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (err) {
    console.log("error", err);
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: id });
};

// var.

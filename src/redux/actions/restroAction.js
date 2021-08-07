import axios from "axios";
import * as action from "../constants/restConstant";

const URL = "http://localhost:8000";

export const getRestro = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/getrest`);
    dispatch({ type: action.GET_RESTRO_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: action.GET_RESTRO_FAIL, payload: err.response });
  }
};


export const getRestroDetails = (id) => async(dispatch) =>{
  try{
    const { data } = await axios.get(`${URL}/getrest/${id}`);
    dispatch({ type: action.GET_RESTRO_DETAIL_SUCCESS, payload: data });

  }catch(err){
    dispatch({ type: action.GET_RESTRO_DETAIL_FAIL, payload: err.response });

  }
}
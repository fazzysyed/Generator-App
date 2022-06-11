import { LOGIN_USER } from "./actionTypes";

export const loginUser = payload => async dispatch => {
    console.log(payload)
    dispatch({
      type: LOGIN_USER,
      payload: payload,
    });
  
  };
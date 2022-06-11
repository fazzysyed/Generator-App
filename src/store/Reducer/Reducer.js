import { LOGIN_USER } from "../Actions/actionTypes";

const initialState = {
    user : null
};


const Reducer = (state = initialState, action) => {
    const { type, payload } = action;
  switch(type){
    case LOGIN_USER : 
    return {
        ...state,
        user: payload,
      };
    default:
        return state;
    }
  }
   

  export default Reducer
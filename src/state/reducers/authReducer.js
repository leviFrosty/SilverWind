import { LOGIN_USER, LOGOUT_USER } from "../actionTypes";
import { auth } from "./../../fbInstance";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return action.payload.auth;
    case LOGOUT_USER:
      auth.signOut().catch((e) => console.log(e));
      return {};
    default:
      return state;
  }
};

export default reducer;

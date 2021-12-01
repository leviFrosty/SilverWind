import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userDataReducer from "./userDataReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  cart: cartReducer,
  userData: userDataReducer,
});

export default reducers;

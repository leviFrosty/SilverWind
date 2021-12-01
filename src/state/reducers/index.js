import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  userAuth: authReducer,
  cart: cartReducer,
});

export default reducers;

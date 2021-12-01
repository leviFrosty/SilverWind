import { REMOVE_USER_DATA, UPDATE_USER_DATA } from "../actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return action.payload;
    case REMOVE_USER_DATA:
      return {};
    default:
      return state;
  }
};

export default reducer;

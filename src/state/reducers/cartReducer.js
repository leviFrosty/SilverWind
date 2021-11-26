import { ADD_TO_CART } from "../actionTypes";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: action.id,
      };
    default:
      return state;
  }
};

export default reducer;

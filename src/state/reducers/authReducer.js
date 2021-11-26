const reducer = (state = {}, action) => {
  switch (action.type) {
    case "updateUser":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
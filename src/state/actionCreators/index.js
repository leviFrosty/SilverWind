export const updateUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "updateUser",
      payload: user,
    });
  };
};

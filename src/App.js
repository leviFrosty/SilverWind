import React from "react";
import "./app.css";
import AppRouter from "./Router";
import { auth } from "./fbInstance";
import { signOutUser, updateUser } from "./state/actionCreators/index";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  auth.onAuthStateChanged((user) => {
    if (user) dispatch(updateUser(user));
    else dispatch(signOutUser());
  });
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;

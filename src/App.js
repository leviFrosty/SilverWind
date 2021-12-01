import React from "react";
import { auth } from "./fbInstance";
import "./app.css";
import { connect } from "react-redux";
import AppRouter from "./Router";
import { onAuthStateChanged } from "@firebase/auth";
import { updateUser, signOutUser } from "./state/actionCreators/index";

const App = ({ dispatchUpdateUser, dispatchSignoutUser }) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatchUpdateUser(user);
    } else {
      dispatchSignoutUser();
    }
  });

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUpdateUser: (user) => dispatch(updateUser(user)),
    dispatchSignoutUser: () => dispatch(signOutUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);

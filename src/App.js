import React from "react";
import { auth } from "./fbInstance";
import "./app.css";
import { connect } from "react-redux";
import AppRouter from "./Router";
import { onAuthStateChanged } from "@firebase/auth";
import { updateUser, signOutUser } from "./state/actionCreators/index";

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;

import React, { useEffect } from "react";
import { auth } from "./fbInstance";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import AppRouter from "./Router";

function App() {
  const dispatch = useDispatch();
  const { updateUser } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    updateUser({ auth });
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { auth } from "./fbInstance";
import { ReactComponent as BlobStart } from "./Images/blobsStart.svg";
import { ReactComponent as BlobEnd } from "./Images/blobsEnd.svg";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import "./app.css";
import Footer from "./Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { updateUser } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    updateUser({ auth });
    console.log(authState);
  }, []);

  return (
    <div className="App">
      <BlobStart className="blobStart" alt="" />
      <Nav />
      <section className="main">
        <HomePage />
      </section>
      <BlobEnd className="blobEnd" alt="" />
      <Footer />
    </div>
  );
}

export default App;

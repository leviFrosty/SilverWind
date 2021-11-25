import React from "react";
import { auth, db, storage } from "./fbInstance";
import { ReactComponent as BlobStart } from "./Images/blobsStart.svg";
import { ReactComponent as BlobEnd } from "./Images/blobsEnd.svg";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import "./app.css";
import Footer from "./Components/Footer";

function App() {
  console.log(auth, db, storage);
  return (
    <div className="App">
      <BlobStart className="blobStart" alt="" />
      <Nav />
      <section className="main">
        <HomePage />
      </section>
      <Footer />
      <BlobEnd className="blobEnd" alt="" />
    </div>
  );
}

export default App;

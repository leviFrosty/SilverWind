import React from "react";
import { auth, db, storage } from "./fbInstance";
import HomePage from "./Pages/HomePage";
import Header from "./Components/Header";
import "./app.css";

function App() {
  console.log(auth, db, storage);
  return (
    <div className="App">
      <Header />
      <section className="main container">
        <HomePage />
      </section>
      <footer>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}

export default App;

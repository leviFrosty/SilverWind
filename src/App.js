import React from "react";
import { auth, db, storage } from "./fbInstance";
import HomePage from "./Pages/HomePage";
import Nav from "./Components/Nav";
import "./app.css";

function App() {
  console.log(auth, db, storage);
  return (
    <div className="App">
      <Nav />
      <section className="main">
        <HomePage />
      </section>
      <footer>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}

export default App;

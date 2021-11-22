import React from "react";
import { auth, db, storage } from "./fbInstance";
import HomePage from "./Pages/HomePage";
import "./app.css";

function App() {
  console.log(auth, db, storage);
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

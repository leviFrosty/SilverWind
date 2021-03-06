import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>There's nothing here!</h1>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

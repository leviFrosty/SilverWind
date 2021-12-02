import React from "react";
import { Link } from "react-router-dom";

export default function ForgotSubmitted() {
  return (
    <div>
      <h1>Success!</h1>
      <h2>If your account is detected, you will receive an email shortly.</h2>
      <Link to="/login">Sign in</Link>
    </div>
  );
}

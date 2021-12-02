import React from "react";
import { useNavigate } from "react-router";

export default function ForgotSubmitted() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Success!</h1>
      <h2>If your account is detected, you will receive an email shortly.</h2>
      <button onClick={() => navigate(-1, { replace: true })}>Sign in</button>
    </div>
  );
}

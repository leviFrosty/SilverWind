import { sendPasswordResetEmail } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fbInstance";
import { useNavigate } from "react-router";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const FORGOT_SUBMITTED_URL = "/forgot/submitted";
  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        navigate(FORGOT_SUBMITTED_URL, { replace: true });
      })
      .catch((e) => navigate(FORGOT_SUBMITTED_URL, { replace: true }));
  };

  return (
    <div>
      <h1>Reset your Password</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          className="forgot-email"
          type="email"
          required
          onChange={handleEmailChange}
          value={email}
        />
        <input type="submit" value="Reset Password" />
      </form>
      <Link to="/login">Back to login</Link>
    </div>
  );
}

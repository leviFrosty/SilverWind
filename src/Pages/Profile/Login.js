import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../fbInstance";
import { useLocation, useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const location = useLocation();

  const handleEmailChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const {
      target: { value },
    } = event;
    setPassword(value);
  };

  const handleNavigate = () => {
    if (location.state === null) {
      navigate("/profile", { replace: true });
      return;
    }
    navigate(location.state.redirectTo, {
      replace: true,
      state: { productToAdd: location.state.productToAdd },
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => handleNavigate())
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <h1 className="login-title">Log into SilverWind</h1>
      <form className="login" onSubmit={handleFormSubmit}>
        <label htmlFor="email">email</label>
        <input
          type="email"
          required
          name="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          required
          minLength="8"
          maxLength="40"
          name="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Log in" />
      </form>
      <Link to="/forgot">I've forgotten my password</Link>
      <p>New to SilverWind?</p>
      <span>
        <Link to="/register">Register</Link>
      </span>
    </div>
  );
}

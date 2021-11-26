import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1 className="login-title">Log into SilverWind</h1>
      <form className="login">
        <label for="email">email</label>
        <input
          type="email"
          required
          name="email"
          id="email"
          autoComplete="email"
        />
        <label for="password">password</label>
        <input
          type="password"
          required
          minLength="8"
          maxLength="40"
          name="password"
          id="password"
          autoComplete="current-password"
        />
        <input type="submit" value="Log in" />
      </form>
    </div>
  );
}

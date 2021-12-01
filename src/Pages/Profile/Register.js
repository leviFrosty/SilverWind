import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
import { auth, db } from "./../../fbInstance";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateUserData } from "./../../state/actionCreators/index";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    const {
      target: { value },
    } = e;
    setFirstName(value);
  };
  const handleLastNameChange = (e) => {
    const {
      target: { value },
    } = e;
    setLastName(value);
  };
  const handleEmailChange = (e) => {
    const {
      target: { value },
    } = e;
    setEmail(value);
  };

  const handleGenderChange = (e) => {
    const {
      target: { value },
    } = e;
    setGender(value);
  };
  const handlePasswordChange = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Adds user document for extra user data in Firebase.
        const docData = {
          firstName,
          lastName,
          gender,
          email,
          cart: [],
          likes: [],
          purchases: [],
        };
        setDoc(doc(db, "users", user.uid), docData)
          .then(() => {
            navigate("/welcome", { replace: true });
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="register container">
      <h1 className="register-title">Create an Account</h1>
      <form className="register-form" onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">first name</label>
        <input
          required
          type="text"
          name="first name"
          id="firstName"
          autoComplete="given-name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastName">last name</label>
        <input
          required
          type="text"
          name="last name"
          id="lastName"
          autoComplete="family-name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <label htmlFor="select-gender">gender</label>
        <select
          required
          name="gender"
          id="select-gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">-- Choose Gender --</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="new-email">email</label>
        <input
          required
          type="email"
          id="new-email"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="new-password">password</label>
        <input
          required
          type="password"
          name="password"
          maxLength="40"
          id="new-password"
          autoComplete="new-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p className="register__description">
          By creating your account, you agree to our{" "}
          <Link className="register__legalLinks" to="/terms-and-conditions">
            Terms and Conditions
          </Link>
          . For full details on how and why SilverWind uses your personal data
          please see our{" "}
          <Link className="register__legalLinks" to="/privacy-notice">
            Privacy Notice
          </Link>
          .
        </p>
        <input type="submit" value="Create Account" />
      </form>
      <p>
        Already registered? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};
export default Register;

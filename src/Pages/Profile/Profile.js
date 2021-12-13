import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../fbInstance";
import { signOut } from "@firebase/auth";
import { auth } from "./../../fbInstance";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";

export default function Profile() {
  const [userData, setuserData] = useState({});
  let navigate = useNavigate();
  let user = auth.currentUser;

  const handleUserValidation = () => {
    if (user === null) {
      navigate("/login", { replace: true });
      return;
    }
    getUserData();
  };

  const getUserData = () => {
    const docRef = doc(db, "users", user.uid);
    onSnapshot(docRef, (doc) => {
      setuserData(doc.data());
    });
  };

  useEffect(() => {
    handleUserValidation();
  }, [user]);

  const handleSignOut = () => {
    signOut(auth);
    navigate("/login");
  };

  return (
    <div className="profile">
      <div className="profile-start">
        <h1 className="profile__header">Hello {userData.firstName}</h1>
        <button className="take-me-back" onClick={() => navigate(-1)}>
          Take me back
        </button>
      </div>
      {userData.isAdmin ? (
        <Link to="/admin/dashboard">Admin Portal</Link>
      ) : null}
      <button className="button-secondary-outline" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

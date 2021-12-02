import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../fbInstance";
import { signOut } from "@firebase/auth";
import { auth } from "./../../fbInstance";

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
    user = auth.currentUser;
  };

  return (
    <div>
      <h1>Hello {userData.firstName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

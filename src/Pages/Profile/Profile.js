import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../fbInstance";
import { signOut } from "@firebase/auth";
import { auth } from "./../../fbInstance";

export default function Profile() {
  const [userData, setuserData] = useState({});
  const user = auth.currentUser;
  let navigate = useNavigate();

  const handleRedirect = () => {
    if (user === null) {
      navigate("/login");
    }
  };

  const getUserData = () => {
    const docRef = doc(db, "users", user.uid);
    onSnapshot(docRef, (doc) => {
      setuserData(doc.data());
    });
  };

  // const currentUser = auth.currentUser;
  // const userDocRef = doc(db, "users", auth.currentUser.uid);
  // onSnapshot(userDocRef, (doc) => {
  //   const data = doc.data();
  //   updateUserData(data);
  //   console.log(doc.data());
  // });

  useEffect(() => {
    handleRedirect();
    getUserData();
  }, [user]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <h1>Hello {userData.firstName}</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { doc, onSnapshot } from "@firebase/firestore";
import { db } from "../../fbInstance";

export default function Profile() {
  const { auth } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  // if (!auth.currentUser) {
  //   navigate("/login");
  // }
  // const state = useSelector((state) => state);

  // const currentUser = auth.currentUser;
  // const userDocRef = doc(db, "users", auth.currentUser.uid);
  // onSnapshot(userDocRef, (doc) => {
  //   const data = doc.data();
  //   updateUserData(data);
  //   console.log(doc.data());
  // });

  useEffect(() => {
    console.log(auth);
    // const userDocRef = doc(db, "users", auth.currentUser.uid);
    // onSnapshot(userDocRef, (doc) => {
    //   const data = doc.data();
    //   updateUserData(data);
    //   console.log(doc.data());
    // });
  }, [auth]);

  const handleSignOut = () => {};

  return (
    <div>
      <h1>Profile</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

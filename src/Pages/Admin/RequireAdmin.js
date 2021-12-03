import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { db } from "../../fbInstance";

export default function RequireAdmin() {
  const uid = useSelector((state) => state.userAuth.uid);
  let navigate = useNavigate();

  const handleUserDataFetch = async () => {
    if (!uid) navigate(-1, { replace: true });
    let docRef = await doc(db, "users", uid);
    await getDoc(docRef)
      .then((doc) => {
        const userData = doc.data();
        if (userData.isAdmin) {
          return console.log("user is admin");
        }
        return console.log("user is not admin");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (uid) {
      handleUserDataFetch();
    }
  }, [uid]);
  return <></>;
}

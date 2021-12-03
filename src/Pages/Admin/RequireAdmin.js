import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { db } from "../../fbInstance";

export default function RequireAdmin() {
  const uid = useSelector((state) => state.userAuth.uid);
  let navigate = useNavigate();

  const validateAdmin = async () => {
    let docRef = await doc(db, "users", uid);
    await getDoc(docRef)
      .then((doc) => {
        const userData = doc.data();
        if (userData.isAdmin) {
          return navigate("dashboard", { replace: true });
        }
        return navigate("/", { replace: true });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (uid) {
      validateAdmin();
    }
  }, [uid]);
  return (
    <div className="admin">
      <Outlet />
    </div>
  );
}

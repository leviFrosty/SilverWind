import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import Spinner from "../../Components/Spinner";
import { db } from "../../fbInstance";

export default function RequireAdmin() {
  const [init, setInit] = useState(false);
  const uid = useSelector((state) => state.userAuth.uid);
  let navigate = useNavigate();

  const validateAdmin = async () => {
    let docRef = await doc(db, "users", uid);
    await getDoc(docRef)
      .then((doc) => {
        const userData = doc.data();
        if (!userData.isAdmin) {
          return navigate("/", { replace: true });
        }
        setInit(true);
      })
      .catch((e) => {
        console.log(e);
        navigate("/", { replace: true });
      });
  };

  useEffect(() => {
    if (uid) {
      validateAdmin();
    }
  }, [uid]);
  return (
    <div className="admin container">
      {init ? (
        <Outlet />
      ) : (
        <div className="admin-spinner">
          <Spinner />
        </div>
      )}
    </div>
  );
}

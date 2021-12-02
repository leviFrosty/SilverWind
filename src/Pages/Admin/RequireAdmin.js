import { doc, onSnapshot } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth, db } from "../../fbInstance";
import AdminDashboard from "./AdminDashboard";

export default function RequireAdmin() {
  const [userData, setuserData] = useState({});
  const [init, setInit] = useState(false);
  let navigate = useNavigate();
  let user = auth.currentUser;

  const handleAdminAuth = () => {
    console.log("userData:", userData);
    // TODO: Resolve isadmin check
    if (userData.isAdmin) {
      console.log("user is admin");
      return;
    }
  };

  if (user == null) {
    navigate(-1, { replace: true });
  } else {
    const docRef = doc(db, "users", user.uid);
    onSnapshot(docRef, (doc) => {
      setInit(true);
      return setuserData(doc.data());
    });
  }

  useEffect(() => {
    handleAdminAuth();
  }, [init]);
  // let auth = useAuth();

  // if (!auth.user) {
  // Redirect them to the /login page, but save the current location they were
  // trying to go to when they were redirected. This allows us to send them
  // along to that page after they login, which is a nicer user experience
  // than dropping them off on the home page.
  // return <Navigate to="/login" state={{ from: location }} />;
  // }
  return <AdminDashboard />;
}

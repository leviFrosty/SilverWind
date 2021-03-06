import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Welcome() {
  const user = useSelector((store) => store.userData);
  console.log(user);
  return (
    <div>
      Welcome to SilverWinds!
      <Link to="/">Go Home</Link>
      <Link to="/">See All Products</Link>
      {/* TODO: Add functionality to detect if asked to sign in / register
       from cart or checkout, then redirect user back */}
    </div>
  );
}

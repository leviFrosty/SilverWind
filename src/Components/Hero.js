import React, { useEffect } from "react";
import HeroHeartVid from "../Images/heroHeartVideo.gif";
import { ReactComponent as Underline } from "../Images/heroUnderline.svg";
import { ReactComponent as MagnifyingGlass } from "../Images/magnifyingGlass.svg";
import { collection, doc, getDoc, onSnapshot } from "@firebase/firestore";
import { db } from "../fbInstance";
import { Link } from "react-router-dom";

export default function Hero() {
  useEffect(() => {
    const docArray = collection(db, "rings");
    onSnapshot(docArray, (snapshot) => {
      const docArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });
  }, []);

  return (
    <div className="hero">
      <div className="hero-start">
        <h1 className="hero__title">
          personalized handmade
          <span className="hero__pop">jewelry</span>
        </h1>
        <Underline />
        <Link to="/products" className="hero__cta button-secondary clickable">
          <MagnifyingGlass />
          Shop Now
        </Link>
      </div>
      <div className="hero-end">
        <img className="hero__video" src={HeroHeartVid} alt="" />
        <span className="hero__craftedby">Designed and Crafted by Julia</span>
      </div>
    </div>
  );
}

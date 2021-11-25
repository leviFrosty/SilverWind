import React from "react";
import HeroHeartVid from "../Images/heroHeartVideo.gif";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-start">
        <h1 className="hero__title">personalized handmade jewelry</h1>
      </div>
      <div className="hero-end">
        <img className="hero__video" src={HeroHeartVid} alt="" />
        <span className="hero__craftedby">
          Designed and Crafted by Julia Hodory
        </span>
      </div>
    </div>
  );
}

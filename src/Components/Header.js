import React, { useState } from "react";
import { ReactComponent as HeartEmpty } from "../Images/heart-empty.svg";
import { ReactComponent as HeartFull } from "../Images/heart-solid.svg";
import { ReactComponent as ProfileIconEmpty } from "../Images/profileIcon.svg";
import { ReactComponent as ProfileIconFull } from "../Images/user-circle-solid.svg";
import { ReactComponent as Cart } from "../Images/cart.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [hoverHeart, setHoverHeart] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);
  return (
    <header>
      <div className="nav-container">
        <div className="nav">
          <div className="nav-start">
            <span className="nav__logo clickable">SilverWind</span>
          </div>
          <div className="nav-links">
            <a className="clickable">categories</a>
            <a className="clickable">portfolio</a>
            <span>|</span>
            <a className="clickable">rings</a>
            <a className="clickable">necklaces</a>
            <a className="clickable">earrings</a>
          </div>
          <div className="nav-end">
            <div
              className="navProfile-container clickable"
              onMouseEnter={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
            >
              {hoverProfile ? (
                <ProfileIconFull
                  className="nav__icon"
                  title="Profile"
                  alt="Profile"
                />
              ) : (
                <ProfileIconEmpty
                  className="nav__icon nav__profile"
                  title="Profile"
                  alt="Profile"
                />
              )}
            </div>
            <div
              className="navHeart-container clickable"
              onMouseEnter={() => setHoverHeart(true)}
              onMouseLeave={() => setHoverHeart(false)}
            >
              {hoverHeart ? (
                <HeartFull
                  className="nav__icon nav__heart"
                  title="Likes"
                  alt="Likes"
                />
              ) : (
                <HeartEmpty
                  className="nav__icon nav__heart"
                  title="Likes"
                  alt="Likes"
                />
              )}
            </div>
            <div
              className="navCart-container clickable"
              title="Cart"
              alt="Cart"
            >
              <span>Cart</span>
              <Cart className="nav__icon nav__cart" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

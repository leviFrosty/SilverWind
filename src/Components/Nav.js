import React, { useState } from "react";
import { ReactComponent as HeartEmpty } from "../Images/heart-empty.svg";
import { ReactComponent as HeartFull } from "../Images/heart-solid.svg";
import { ReactComponent as ProfileIconEmpty } from "../Images/profileIcon.svg";
import { ReactComponent as ProfileIconFull } from "../Images/user-circle-solid.svg";
import { ReactComponent as Cart } from "../Images/cart.svg";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const [hoverHeart, setHoverHeart] = useState(false);
  const [hoverProfile, setHoverProfile] = useState(false);

  return (
    <header>
      <div className="nav-container">
        <div className="nav">
          <div className="nav-start">
            <NavLink to="/" className="nav__logo clickable">
              SilverWind
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="about-me" className="clickable">
              about me
            </NavLink>
            <NavLink to="portfolio" className="clickable">
              portfolio
            </NavLink>
            <NavLink to="products" className="clickable">
              categories
            </NavLink>
            <span>|</span>
            <NavLink to="rings" className="clickable">
              rings
            </NavLink>
            <NavLink to="necklaces" className="clickable">
              necklaces
            </NavLink>
            <NavLink to="earrings" className="clickable">
              earrings
            </NavLink>
          </div>
          <div className="nav-end">
            <div
              className="navProfile-container clickable"
              onMouseEnter={() => setHoverProfile(true)}
              onMouseLeave={() => setHoverProfile(false)}
            >
              <Link to="/login">
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
              </Link>
            </div>
            <div
              className="navHeart-container clickable"
              onMouseEnter={() => setHoverHeart(true)}
              onMouseLeave={() => setHoverHeart(false)}
            >
              <Link to="likes">
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
              </Link>
            </div>
            <Link
              to="cart"
              className="navCart-container clickable"
              title="Cart"
              alt="Cart"
            >
              <span>Cart</span>
              <Cart className="nav__icon nav__cart" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

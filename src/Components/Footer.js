import React from "react";
import { ReactComponent as InstagramLogo } from "../Images/instagram.svg";
import { ReactComponent as TikTokLogo } from "../Images/tiktok.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-start">
          <ul>
            <li className="footer__title">Help</li>
            <li className="clickable footer__li">Contact Us</li>
            <li className="clickable footer__li">Delivery Information</li>
            <li className="clickable footer__li">Return Policy</li>
            <li className="clickable footer__li">FAQ</li>
          </ul>
          <ul>
            <li className=" footer__title">My Account</li>
            <li className="clickable footer__li">Login</li>
            <li className="clickable footer__li">Register</li>
          </ul>
          <ul>
            <li className=" footer__title">Pages</li>
            <li className="clickable footer__li">FAQ</li>
            <li className="clickable footer__li">All Products</li>
            <li className="clickable footer__li">About Me</li>
            <li className="clickable footer__li">Portfolio</li>
          </ul>
        </div>
        <div className="footer-end">
          <div className="footer-socialsTop">
            <h6 className="footer__title">More from SilverWind</h6>
          </div>
          <div className="footer-socialsBottom">
            <InstagramLogo className="clickable" />
            <TikTokLogo className="clickable" />
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="footer-container container">
          <div className="footerLegal-start">Legal Start</div>
          <div className="footerLegal-end">Legal End</div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { ReactComponent as InstagramLogo } from "../Images/instagram.svg";
import { ReactComponent as TikTokLogo } from "../Images/tiktok.svg";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
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
              <a href="https://www.instagram.com/silverwinds/" target="_blank">
                <InstagramLogo className="clickable footer__socials" />
              </a>
              <a href="https://www.tiktok.com/@silver.winds" target="_blank">
                <TikTokLogo className="clickable footer__socials" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="footer-container container">
          <div className="footerLegal-start">
            <p className="footerLegal__text">
              &copy; 2020-{year} SilverWind LLC
            </p>
          </div>
          <div className="footerLegal-end">
            <ul>
              <a
                href="https://github.com/leviFrosty/SilverWind/issues"
                target="_blank"
                className="clickable footerLegal__text footerLegal__li"
              >
                Report a Problem with This Page
              </a>
              <li className="clickable footerLegal__text footerLegal__li">
                Privacy Policy
              </li>
              <li className="clickable footerLegal__text footerLegal__li">
                Terms of Use
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

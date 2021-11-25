import React from "react";
import { ReactComponent as InstagramLogo } from "../Images/instagram.svg";
import { ReactComponent as TikTokLogo } from "../Images/tiktok.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-start"></div>
        <div className="footer-end">
          <div className="footer-SocialsTop">
            <h6>More from SilverWind</h6>
          </div>
          <div className="footer-SocialsBottom">
            <InstagramLogo />
            <TikTokLogo />
          </div>
        </div>
      </div>
    </footer>
  );
}

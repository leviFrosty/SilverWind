import React from "react";

export default function Header() {
  return (
    <header>
      <div className="nav-container">
        <div className="nav">
          <div className="nav-start">
            <span className="nav__logo">SilverWind</span>
          </div>
          <div className="nav-links">Nav Links</div>
          <div className="nav-end">Nav End</div>
        </div>
      </div>
    </header>
  );
}

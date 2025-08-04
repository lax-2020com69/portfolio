import React from "react";
import "./Header.css";

function Header({ darkMode }) {
  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="header-content">
        <div className="header-text">
          <h1>Hello, I'm Laxman</h1>
          <p>A passionate Web Developer</p>

          {/* Link to CV in public folder */}
          <a
            href="portfolio/cv/my-fcv.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Laxman's CV in a new tab"
          >
            <button className="button" type="button">
              <span>CV : Laxman</span>
            </button>
          </a>
        </div>

        <div className="header-image">
          {process.env.REACT_APP_PROFILE ? (
            <img
              src={process.env.REACT_APP_PROFILE}
              alt="Laxman's Profile"
              loading="lazy"
              decoding="async"
              className="profile-image"
            />
          ) : (
            <div className="placeholder-image" aria-label="No profile image available">
              No Image
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

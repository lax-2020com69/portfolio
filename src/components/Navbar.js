import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;

    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      id === "home"
        ? sessionStorage.removeItem("lastSection")
        : sessionStorage.setItem("lastSection", id);
    }

    closeMenu();
  };

  const handleKeyDown = (event) => {
    if (["Enter", " "].includes(event.key)) {
      event.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-container">
        <button
          className="navbar-logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            sessionStorage.removeItem("lastSection");
            closeMenu();
          }}
          aria-label="Scroll to top"
        >
          {/*My Portfolio*/}
          Lax
        </button>

        <div
          className="menu-icon"
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button className="nav-links" onClick={() => scrollToSection(id)}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

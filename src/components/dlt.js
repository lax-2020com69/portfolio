import React from "react";
import "./dlt.css";

function Dlt({ darkMode, setDarkMode }) {
  const toggleMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <button
      onClick={toggleMode}
      className={`theme-toggle ${darkMode ? "dark" : "light"}`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
}

export default Dlt;

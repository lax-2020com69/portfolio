import React, { useState, useLayoutEffect, useRef } from "react";
import "./App.css";
import "./Theme.css";

// Component imports
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Dlt from "./components/dlt";
import ScrollDisplay from "./components/ScrollDisplay";

function App() {
  // Dark mode state (no localStorage persistence)
  const [darkMode, setDarkMode] = useState(false);

  // Flag to scroll only once
  const hasScrolled = useRef(false);

  // Scroll to saved section from sessionStorage with 100px offset
  useLayoutEffect(() => {
    if (!hasScrolled.current) {
      const lastSection = sessionStorage.getItem("lastSection");

      if (lastSection) {
        const element = document.getElementById(lastSection);
        if (element) {
          const yOffset = -120; // Adjust this offset as needed (e.g., navbar height)
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });

          hasScrolled.current = true;
          sessionStorage.removeItem("lastSection");
        }
      }
    }
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      {/* Scroll progress bar */}
      <ScrollDisplay />

      {/* Dark/Light toggle button */}
      <Dlt darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Navigation */}
      <Navbar />

      {/* Header Section */}
      <header id="home">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {/*<Header />*/}
      </header>

      <main>
        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

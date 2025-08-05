import React, { useState, useEffect } from "react";

function ScrollDisplay() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);

      // Show scroll-to-top button after scrolling 100px
      setShowScrollTop(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial update
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        aria-label="Page scroll progress"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollPercent)}
        style={{
          position: "fixed",
          top: 80,
          left: 0,
          width: "100%",
          height: "6px",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: `${scrollPercent}%`,
            height: "100%",
            backgroundColor: "#4caf50", // green bar color
            transition: "width 0.2s ease-out",
          }}
        />
      </div>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: 85,
            right: 30,
            backgroundColor: "#4caf50",
            border: "none",
            borderRadius: "50%",
            width: 48,
            height: 48,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            color: "white",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
            opacity: 0.5,
            transition: "background-color 0.3s ease, opacity 0.3s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#388e3c";
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "#4caf50";
            e.currentTarget.style.opacity = "0.5";
          }}
        >
          {/* Up arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </>
  );
}

export default ScrollDisplay;

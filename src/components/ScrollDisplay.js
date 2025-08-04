import React, { useState, useEffect } from "react";

function ScrollDisplay() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = (scrollTop / scrollHeight) * 100;
      setScrollPercent(scrolled);
      setShowScrollTop(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
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
            backgroundColor: "#4caf50",
            transition: "width 0.2s ease-out",
          }}
        />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "fixed",
            bottom: 85,
            right: 30,
            backgroundColor: "#4caf50",
            border: "none",
            borderRadius: hovered ? "24px" : "50%",
            width: hovered ? 140 : 48,
            height: 48,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            color: "white",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: hovered ? "space-around" : "center",
            padding: hovered ? "0 12px" : 0,
            zIndex: 10000,
            opacity: 1,
            transition:
              "width 0.3s ease, border-radius 0.3s ease, padding 0.3s ease",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {/* Up arrow icon */}
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

          {/* Label on hover */}
          {hovered && (
            <span
              style={{
                fontSize: 14,
                fontWeight: "bold",
                userSelect: "none",
                color: "white",
              }}
            >
              Scroll to top
            </span>
          )}
        </button>
      )}
    </>
  );
}

export default ScrollDisplay;

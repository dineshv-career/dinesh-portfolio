"use client";

import { useEffect, useState } from "react";

const CHOICES = ["light", "system", "dark"];

function applyTheme(pref) {
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  const resolved = pref === "system" ? (mq.matches ? "light" : "dark") : pref;
  document.documentElement.setAttribute("data-theme", resolved);
}

export default function ThemeToggle() {
  const [active, setActive] = useState("system");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "system";
    setActive(stored);

    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const onChange = () => {
      if ((localStorage.getItem("theme") || "system") === "system") {
        applyTheme("system");
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function setPref(pref) {
    localStorage.setItem("theme", pref);
    applyTheme(pref);
    setActive(pref);
  }

  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      <button
        type="button"
        className={`theme-btn${active === "light" ? " active" : ""}`}
        aria-label="Light"
        title="Light"
        aria-pressed={active === "light"}
        onClick={() => setPref("light")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
      <button
        type="button"
        className={`theme-btn${active === "system" ? " active" : ""}`}
        aria-label="System"
        title="System"
        aria-pressed={active === "system"}
        onClick={() => setPref("system")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      </button>
      <button
        type="button"
        className={`theme-btn${active === "dark" ? " active" : ""}`}
        aria-label="Dark"
        title="Dark"
        aria-pressed={active === "dark"}
        onClick={() => setPref("dark")}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
    </div>
  );
}

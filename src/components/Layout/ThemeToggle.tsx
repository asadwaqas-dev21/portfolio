import { useCallback, useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [isLight, setIsLight] = useState<boolean>(() => {
    try {
      return localStorage.getItem("theme") === "light";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light-mode");
      document.documentElement.classList.add("light-mode");
      try {
        localStorage.setItem("theme", "light");
      } catch {
        // ignore storage errors
      }
    } else {
      document.body.classList.remove("light-mode");
      document.documentElement.classList.remove("light-mode");
      try {
        localStorage.setItem("theme", "dark");
      } catch {
        // ignore storage errors
      }
    }
  }, [isLight]);

  const toggle = useCallback(() => {
    setIsLight((prev) => !prev);
  }, []);

  return (
    <div
      className="theme-btn"
      onClick={toggle}
      title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
      aria-label="Toggle Theme"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <i className={isLight ? "fas fa-moon" : "fas fa-sun"}></i>
    </div>
  );
};

export default ThemeToggle;

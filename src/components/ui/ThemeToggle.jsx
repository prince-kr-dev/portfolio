import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [dark, setDark] = useState(localStorage.theme === "dark");

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="
    group
    rounded-lg
    border border-(--border)
    bg-(--bg)/60
    p-2
    transition-all
    duration-300
    ease-out
    hover:bg-(--bg)
    hover:border-(--text)/20
    hover:shadow-md
    hover:scale-105
    active:scale-95
  "
    >
      <span
        className="
      block
      text-(--text)
      transition-transform
      duration-300
      group-hover:-rotate-35
    "
      >
        {dark ? <FiSun size={20} /> : <FaMoon size={20} />}
      </span>
    </button>
  );
}

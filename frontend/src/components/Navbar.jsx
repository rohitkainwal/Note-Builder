import { useEffect, useState } from "react";
import ThemeColorPicker from "./ThemeColorPicker";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <nav className="fixed top-0 z-20 w-full px-2">
      {/* INNER CONTAINER */}
      <div
        className={`mx-auto mt-2  px-2 sm:px-6 lg:px-12
  transition-all duration-500 ease-out
  rounded-2xl
  ${
    scrolled
      ? "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl backdrop-saturate-150 shadow-xl border border-white/20 scale-[0.97] max-w-5xl"
      : "bg-transparent scale-100 max-w-6xl"
  }`}
      >
        <div
          className={`relative flex flex-wrap items-center justify-between gap-6
  transition-all duration-300 ease-out
  ${scrolled ? "py-3" : "py-4"}`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[rgb(var(--color-primary))] rounded-xl flex items-center justify-center shadow-md">
              <FaBook className="text-white text-lg" />
            </div>

            <Link to="/">
              <h1 className="text-2xl font-bold flex items-center">
                <span className="dark:text-white text-zinc-900">Notes</span>
                <span className="text-[rgb(var(--color-primary))]">era</span>
              </h1>
            </Link>
          </div>

          {/* Right Controls */}
          <div className="relative flex items-center gap-4 z-50">
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-xl bg-[rgb(var(--color-primary))]
              hover:scale-105 transition-transform shadow-md flex items-center justify-center"
            >
              🎨
            </button>

            <button
              onClick={() => setDark(!dark)}
              className="relative w-16 h-10 rounded-full
              bg-gray-200 dark:bg-zinc-700
              transition-colors duration-300
              flex items-center px-1 shadow-inner"
            >
              <span
                className={`absolute w-8 h-8 rounded-full bg-white dark:bg-zinc-900 shadow-md
                transition-all duration-300 flex items-center justify-center
                ${dark ? "translate-x-6" : "translate-x-0"}`}
              >
                {dark ? "🌙" : "☀️"}
              </span>
            </button>

            {open && <ThemeColorPicker close={() => setOpen(false)} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

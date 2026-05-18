import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Divisions", href: "/divisions" },
  { label: "Team", href: "/#team" },
  { label: "Work", href: "/#work" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

function resolveLogo(isDark) {
  return isDark ? "/public/logos/darklogo.png?v=2" : "/public/logos/lightlogo.png?v=2";
}

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(location.pathname !== "/");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = savedTheme === "dark" || (!savedTheme && systemPrefersDark);
    setIsDark(nextDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(location.pathname !== "/" || window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === "/careers") return location.pathname === "/careers";
    if (href === "/divisions") return location.pathname === "/divisions";
    return false;
  };

  return (
    <header
      id="header"
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-light-bg dark:bg-dark-bg shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img
            id="logo-img"
            src={resolveLogo(isDark)}
            alt="MediumMinds Logo"
            className="h-8 md:h-10 transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-bold text-xl tracking-tight" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "!text-[#FF5E2C]" : ""}`}
            >
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="btn-primary">
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setIsDark((value) => !value)}
            className="p-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-300"
            aria-label="Toggle theme"
          >
            <i id="theme-icon" className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`} />
          </button>
        </nav>

        <button
          type="button"
          id="mobile-menu-btn"
          className="md:hidden text-2xl p-2"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle mobile menu"
        >
          <i className="fas fa-bars" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${
          mobileOpen ? "flex" : "hidden"
        } md:hidden absolute top-full left-0 w-full bg-light-bg dark:bg-dark-bg border-b border-light-border dark:border-dark-border shadow-lg py-4 flex-col items-center gap-4 transition-all`}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`mobile-nav-link ${isActive(item.href) ? "text-primary" : ""}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="/#contact" className="btn-primary w-11/12 text-center" onClick={() => setMobileOpen(false)}>
          Get Started
        </a>
        <button
          type="button"
          id="mobile-theme-toggle"
          onClick={() => setIsDark((value) => !value)}
          className="p-2 w-full flex justify-center border-t border-light-border dark:border-dark-border mt-2 pt-4"
        >
          <i id="mobile-theme-icon" className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`} /> Switch Theme
        </button>
      </div>
    </header>
  );
}

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "community", label: "Community" },
  { id: "blog", label: "Blog" },
];

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const [active, setActive] = useState<string>(hash ? hash.slice(1) : "home");
  const [dark, setDark] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    if (hash) setActive(hash.slice(1));
    else if (!isHome) setActive("blog");
  }, [hash, isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || !isHome
          ? "backdrop-blur-md bg-white/70 border-b border-slate-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/#home"
          className="text-lg font-bold tracking-tight text-brand-600"
        >
          Lily Aguirre
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={`/#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`nav-link ${
                  active === item.id ? "nav-link-active" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setDark((d) => !d)}
          className="icon-btn"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </nav>
    </header>
  );
}

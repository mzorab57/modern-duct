import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ShinyButton from "./ui/shiny-button";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Projects", to: "/projects" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Design", to: "/design" },
  { label: "Export", to: "/export" },
];

function getLinkClasses(isActive) {
  return [
    "transition-colors duration-300",
    isActive ? "text-white" : "text-white/65 hover:text-white",
  ].join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isHome = location.pathname === "/";
  const closeMenu = () => setIsOpen(false);

  const shellClasses = useMemo(
    () =>
      [
        "fixed inset-x-0 top-0 z-[90]",
        isHome
          ? "bg-gradient-to-b from-black/55 via-black/20 to-transparent"
          : "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10",
      ].join(" "),
    [isHome]
  );

  return (
    <>
      <header className={shellClasses}>
        <div className="mx-auto flex  max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/logo2.png" alt="Duct" className="w-24 scale-150 " />
                     </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => getLinkClasses(isActive)}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/projects" onClick={closeMenu}>
              <ShinyButton className="px-5 py-3">Explore Work</ShinyButton>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white backdrop-blur transition hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[89] bg-black/70 backdrop-blur-md transition duration-300 lg:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex min-h-screen flex-col px-4 pb-8 pt-24">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.32em] text-[#b7a801]">
                Navigation
              </p>
              <p className="mt-2 text-sm text-white/55">
                Explore all pages from one responsive menu.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl border px-4 py-4 text-base transition",
                      isActive
                        ? "border-[#b7a801]/30 bg-[#b7a801]/10 text-white"
                        : "border-white/10 bg-white/5 text-white/75 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <Link to="/projects" className="mt-6 inline-flex w-full" onClick={closeMenu}>
              <ShinyButton className="w-full justify-center px-5 py-3">
                Explore Work
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

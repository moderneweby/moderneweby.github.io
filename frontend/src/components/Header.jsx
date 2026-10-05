import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { useUI } from "../context/ui";
import { NAV, PHONE, PHONE_HREF } from "../data/content";
import { EASE } from "./Reveal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openReservation } = useUI();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (menuOpen) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <>
      <header
        data-testid="site-header"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-leska-deep/90 backdrop-blur-md border-b border-cream/10 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                data-testid={`nav-link-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className={({ isActive }) =>
                  `text-[0.82rem] font-medium tracking-wide transition-colors duration-300 hover:text-zlato ${
                    isActive ? "text-zlato" : "text-cream/85"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-testid="header-reserve-button"
              onClick={openReservation}
              className="hidden md:inline-flex h-11 cursor-pointer items-center gap-2 rounded-full bg-terracotta px-6 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-[#FDF6ED] transition-all duration-300 hover:bg-terracotta-dark hover:-translate-y-0.5 active:scale-[0.97]"
            >
              Rezervovať
            </button>
            <button
              type="button"
              data-testid="nav-toggle"
              aria-label={menuOpen ? "Zavrieť menu" : "Otvoriť menu"}
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-cream ring-1 ring-cream/25 transition-colors hover:bg-cream/10"
            >
              {menuOpen ? <X size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            data-testid="mobile-menu"
            className="fixed inset-0 z-[60] flex flex-col bg-leska-deep text-cream lg:hidden"
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="flex h-16 items-center justify-between px-5">
              <Logo />
              <button
                type="button"
                data-testid="mobile-menu-close"
                aria-label="Zavrieť menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-cream/25"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-7">
              {NAV.map((item, i) => (
                <span key={item.to} className="block overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.7, delay: 0.06 + i * 0.05, ease: EASE }}
                  >
                    <NavLink
                      to={item.to}
                      data-testid={`mobile-menu-link-${item.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className={({ isActive }) =>
                        `block py-2 font-serif text-[2rem] leading-tight transition-colors ${
                          isActive ? "italic text-zlato" : "text-cream hover:text-zlato"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                </span>
              ))}
            </nav>
            <div className="px-7 pb-10">
              <a
                href={PHONE_HREF}
                data-testid="mobile-menu-call-button"
                className="flex h-12 items-center justify-center gap-2.5 rounded-full bg-terracotta text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#FDF6ED]"
              >
                <Phone size={16} /> {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

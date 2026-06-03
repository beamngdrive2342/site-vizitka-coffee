import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Volume2, VolumeX, Instagram, Menu, X, Send } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useScrollProgress } from "../hooks/useScrollProgress";

export const Header = () => {
  const { lang, setLang, t, theme, setTheme, ambientAudio, setAmbientAudio, activeTab } = useAppContext();
  const { scrollProgress, scrolled } = useScrollProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about",   label: t.navAbout },
    { id: "coffee",  label: t.navCoffee },
    { id: "cycling", label: t.navCycling },
    { id: "gear",    label: t.navGear },
    { id: "links",   label: t.navLinks },
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* ════════════════════════════════════════
          HEADER BAR
      ════════════════════════════════════════ */}
      <header
        id="nav"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-bg-primary/85 backdrop-blur-md border-b border-text-primary/10 shadow-xs"
            : "py-4 md:py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center relative">

          {/* Brand Logo */}
          <a href="#hero" className={`flex flex-col group py-1 z-[60] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} id="nav-logo" onClick={closeMenu}>
            <span className="text-xl md:text-2xl font-display font-black tracking-[0.18em] text-text-primary group-hover:text-accent-blue transition-all duration-300 uppercase">
              ИВАН
            </span>
            <span className="text-[8px] font-mono tracking-[0.4em] text-text-primary/50 uppercase">
              {t.metaSub}
            </span>
          </a>

          {/* ─── Desktop Pill Nav ─── */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-text-primary/5 hover:bg-text-primary/8 rounded-full p-1 border border-text-primary/10 items-center gap-1 backdrop-blur-md transition-all">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 relative nav-link-animated ${
                  activeTab === link.id ? "text-bg-primary font-semibold" : "text-text-primary/70 hover:text-text-primary"
                }`}
              >
                {activeTab === link.id && (
                  <motion.span
                    layoutId="nav-pill-bg"
                    className="absolute inset-0 bg-text-primary rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* ─── Desktop Right Controls ─── */}
          <div className="hidden md:flex items-center gap-2 md:gap-3 z-10">
            {/* Language toggle */}
            <div className="flex items-center bg-text-primary/5 border border-text-primary/10 p-0.5 rounded-full font-mono text-[9px]">
              <button
                onClick={() => setLang("ru")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "ru" ? "bg-text-primary text-bg-primary font-semibold" : "text-text-primary/60 hover:text-text-primary"
                }`}
              >RU</button>
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-colors ${
                  lang === "en" ? "bg-text-primary text-bg-primary font-semibold" : "text-text-primary/60 hover:text-text-primary"
                }`}
              >EN</button>
            </div>

            {/* Instagram CTA */}
            <a
              href="https://www.instagram.com/vanoshka_bull/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-text-primary text-bg-primary hover:bg-accent-blue px-4 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors"
              id="cta-ig-header"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
          </div>

          {/* ─── Mobile Right Controls (always visible) ─── */}
          <div className="md:hidden flex items-center gap-2 z-50">
            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center border border-text-primary/15 rounded-full bg-text-primary/5 backdrop-blur-sm text-text-primary transition-colors"
              aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              id="mobile-menu-toggle"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-[1.5px] bg-text-primary transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </header>

      {/* ════════════════════════════════════════
          MOBILE MENU OVERLAY
          Rendered in a portal-like fashion OUTSIDE
          the header so it covers the full viewport
          without inheriting any overflow constraints.
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-bg-primary/95" />

            {/* Content — centered, no scroll */}
            <div className="relative h-[100dvh] w-full flex flex-col items-center justify-center px-8">

              {/* Nav links — staggered entry */}
              <nav className="flex flex-col items-center w-full mb-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.3, ease: "easeOut" }}
                    className="block w-full text-center py-4 text-3xl font-display font-black text-text-primary uppercase tracking-widest hover:text-accent-blue active:text-accent-blue transition-colors border-b border-text-primary/8 last:border-b-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="w-12 h-px bg-text-primary/25 mb-8"
              />

              {/* Language switch */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="flex items-center bg-text-primary/6 border border-text-primary/12 p-1 rounded-full font-mono text-sm mb-5"
              >
                <button
                  onClick={() => setLang("ru")}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    lang === "ru" ? "bg-text-primary text-bg-primary font-bold" : "text-text-primary/55"
                  }`}
                >RU</button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-5 py-2 rounded-full transition-colors ${
                    lang === "en" ? "bg-text-primary text-bg-primary font-bold" : "text-text-primary/55"
                  }`}
                >EN</button>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.58, duration: 0.3 }}
                className="flex flex-col gap-3 w-full max-w-xs"
              >
                <a
                  href="https://t.me/VahnoBull"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 bg-text-primary text-bg-primary hover:bg-accent-blue px-6 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase font-bold transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
                <a
                  href="https://www.instagram.com/vanoshka_bull/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 border border-text-primary/20 text-text-primary/80 px-6 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase transition-colors hover:border-text-primary/50"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

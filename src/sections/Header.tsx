import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Volume2, VolumeX, Instagram, Menu, X } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useScrollProgress } from "../hooks/useScrollProgress";

export const Header = () => {
  const { lang, setLang, t, theme, setTheme, ambientAudio, setAmbientAudio, activeTab } = useAppContext();
  const { scrollProgress, scrolled } = useScrollProgress();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "about", label: t.navAbout },
    { id: "coffee", label: t.navCoffee },
    { id: "cycling", label: t.navCycling },
    { id: "links", label: t.navLinks }
  ];

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-bg-primary/85 backdrop-blur-md border-b border-text-primary/10 shadow-xs"
          : "py-4 md:py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-12 flex justify-between items-center relative">
        
        {/* Brand Logo - Extreme bold look */}
        <a href="#hero" className="flex flex-col group py-1 z-50" id="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-xl md:text-2xl font-display font-black tracking-[0.18em] text-text-primary group-hover:text-accent-blue transition-all duration-300 uppercase">
            ИВАН
          </span>
          <span className="text-[8px] font-mono tracking-[0.4em] text-text-primary/50 uppercase">
            {t.metaSub}
          </span>
        </a>

        {/* Centered Pill-Shaped Navigation Bar (Desktop Only) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-text-primary/5 hover:bg-text-primary/8 rounded-full p-1 border border-text-primary/10 items-center gap-1 backdrop-blur-md transition-all">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 relative ${
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

        {/* Right Controls - Desktop */}
        <div className="hidden md:flex items-center gap-2 md:gap-3 z-10">
          {/* Language Switch Toggle */}
          <div className="flex items-center bg-text-primary/5 border border-text-primary/10 p-0.5 rounded-full font-mono text-[9px]">
            <button
              onClick={() => setLang("ru")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "ru" ? "bg-text-primary text-bg-primary font-semibold" : "text-text-primary/60 hover:text-text-primary"
              }`}
              title="Переключить на Русский"
            >
              RU
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full transition-colors ${
                lang === "en" ? "bg-text-primary text-bg-primary font-semibold" : "text-text-primary/60 hover:text-text-primary"
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>

          {/* Cozy Ambience sound toggler */}
          <button
            onClick={() => setAmbientAudio(!ambientAudio)}
            className="p-2 border border-text-primary/10 hover:border-text-primary/30 rounded-full text-text-primary/60 hover:text-text-primary transition-colors bg-text-primary/5"
            title="Toggle Cozy Audio Noise"
          >
            {ambientAudio ? <Volume2 className="w-3.5 h-3.5 text-accent-blue" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Premium Instagram quick CTA */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-text-primary text-bg-primary hover:bg-accent-blue px-4 py-2 rounded-full font-mono text-[10px] tracking-widest uppercase transition-colors"
            id="cta-ig-header"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>IG FEED</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-3 z-50">
          <button
            onClick={() => setAmbientAudio(!ambientAudio)}
            className="p-2 border border-text-primary/10 rounded-full text-text-primary transition-colors bg-text-primary/5"
          >
            {ambientAudio ? <Volume2 className="w-4 h-4 text-accent-blue" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 border border-text-primary/10 rounded-full text-text-primary transition-colors bg-text-primary/5"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Tiny top progress thread */}
      <div
        className="absolute bottom-0 left-0 h-[1.5px] bg-text-primary transition-all duration-150"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20 pb-10"
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {/* Nav Links */}
              <nav className="flex flex-col items-center gap-6 w-full">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-display font-black text-text-primary uppercase tracking-widest hover:text-accent-blue transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="w-16 h-[1px] bg-text-primary/20 my-4" />

              {/* Language Switch Toggle Mobile */}
              <div className="flex items-center bg-text-primary/5 border border-text-primary/10 p-1 rounded-full font-mono text-xs">
                <button
                  onClick={() => setLang("ru")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    lang === "ru" ? "bg-text-primary text-bg-primary font-bold" : "text-text-primary/60"
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    lang === "en" ? "bg-text-primary text-bg-primary font-bold" : "text-text-primary/60"
                  }`}
                >
                  EN
                </button>
              </div>

              {/* Instagram Mobile */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 flex items-center gap-2 border border-text-primary/20 bg-text-primary/5 px-6 py-3 rounded-full font-mono text-xs tracking-widest uppercase"
              >
                <Instagram className="w-4 h-4 text-accent-blue" />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

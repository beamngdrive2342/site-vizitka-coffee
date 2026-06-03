import { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";

export const useScrollProgress = () => {
  const { setActiveTab } = useAppContext();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(currentScroll / totalHeight);
      }
      setScrolled(currentScroll > 40);

      const sections = ["about", "coffee", "cycling", "links"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 280 && rect.bottom >= 280) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveTab]);

  return { scrollProgress, scrolled };
};

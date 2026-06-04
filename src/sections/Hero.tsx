import { useRef, useEffect } from "react";
import { Send, Instagram, ArrowDown } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const VIDEO_SRC = "/espresso.mp4";
const FALLBACK_IMG = "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/A_low-angle_candid_shot_of_202606032028.jpeg";

export const Hero = () => {
  const { t } = useAppContext();
  const sectionRef = useRef<HTMLElement>(null);
  const mainVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // When the section comes back into view, replay the videos from the start
          if (entry.isIntersecting) {
            if (mainVideoRef.current) {
              mainVideoRef.current.currentTime = 0;
              mainVideoRef.current.play().catch(() => {});
            }
          }
        });
      },
      { threshold: 0.1 } // triggers when 10% of Hero is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 overflow-hidden border-b border-text-primary/10"
    >
      {/* ── Video background with cinematic blur-sides effect ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        {/* The video itself — centered, slightly shrunk, not edge-to-edge */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#12100e]">
          <video
            ref={mainVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Light-weight dark overlay to dim the video without expensive CSS filters */}
          <div className="absolute inset-0 bg-[#12100e]/68 pointer-events-none" />
        </div>

        {/* Blurred ghost copy — fills sides, sits behind main video */}
        <div
          className="absolute inset-0 -z-10 scale-150 pointer-events-none"
          style={{
            backgroundImage: `url(${FALLBACK_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px) brightness(0.15) saturate(0.5)",
            willChange: "transform"
          }}
        />

        {/* Heavy blur overlay on left and right edges only */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[22%] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-bg-primary) 0%, var(--color-bg-primary)/80 40%, transparent 100%)",
          }}
        />
        <div
          className="hidden md:block absolute inset-y-0 right-0 w-[22%] z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-bg-primary) 0%, var(--color-bg-primary)/80 40%, transparent 100%)",
          }}
        />

        {/* Top & bottom gradients */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-bg-primary/75 via-transparent to-bg-primary/88 pointer-events-none" />

        {/* Glassmorphism blur strip on the sides via backdrop-filter */}
        <div
          className="hidden md:block absolute inset-y-0 left-0 w-[18%] z-10 pointer-events-none"
          style={{ backdropFilter: "blur(24px)" }}
        />
        <div
          className="hidden md:block absolute inset-y-0 right-0 w-[18%] z-10 pointer-events-none"
          style={{ backdropFilter: "blur(24px)" }}
        />
      </div>

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/4 blur-[140px] animate-ambient-1" />
        <div className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-accent-blue/3 blur-[160px] animate-ambient-2" />
      </div>

      {/* ── Main content ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center z-20">

        {/* Location badge */}
        <div className="mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 bg-text-primary/8 border border-text-primary/12 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-mono uppercase text-text-primary/70">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span>SPB // 59.93° N, 30.33° E</span>
          </div>
        </div>

        {/* Big name */}
        <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-display font-black tracking-tight text-text-primary leading-[0.88] uppercase mb-6 md:mb-8">
          {t.heroTitlePart1}
          <br />
          <span className="italic font-normal font-serif text-accent-blue lowercase tracking-normal">
            {t.heroTitleItalic}
          </span>
        </h1>

        {/* Manifesto */}
        <p className="text-lg sm:text-xl md:text-2xl text-text-primary/85 leading-relaxed font-sans max-w-xl mb-8 md:mb-12 font-light">
          {t.heroManifesto}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          <a
            id="hero-cta-telegram"
            href="https://t.me/VahnoBull"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-text-primary text-bg-primary hover:bg-accent-blue px-6 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 font-bold shadow-lg hover:shadow-accent-blue/20"
          >
            <Send className="w-4 h-4" />
            <span>{t.heroCta1}</span>
          </a>
          <a
            id="hero-cta-instagram"
            href="https://www.instagram.com/vanoshka_bull/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-transparent border border-text-primary/30 hover:border-text-primary/70 text-text-primary/80 hover:text-text-primary px-6 py-3.5 rounded-full font-mono text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.heroCta2}</span>
          </a>
        </div>

        {/* Section anchors */}
        <div className="flex items-center gap-6 mt-10 md:mt-14">
          {[
            { href: "#coffee", label: "Кофе" },
            { href: "#cycling", label: "Велосипед" },
            { href: "#links", label: "Контакты" },
          ].map((anchor) => (
            <a
              key={anchor.href}
              href={anchor.href}
              className="font-mono text-[10px] tracking-widest text-text-primary/40 hover:text-accent-blue uppercase transition-colors"
            >
              {anchor.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-end items-center z-20 pt-6 border-t border-text-primary/5">
        <a
          href="#about"
          className="flex items-center gap-2 text-[10px] font-mono text-text-primary/40 hover:text-accent-blue transition-colors group"
        >
          <span className="tracking-widest uppercase">Прокрутить</span>
          <ArrowDown className="w-3 h-3 group-hover:translate-y-1 transition-transform animate-bounce" />
        </a>
      </div>
    </section>
  );
};

import { ArrowDown, Instagram, Film, Bike } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { useMousePosition } from "../hooks/useMousePosition";

export const Hero = () => {
  const { t } = useAppContext();
  const mousePosition = useMousePosition();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 md:pt-36 pb-8 md:pb-12 overflow-hidden bg-transparent border-b border-text-primary/10"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-[10%] left-[25%] w-[45vw] h-[45vw] rounded-full bg-radial from-accent-blue/5 via-transparent to-transparent blur-[120px]" />
        <div className="absolute bottom-[5%] right-[15%] w-[40vw] h-[40vw] rounded-full bg-radial from-text-primary/5 via-transparent to-transparent blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 my-auto">
        
        {/* Left Column: Big bold name and tagline */}
        <div 
          className="md:col-span-1 lg:col-span-4 space-y-4 md:space-y-6 text-left md:pr-4 lg:pr-8"
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
        >
          <div className="inline-flex items-center gap-2 bg-text-primary/5 border border-text-primary/12 px-3.5 py-1.5 rounded-full text-[10px] tracking-widest font-mono uppercase text-text-primary/70">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span>{t.heroSubtitle}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-black tracking-tight text-text-primary leading-[0.9] uppercase">
            {t.heroTitlePart1} <br />
            <span className="italic font-normal font-serif text-accent-blue lowercase">{t.heroTitleItalic}</span>
          </h1>

          <p className="text-sm sm:text-base text-text-primary/80 leading-relaxed font-sans max-w-md">
            {t.heroDescription}
          </p>
        </div>

        {/* Right Column: CTA buttons and links */}
        <div 
          className="md:col-span-1 lg:col-span-4 lg:col-start-9 space-y-6 md:space-y-8 text-left md:text-right flex flex-col items-start md:items-end md:pl-8"
          style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)` }}
        >
          <div className="space-y-4 w-full max-w-md">
            <p className="text-xs font-mono text-text-primary/40 uppercase tracking-widest leading-relaxed">
              [ QUICK NAVIGATION // БЫСТРЫЙ ДОСТУП ]
            </p>
            
            <div className="flex flex-col gap-3">
              <a
                href="#coffee"
                className="inline-flex justify-between items-center gap-4 bg-bg-accent/80 border border-text-primary/10 hover:border-accent-blue/40 text-text-primary text-xs font-mono tracking-widest p-4 uppercase transition-all rounded-xl backdrop-blur-xs group"
              >
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4 text-accent-blue" />
                  <span>КОФЕЙНЫЙ БЛОГ</span>
                </span>
                <span className="text-accent-blue group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#cycling"
                className="inline-flex justify-between items-center gap-4 bg-bg-accent/80 border border-text-primary/10 hover:border-accent-blue/40 text-text-primary text-xs font-mono tracking-widest p-4 uppercase transition-all rounded-xl backdrop-blur-xs group"
              >
                <span className="flex items-center gap-2">
                  <Bike className="w-4 h-4 text-accent-blue" />
                  <span>ВЕЛОСИПЕДНЫЕ БУДНИ</span>
                </span>
                <span className="text-accent-blue group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-between items-center gap-4 bg-text-primary text-bg-primary hover:bg-accent-blue text-xs font-mono tracking-widest p-4 uppercase transition-all rounded-xl font-bold group"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4" />
                  <span>МОЙ INSTAGRAM</span>
                </span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero bottom metadata */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center z-10 text-[10px] font-mono text-text-primary/40 pt-6 border-t border-text-primary/5">
        <div>
          <span>SPB // 59.93° N, 30.33° E</span>
        </div>
        <a href="#about" className="flex items-center gap-2 hover:text-accent-blue transition-colors group">
          <span className="tracking-widest">{t.heroScrollDown}</span>
          <ArrowDown className="w-3 h-3 text-text-primary group-hover:translate-y-1 transition-transform animate-bounce" />
        </a>
      </div>
    </section>
  );
};

import { Send, Instagram, Mail } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const SOCIAL_LINKS = [
  {
    id: "tg",
    name: "TELEGRAM",
    handle: "@VahnoBull",
    url: "https://t.me/VahnoBull",
    icon: Send,
    isPrimary: true,
  },
  {
    id: "ig",
    name: "INSTAGRAM",
    handle: "@vanoshka_bull",
    url: "https://www.instagram.com/vanoshka_bull/",
    icon: Instagram,
    isPrimary: false,
  },
  {
    id: "mail",
    name: "EMAIL",
    handle: "По вопросам сотрудничества",
    url: "mailto:hello@ivan.coffee",
    icon: Mail,
    isPrimary: false,
  },
];

export const Links = () => {
  const { t } = useAppContext();

  return (
    <footer
      id="links"
      className="relative py-20 md:py-36 bg-transparent overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute bottom-0 left-[5%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/4 blur-[140px] pointer-events-none" />
      <div className="absolute top-[10%] right-[5%] w-[25vw] h-[25vw] rounded-full bg-accent-blue/3 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <div className="text-center space-y-4 mb-14 md:mb-16">
          <span className="text-[10px] font-mono tracking-[0.40em] text-accent-blue block uppercase font-semibold">
            [ CONTACT ]
          </span>
          <h2 className="text-3xl md:text-6xl font-display font-black text-text-primary uppercase tracking-tight">
            {t.linksTitle}
          </h2>
          <p className="text-sm text-text-primary/60 max-w-sm mx-auto leading-relaxed font-sans">
            {t.linksSubtitle}
          </p>
        </div>

        {/* ── Primary CTA ── */}
        <div className="flex justify-center mb-10">
          <a
            id="main-cta-telegram"
            href="https://t.me/VahnoBull"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent-blue text-bg-primary hover:brightness-110 px-10 py-4 md:py-5 rounded-full font-mono text-sm font-bold tracking-widest uppercase transition-all duration-300 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/40"
          >
            <Send className="w-5 h-5" />
            <span>{t.linksCtaLabel}</span>
          </a>
        </div>

        {/* ── Social link list ── */}
        <div className="flex flex-col gap-3 mb-14">
          {SOCIAL_LINKS.map((link) => {
            const Icon = link.icon;
            const desc =
              link.id === "tg"
                ? t.linkTgDesc
                : link.id === "ig"
                ? t.linkIgDesc
                : t.linkMailDesc;
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 md:p-5 border rounded-2xl transition-all duration-300 group ${
                  link.isPrimary
                    ? "bg-bg-accent/30 border-accent-blue/25 hover:border-accent-blue/60"
                    : "bg-bg-accent/15 border-text-primary/10 hover:border-accent-blue/35 hover:bg-bg-accent/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-all ${
                      link.isPrimary
                        ? "bg-accent-blue/15 text-accent-blue group-hover:bg-accent-blue group-hover:text-bg-primary"
                        : "bg-text-primary/5 text-text-primary/60 group-hover:bg-accent-blue group-hover:text-bg-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-display font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-[10px] text-text-primary/45 font-sans mt-0.5 leading-none">
                      {link.handle} — {desc}
                    </p>
                  </div>
                </div>
                <span className="text-text-primary/25 group-hover:text-accent-blue group-hover:translate-x-1.5 transition-all text-lg font-sans">
                  →
                </span>
              </a>
            );
          })}
        </div>

        {/* ── Separator ── */}
        <div className="h-[1px] bg-text-primary/10 my-10" />

        {/* ── Footer ── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-primary/35 font-mono">
          <p className="text-center md:text-left leading-relaxed">
            {t.footerCopyright}
          </p>
          <div className="flex items-center gap-1.5 uppercase font-medium">
            <span>SPB // 2026</span>
            <span className="text-accent-blue">●</span>
            <span>@vanoshka_bull</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

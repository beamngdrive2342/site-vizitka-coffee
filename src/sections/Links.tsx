import { Instagram, Youtube, Send, Mail } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export const Links = () => {
  const { t } = useAppContext();

  const socialLinks = [
    {
      id: "tg",
      name: "TELEGRAM",
      url: "https://t.me/volta_coffee",
      icon: <Send className="w-5 h-5" />,
      desc: t.linkTgDesc,
    },
    {
      id: "yt",
      name: "YOUTUBE",
      url: "https://youtube.com",
      icon: <Youtube className="w-5 h-5" />,
      desc: t.linkYtDesc,
    },
    {
      id: "ig",
      name: "INSTAGRAM",
      url: "https://instagram.com",
      icon: <Instagram className="w-5 h-5" />,
      desc: t.linkIgDesc,
    },
    {
      id: "mail",
      name: "EMAIL",
      url: "mailto:hello@ivan.coffee",
      icon: <Mail className="w-5 h-5" />,
      desc: t.linkMailDesc,
    }
  ];

  return (
    <footer
      id="links"
      className="relative py-16 md:py-36 bg-transparent overflow-hidden font-mono text-xs"
    >
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-[10%] w-[35vw] h-[35vw] rounded-full bg-radial from-accent-blue/4 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-16 relative z-10 w-full text-center">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono tracking-[0.40em] text-accent-blue block uppercase font-semibold">
            [ CONTACT CHANNELS ]
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight">
            {t.linksTitle}
          </h2>
          <p className="text-xs sm:text-sm text-text-primary/60 max-w-md mx-auto leading-relaxed font-sans font-light">
            {t.linksSubtitle}
          </p>
        </div>

        {/* Link List */}
        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 md:p-5 bg-bg-accent/20 md:bg-bg-accent/40 hover:bg-accent-blue/5 border border-text-primary/10 hover:border-accent-blue/45 rounded-2xl transition-all duration-300 group backdrop-blur-xs text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-text-primary/5 text-text-primary group-hover:bg-accent-blue group-hover:text-bg-primary transition-all">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-text-primary group-hover:text-accent-blue transition-colors">
                    {link.name}
                  </h3>
                  <p className="text-[10px] text-text-primary/45 font-sans leading-none mt-1">
                    {link.desc}
                  </p>
                </div>
              </div>
              <span className="text-lg text-text-primary/30 group-hover:text-accent-blue group-hover:translate-x-1.5 transition-all font-sans">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-text-primary/10 max-w-2xl mx-auto my-12" />

        {/* Copyright block */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-primary/40 max-w-2xl mx-auto font-mono">
          <p className="text-center md:text-left leading-relaxed">
            {t.footerCopyright}
          </p>
          <div className="flex items-center gap-1.5 uppercase font-medium">
            <span>DESIGN // @volta_coffee</span>
            <span className="text-accent-blue">● 2026 EDITION</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

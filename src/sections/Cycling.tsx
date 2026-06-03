import { motion } from "motion/react";
import { Compass, MapPin, Navigation, Send } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const CYCLING_PHOTOS = [
  {
    id: "p1",
    src: "/photos/\u0432\u0435\u043b\u043e\u043f\u043e\u0435\u0437\u0434\u043a\u0438/A_candid_action_shot_of_202606032004.jpeg",
    alt: "Иван едет на велосипеде в лесу",
    shape: "shape-blob",
  },
  {
    id: "p2",
    src: "/photos/\u0432\u0435\u043b\u043e\u043f\u043e\u0435\u0437\u0434\u043a\u0438/A_close-up,_authentic_photograph_of_202606032006.jpeg",
    alt: "Hagen 3.11 — крупный план рамы в лесу",
    shape: "shape-blob-slow",
  },
  {
    id: "p3",
    src: "/photos/\u0432\u0435\u043b\u043e\u043f\u043e\u0435\u0437\u0434\u043a\u0438/A_wide-angle,_candid_shot_of_202606032006.jpeg",
    alt: "Велосипед Hagen 3.11 на лесной дороге",
    shape: "shape-blob",
  },
];

export const Cycling = () => {
  const { t } = useAppContext();

  return (
    <section
      id="cycling"
      className="relative py-20 md:py-36 bg-transparent border-b border-text-primary/10 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute top-0 left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/3 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16 relative z-10">

        {/* ── Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-end border-b border-text-primary/12 pb-10"
        >
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-accent-blue block uppercase font-semibold">
              {t.cyclingSubtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight">
              {t.cyclingTitle}
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="text-sm text-text-primary/70 leading-relaxed font-sans">
              {t.cyclingDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Stats: Mobile carousel ── */}
        <div className="md:hidden mobile-carousel no-scrollbar">
          {[{ label: "[ RADIUS ]", value: t.statDistance, desc: t.statDistanceDesc, Icon: Compass },
            { label: "[ FAVOURITE ]", value: t.statRoute, desc: t.statRouteDesc, Icon: Navigation },
            { label: "[ BASE ]", value: t.statLocation, desc: t.statLocationDesc, Icon: MapPin },
          ].map(({ label, value, desc, Icon }) => (
            <div key={label} className="mobile-carousel-item glass-card rounded-2xl p-5 flex flex-col justify-between h-[160px]">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono text-accent-blue tracking-widest uppercase font-semibold">{label}</span>
                <Icon className="w-4 h-4 text-text-primary/30" />
              </div>
              <div>
                <div className="text-2xl font-display font-black text-text-primary uppercase leading-none mb-1">{value}</div>
                <p className="text-xs text-text-primary/60 font-sans">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Stats: Desktop grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative p-6 md:p-8 glass-card rounded-3xl flex flex-col justify-between h-[200px] group"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-[9px] font-mono text-accent-blue tracking-widest uppercase font-semibold">[ RADIUS ]</span>
              <Compass className="w-5 h-5 text-text-primary/30 group-hover:rotate-45 group-hover:text-accent-blue transition-all duration-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-5xl font-display font-black text-text-primary uppercase leading-none">{t.statDistance}</h3>
              <p className="text-sm text-text-primary/60 font-sans">{t.statDistanceDesc}</p>
            </div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative p-6 md:p-8 glass-card rounded-3xl flex flex-col justify-between h-[200px] group"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-[9px] font-mono text-accent-blue tracking-widest uppercase font-semibold">[ FAVOURITE ]</span>
              <Navigation className="w-5 h-5 text-text-primary/30 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-blue transition-all duration-300" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-black text-text-primary uppercase leading-tight">{t.statRoute}</h3>
              <p className="text-sm text-text-primary/60 font-sans">{t.statRouteDesc}</p>
            </div>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1 } }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="relative p-6 md:p-8 glass-card rounded-3xl flex flex-col justify-between h-[200px] group"
          >
            <div className="flex justify-between items-center w-full">
              <span className="text-[9px] font-mono text-accent-blue tracking-widest uppercase font-semibold">[ BASE ]</span>
              <MapPin className="w-5 h-5 text-text-primary/30 group-hover:animate-bounce group-hover:text-accent-blue transition-colors" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-black text-text-primary uppercase leading-none">{t.statLocation}</h3>
              <p className="text-sm text-text-primary/60 font-sans">{t.statLocationDesc}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Photos: Mobile carousel ── */}
        <div className="md:hidden mobile-carousel no-scrollbar">
          {CYCLING_PHOTOS.map((ph) => (
            <div key={ph.id} className={`mobile-carousel-item ${ph.shape} bg-bg-accent/40 overflow-hidden shadow-xl aspect-[4/5]`}>
              <img src={ph.src} alt={ph.alt}
                className="object-cover w-full h-full filter brightness-[0.9] contrast-[1.05]"
                loading="lazy" />
            </div>
          ))}
        </div>

        {/* ── Photos: Desktop grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
          className="hidden md:grid md:grid-cols-3 gap-8"
        >
          {CYCLING_PHOTOS.map((ph, idx) => (
            <motion.div
              key={ph.id}
              variants={{ hidden: { opacity: 0, y: 40, filter: "blur(15px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative ${ph.shape} bg-bg-accent/40 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.12)] group ${
                idx === 0 ? "aspect-[4/5]" : "aspect-square"
              }`}
            >
              <img src={ph.src} alt={ph.alt}
                className="object-cover w-full h-full group-hover:scale-[1.08] transition-all duration-1000 filter brightness-[0.9] contrast-[1.05]"
                loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/60 via-transparent to-transparent opacity-80" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Hashtags ── */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center pt-4"
        >
          {t.cyclingHashtags.split(" ").map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-text-primary/60 uppercase tracking-widest bg-bg-accent border border-text-primary/10 px-4 py-2 rounded-full shadow-sm hover:border-accent-blue/40 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center pt-8"
        >
          <a
            href="https://t.me/VahnoBull"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-text-primary text-bg-primary hover:bg-accent-blue px-8 py-4 rounded-full font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-1"
          >
            <Send className="w-4 h-4" />
            <span>{t.cyclingBtn}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

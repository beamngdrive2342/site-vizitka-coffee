import { motion } from "motion/react";
import { Instagram, Play } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const COFFEE_PHOTOS = [
  {
    id: "v1",
    src: "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/5262531387099649713_121.jpg",
    alt: "Кофейный сетап: HiBREW H10A Plus и HiBREW G5",
    shape: "shape-blob",
  },
  {
    id: "v2",
    src: "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/5262531387099649714_121.jpg",
    alt: "Эспрессо-машина и кофемолка HiBREW",
    shape: "shape-blob-slow",
  },
  {
    id: "v3",
    src: "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/A_low-angle_candid_shot_of_202606032028.jpeg",
    alt: "Приготовление эспрессо дома",
    shape: "shape-blob",
  },
];

const CATEGORIES = (t: ReturnType<typeof useAppContext>["t"]) => [
  { icon: "☕", label: t.coffeeCat1 },
  { icon: "🔧", label: t.coffeeCat2 },
  { icon: "🎬", label: t.coffeeCat3 },
];

export const Coffee = () => {
  const { t } = useAppContext();
  const cats = CATEGORIES(t);
  const titles = [t.coffeeVid1, t.coffeeVid2, t.coffeeVid3];

  return (
    <section
      id="coffee"
      className="relative py-20 md:py-36 bg-transparent border-b border-text-primary/10 overflow-hidden"
    >
      {/* Ambient */}
      <div className="absolute bottom-0 right-[-5%] w-[45vw] h-[45vw] rounded-full bg-accent-blue/3 blur-[160px] pointer-events-none" />

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
              {t.coffeeSubtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight">
              {t.coffeeTitle}
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-5 lg:col-start-8"
          >
            <p className="text-sm text-text-primary/70 leading-relaxed font-sans">
              {t.coffeeDescription}
            </p>
          </motion.div>
        </motion.div>

        {/* ── Categories ── */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } }, hidden: {} }}
          className="grid grid-cols-3 gap-4"
        >
          {cats.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center gap-3 p-4 md:p-6 glass-card rounded-2xl text-center group cursor-default"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
              <span className="font-mono text-[10px] text-text-primary/70 uppercase tracking-widest leading-tight group-hover:text-text-primary transition-colors">
                {cat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Photos: Mobile carousel ── */}
        <div className="md:hidden mobile-carousel no-scrollbar">
          {COFFEE_PHOTOS.map((photo, idx) => (
            <div key={photo.id} className="mobile-carousel-item group">
              <div className={`relative aspect-[4/5] w-full ${photo.shape} overflow-hidden shadow-2xl bg-bg-accent/50 mb-4`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full transition-transform duration-700 active:scale-105 filter brightness-[0.88]"
                  loading="lazy"
                />
              </div>
              <div className="px-1">
                <h3 className="text-base font-display font-bold text-text-primary truncate">{titles[idx]}</h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <Instagram className="w-3 h-3 text-text-primary/40" />
                  <span className="font-mono text-[9px] text-text-primary/50 uppercase tracking-widest">@vanoshka_bull</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Photos: Desktop grid ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          {COFFEE_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              variants={{
                hidden: { opacity: 0, y: 40, filter: "blur(15px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className={`relative aspect-[4/5] w-full mb-6 ${photo.shape} overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:shadow-accent-blue/30 bg-bg-accent/50`}>
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 filter brightness-[0.85] group-hover:brightness-100"
                  loading="lazy"
                />
              </div>
              <div className="px-2 space-y-3">
                <h3 className="text-lg font-display font-bold leading-snug text-text-primary group-hover:text-accent-blue transition-colors duration-300">{titles[idx]}</h3>
                <div className="flex items-center gap-2 pt-2 border-t border-text-primary/10">
                  <Instagram className="w-3.5 h-3.5 text-text-primary/40" />
                  <span className="font-mono text-[9px] text-text-primary/50 uppercase tracking-widest">@vanoshka_bull</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── CTA ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center pt-8"
        >
          <a
            href="https://www.instagram.com/vanoshka_bull/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-text-primary text-bg-primary hover:bg-accent-blue px-8 py-4 rounded-full font-mono text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-1"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.coffeeBtn}</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

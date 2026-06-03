import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const COFFEE_GEAR = [
  {
    id: "hibrew-machine",
    emoji: "☕",
    name: "HiBREW H10A Plus",
    desc: "Моя эспрессо-машина. Компактная, стильная, с манометром и паровым краном.",
    img: "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/5262531387099649713_121.jpg",
    shape: "shape-blob-slow",
  },
  {
    id: "hibrew-grinder",
    emoji: "⚙️",
    name: "HiBREW G5",
    desc: "Кофемолка с регулировкой помола. Без неё хорошего эспрессо не сделать.",
    img: "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/5262531387099649714_121.jpg",
    shape: "shape-blob",
  },
  {
    id: "tasty-coffee",
    emoji: "🫘",
    name: "Tasty Coffee — Эспрессо",
    desc: "Зерно, с которого началось моё знакомство с хорошим кофе. Эфиопия, натуральная обработка.",
    img: null,
    shape: "",
  },
];

const CYCLING_GEAR = [
  {
    id: "hagen",
    emoji: "🚲",
    name: "Hagen 3.11",
    desc: "Мой велосипед — оранжевый, надёжный, проверенный на лесных грунтовках.",
    img: "/photos/\u0432\u0435\u043b\u043e\u043f\u043e\u0435\u0437\u0434\u043a\u0438/A_wide-angle,_candid_shot_of_202606032006.jpeg",
    shape: "shape-blob-slow",
  },
  {
    id: "sony-headphones",
    emoji: "🎧",
    name: "Sony ULT Wear",
    desc: "Наушники с шумоподавлением для поездок, работы и всего между.",
    img: null,
    shape: "",
  },
  {
    id: "spb-map",
    emoji: "🗺️",
    name: "Ленинградская область",
    desc: "Основной полигон для покатушек. Леса, озёра, грунтовки — идеально.",
    img: "/photos/\u0432\u0435\u043b\u043e\u043f\u043e\u0435\u0437\u0434\u043a\u0438/A_close-up,_authentic_photograph_of_202606032006.jpeg",
    shape: "shape-blob",
  },
];

interface GearItemProps {
  emoji: string;
  name: string;
  desc: string;
  img: string | null;
  shape: string;
}

const GearItemDesktop = ({ emoji, name, desc, img, shape }: GearItemProps) => (
  <motion.div 
    variants={{ hidden: { opacity: 0, x: -20, filter: "blur(5px)" }, visible: { opacity: 1, x: 0, filter: "blur(0px)" } }}
    className="group flex items-start gap-5 p-5 glass-card rounded-2xl w-full"
  >
    {img ? (
      <div className={`w-24 h-24 ${shape} bg-bg-accent/50 overflow-hidden flex-shrink-0 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
        <img src={img} alt={name} className="w-full h-full object-cover filter brightness-[0.85] group-hover:brightness-100 transition-all duration-500" loading="lazy" />
      </div>
    ) : (
      <div className="w-24 h-24 rounded-3xl flex-shrink-0 bg-text-primary/5 border border-text-primary/10 flex items-center justify-center text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm">
        {emoji}
      </div>
    )}
    <div className="flex-1 min-w-0 pt-2">
      <h4 className="font-display font-bold text-base text-text-primary group-hover:text-accent-blue transition-colors leading-snug">{name}</h4>
      <p className="text-sm text-text-primary/60 leading-relaxed mt-2 font-sans">{desc}</p>
    </div>
  </motion.div>
);

const GearItemMobile = ({ emoji, name, desc, img, shape }: GearItemProps) => (
  <div className="mobile-carousel-item glass-card rounded-2xl p-5 flex flex-col h-full">
    <div className="flex items-center gap-4 mb-4">
      {img ? (
        <div className={`w-16 h-16 ${shape} bg-bg-accent/50 overflow-hidden flex-shrink-0 shadow-md`}>
          <img src={img} alt={name} className="w-full h-full object-cover filter brightness-[0.9]" loading="lazy" />
        </div>
      ) : (
        <div className="w-16 h-16 rounded-2xl flex-shrink-0 bg-text-primary/5 border border-text-primary/10 flex items-center justify-center text-2xl shadow-sm">
          {emoji}
        </div>
      )}
      <h4 className="font-display font-bold text-sm text-text-primary leading-tight flex-1">{name}</h4>
    </div>
    <p className="text-xs text-text-primary/70 leading-relaxed font-sans">{desc}</p>
  </div>
);

export const Gear = () => {
  const { t } = useAppContext();

  return (
    <section
      id="gear"
      className="relative py-16 md:py-36 bg-transparent border-b border-text-primary/10"
    >
      <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] w-[35vw] h-[35vw] rounded-full bg-accent-blue/3 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.40em] text-accent-blue block uppercase font-semibold mb-2">
            {t.gearSubtitle}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase">
              {t.gearTitle}
            </h2>
            <span className="font-mono text-[9px] text-text-primary/40 uppercase tracking-widest border border-text-primary/10 bg-bg-accent/30 backdrop-blur-sm px-4 py-2 rounded-full w-fit">
              {t.gearDisclaimer}
            </span>
          </div>
        </motion.div>

        {/* ── MOBILE layout ── */}
        <div className="md:hidden space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-bg-accent flex items-center justify-center border border-text-primary/10 shadow-sm"><span className="text-sm">☕</span></div>
              <h3 className="font-display font-black text-base uppercase text-text-primary">{t.gearCoffeeTitle}</h3>
              <div className="flex-1 h-[1px] bg-text-primary/10 ml-2" />
            </div>
            <div className="mobile-carousel no-scrollbar">
              {COFFEE_GEAR.map((item) => <GearItemMobile key={item.id} {...item} />)}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-bg-accent flex items-center justify-center border border-text-primary/10 shadow-sm"><span className="text-sm">🚲</span></div>
              <h3 className="font-display font-black text-base uppercase text-text-primary">{t.gearCyclingTitle}</h3>
              <div className="flex-1 h-[1px] bg-text-primary/10 ml-2" />
            </div>
            <div className="mobile-carousel no-scrollbar">
              {CYCLING_GEAR.map((item) => <GearItemMobile key={item.id} {...item} />)}
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
            className="space-y-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-bg-accent flex items-center justify-center border border-text-primary/10 shadow-sm"><span className="text-lg">☕</span></div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-text-primary">{t.gearCoffeeTitle}</h3>
              <div className="flex-1 h-[1px] bg-text-primary/10 ml-2" />
            </motion.div>
            <div className="space-y-4">
              {COFFEE_GEAR.map((item) => <GearItemDesktop key={item.id} {...item} />)}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }, hidden: {} }}
            className="space-y-6"
          >
            <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-bg-accent flex items-center justify-center border border-text-primary/10 shadow-sm"><span className="text-lg">🚲</span></div>
              <h3 className="font-display font-black text-lg uppercase tracking-wide text-text-primary">{t.gearCyclingTitle}</h3>
              <div className="flex-1 h-[1px] bg-text-primary/10 ml-2" />
            </motion.div>
            <div className="space-y-4">
              {CYCLING_GEAR.map((item) => <GearItemDesktop key={item.id} {...item} />)}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

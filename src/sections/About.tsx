import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const ME_PHOTO = "/photos/\u044f/5262531387099649690_121.jpg";
const COFFEE_PHOTO = "/photos/\u044f \u0438 \u043a\u043e\u0444\u0435/A_low-angle_candid_shot_of_202606032028.jpeg";

export const About = () => {
  const { t } = useAppContext();

  return (
    <section
      id="about"
      className="relative py-16 md:py-36 bg-transparent border-b border-text-primary/10"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-[-5%] w-[40vw] h-[40vw] rounded-full bg-accent-blue/3 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-12 relative z-10">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-8 md:mb-16"
        >
          <span className="text-[10px] font-mono tracking-[0.40em] text-accent-blue block uppercase font-semibold mb-2">
            {t.aboutSubtitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase">
            {t.aboutTitle}
          </h2>
        </motion.div>

        {/* ── MOBILE layout: photos as horizontal swipe, text below ── */}
        <div className="md:hidden">
          {/* Swipe photos */}
          <div className="mobile-carousel no-scrollbar mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{ willChange: "transform, opacity" }}
              className="mobile-carousel-item aspect-[4/5] shape-blob overflow-hidden shadow-2xl"
            >
              <img src={ME_PHOTO} alt="Иван" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              style={{ willChange: "transform, opacity" }}
              className="mobile-carousel-item aspect-square shape-blob-slow overflow-hidden shadow-xl"
            >
              <img src={COFFEE_PHOTO} alt="Кофе" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>

          {/* Text block */}
          <div className="space-y-5">
            {[t.aboutP1, t.aboutP2, t.aboutP3].map((text, i) => (
              <p key={i} className="text-base text-text-primary/80 leading-relaxed font-sans">
                {text}
              </p>
            ))}
            {/* Quote */}
            <div className="glass-card rounded-2xl p-5 mt-4">
              <div className="w-8 h-[2px] bg-accent-blue mb-4" />
              <p className="text-base font-serif text-text-primary italic leading-relaxed">{t.aboutQuote}</p>
            </div>
            {/* Links */}
            <div className="flex gap-3 pt-2">
              <a href="https://t.me/VahnoBull" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-full font-mono text-[10px] tracking-widest uppercase bg-text-primary text-bg-primary font-bold">
                Telegram
              </a>
              <a href="https://www.instagram.com/vanoshka_bull/" target="_blank" rel="noopener noreferrer"
                className="flex-1 text-center py-3 rounded-full font-mono text-[10px] tracking-widest uppercase border border-text-primary/20 text-text-primary/70">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* ── DESKTOP layout: side-by-side grid ── */}
        <div className="hidden md:grid lg:grid-cols-12 gap-16 items-start">

          {/* Left: photos stacked */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              style={{ willChange: "transform, opacity" }}
              className="relative aspect-[4/5] w-full group shape-blob overflow-hidden shadow-2xl"
            >
              <img src={ME_PHOTO} alt="Иван — автор блога"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110 filter contrast-[1.05] brightness-[0.95]"
                loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03 }}
              style={{ willChange: "transform, opacity" }}
              className="relative aspect-square w-[90%] ml-auto group shape-blob-slow overflow-hidden shadow-xl"
            >
              <img src={COFFEE_PHOTO} alt="Иван за приготовлением эспрессо"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.92]"
                loading="lazy" />
            </motion.div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-8 pt-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
              className="space-y-6"
            >
              {[t.aboutP1, t.aboutP2, t.aboutP3].map((text, i) => (
                <motion.p key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.8 }}
                  className="text-base sm:text-lg text-text-primary/80 leading-relaxed font-sans"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              whileHover={{ y: -5 }}
              style={{ willChange: "transform, opacity" }}
              className="relative p-6 md:p-8 glass-card rounded-3xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent-blue/10 blur-2xl pointer-events-none group-hover:bg-accent-blue/20 transition-all duration-700" />
              <div className="w-10 h-[2px] bg-accent-blue mb-6" />
              <p className="text-lg md:text-xl font-serif text-text-primary italic tracking-wide leading-relaxed">
                {t.aboutQuote}
              </p>
              <div className="font-mono text-[9px] text-text-primary/40 uppercase tracking-widest mt-6">
                [ IVAN // PERSONAL BRAND ]
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <a href="https://t.me/VahnoBull" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-text-primary/5 hover:bg-accent-blue hover:text-bg-primary border border-text-primary/10 px-5 py-2.5 rounded-full font-mono text-[10px] tracking-widest uppercase text-text-primary/70 transition-all duration-300">
                Telegram
              </a>
              <a href="https://www.instagram.com/vanoshka_bull/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-text-primary/5 hover:bg-text-primary hover:text-bg-primary border border-text-primary/10 px-5 py-2.5 rounded-full font-mono text-[10px] tracking-widest uppercase text-text-primary/70 transition-all duration-300">
                Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

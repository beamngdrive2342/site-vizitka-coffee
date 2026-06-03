import { Film, Youtube, Instagram, Play } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export const Coffee = () => {
  const { t } = useAppContext();

  const videos = [
    {
      id: "v1",
      title: t.coffeeVid1,
      category: "SETUP & WORKFLOW",
      tag: "01 / STEP",
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "v2",
      title: t.coffeeVid2,
      category: "GEAR REVIEW",
      tag: "02 / GEAR",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "v3",
      title: t.coffeeVid3,
      category: "VISUAL ART",
      tag: "03 / SLOW",
      image: "https://images.unsplash.com/photo-151097252790b-a638d94e26f9?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section
      id="coffee"
      className="relative py-16 md:py-36 bg-transparent border-b border-text-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header - Side Aligned on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-end border-b border-text-primary/12 pb-8">
          <div className="md:col-span-1 lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-accent-blue block uppercase font-semibold">
              {t.coffeeSubtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight">
              {t.coffeeTitle}
            </h2>
          </div>
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-9 md:text-right">
            <p className="text-sm text-text-primary/70 max-w-md md:ml-auto leading-relaxed font-sans">
              {t.coffeeDescription}
            </p>
          </div>
        </div>

        {/* Video Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="group relative bg-bg-accent/20 md:bg-bg-accent/40 border border-text-primary/10 rounded-2xl p-4 md:p-5 flex flex-col justify-between h-[300px] md:h-[340px] hover:border-accent-blue/40 transition-all duration-300 backdrop-blur-xs overflow-hidden"
            >
              {/* Thumbnail Container */}
              <div className="relative h-[140px] md:h-[160px] w-full rounded-xl overflow-hidden border border-text-primary/8">
                <img
                  src={vid.image}
                  alt={vid.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 filter contrast-[1.05] brightness-[0.9]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center text-bg-primary shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <div className="absolute top-2.5 right-2.5 bg-bg-primary/90 py-0.5 px-2 rounded-full border border-text-primary/10 font-mono text-[7px] uppercase tracking-wider text-text-primary/70">
                  {vid.tag}
                </div>
              </div>

              {/* Text metadata */}
              <div className="space-y-2 mt-4 flex-grow flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-[8px] font-mono text-accent-blue tracking-widest uppercase font-semibold">
                    {vid.category}
                  </span>
                  <h3 className="text-sm font-display font-bold leading-snug text-text-primary group-hover:text-accent-blue transition-colors line-clamp-2">
                    {vid.title}
                  </h3>
                </div>
                
                {/* Visual duration indicator */}
                <div className="flex items-center gap-1.5 pt-2 border-t border-text-primary/8 text-[9px] font-mono text-text-primary/40 uppercase">
                  <Film className="w-3.5 h-3.5" />
                  <span>PREVIEW SYSTEM // READY</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center pt-8">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-text-primary text-bg-primary hover:bg-accent-blue text-xs font-mono font-bold tracking-widest px-8 py-4 uppercase transition-all rounded-full shadow-xs"
          >
            <Youtube className="w-4 h-4" />
            <span>{t.coffeeBtn}</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 border border-text-primary hover:bg-text-primary/5 text-text-primary text-xs font-mono tracking-widest px-8 py-4 uppercase transition-all rounded-full"
          >
            <Instagram className="w-4 h-4 text-accent-blue" />
            <span>{t.coffeeBtnIg}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

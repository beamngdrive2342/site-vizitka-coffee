import { Bike, Instagram, MapPin, Compass, Navigation } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export const Cycling = () => {
  const { t } = useAppContext();

  const photos = [
    {
      id: "p1",
      alt: "Road bike",
      url: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "p2",
      alt: "Cycling path",
      url: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: "p3",
      alt: "Seaside road",
      url: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section
      id="cycling"
      className="relative py-16 md:py-36 bg-transparent border-b border-text-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Header - Sided grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-end border-b border-text-primary/12 pb-8">
          <div className="md:col-span-1 lg:col-span-4 space-y-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-accent-blue block uppercase font-semibold">
              {t.cyclingSubtitle}
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase tracking-tight">
              {t.cyclingTitle}
            </h2>
          </div>
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-9 md:text-right">
            <p className="text-sm text-text-primary/70 max-w-md md:ml-auto leading-relaxed font-sans">
              {t.cyclingDescription}
            </p>
          </div>
        </div>

        {/* Stats Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          {/* Stat 1: Distance */}
          <div className="relative p-5 md:p-6 bg-bg-accent/20 md:bg-bg-accent/40 border border-text-primary/10 rounded-2xl flex flex-col justify-between h-[160px] md:h-[180px] backdrop-blur-xs group hover:border-accent-blue/30 transition-all">
            <div className="flex justify-between items-center w-full">
              <span className="text-[8px] font-mono text-accent-blue tracking-widest uppercase font-semibold">
                [ SEASON DISTANCE ]
              </span>
              <Compass className="w-4 h-4 text-text-primary/30 group-hover:spin transition-all" />
            </div>
            <div className="space-y-1">
              <h3 className="text-3xl sm:text-4xl font-display font-black text-text-primary uppercase leading-none">
                {t.statDistance}
              </h3>
              <p className="text-xs text-text-primary/60 font-sans">
                {t.statDistanceDesc}
              </p>
            </div>
          </div>

          {/* Stat 2: Route */}
          <div className="relative p-5 md:p-6 bg-bg-accent/20 md:bg-bg-accent/40 border border-text-primary/10 rounded-2xl flex flex-col justify-between h-[160px] md:h-[180px] backdrop-blur-xs group hover:border-accent-blue/30 transition-all">
            <div className="flex justify-between items-center w-full">
              <span className="text-[8px] font-mono text-accent-blue tracking-widest uppercase font-semibold">
                [ ROUTE SELECTION ]
              </span>
              <Navigation className="w-4 h-4 text-text-primary/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-display font-black text-text-primary uppercase leading-tight">
                {t.statRoute}
              </h3>
              <p className="text-xs text-text-primary/60 font-sans">
                {t.statRouteDesc}
              </p>
            </div>
          </div>

          {/* Stat 3: Location */}
          <div className="relative p-5 md:p-6 bg-bg-accent/20 md:bg-bg-accent/40 border border-text-primary/10 rounded-2xl flex flex-col justify-between h-[160px] md:h-[180px] backdrop-blur-xs group hover:border-accent-blue/30 transition-all">
            <div className="flex justify-between items-center w-full">
              <span className="text-[8px] font-mono text-accent-blue tracking-widest uppercase font-semibold">
                [ CURRENT LOC ]
              </span>
              <MapPin className="w-4 h-4 text-text-primary/30 group-hover:animate-bounce" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-display font-black text-text-primary uppercase leading-none">
                {t.statLocation}
              </h3>
              <p className="text-xs text-text-primary/60 font-sans">
                {t.statLocationDesc}
              </p>
            </div>
          </div>

        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {photos.map((ph) => (
            <div
              key={ph.id}
              className="relative aspect-square md:aspect-[4/3] rounded-2xl border border-text-primary/10 overflow-hidden group"
            >
              <img
                src={ph.url}
                alt={ph.alt}
                className="object-cover w-full h-full group-hover:scale-102 transition-transform duration-500 filter contrast-[1.03] brightness-[0.95]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center gap-2 bg-text-primary text-bg-primary hover:bg-accent-blue text-xs font-mono font-bold tracking-widest px-8 py-4 uppercase transition-all rounded-full"
          >
            <Instagram className="w-4 h-4" />
            <span>{t.cyclingBtn}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

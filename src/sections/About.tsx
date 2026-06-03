import { useAppContext } from "../context/AppContext";

export const About = () => {
  const { t } = useAppContext();

  return (
    <section
      id="about"
      className="relative py-16 md:py-36 bg-transparent border-b border-text-primary/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Personal statement */}
          <div className="md:col-span-1 lg:col-span-4 space-y-6 md:pr-4 lg:pr-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.40em] text-accent-blue block uppercase font-semibold">
                {t.aboutSubtitle}
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-text-primary uppercase">
                {t.aboutTitle}
              </h2>
            </div>
            
            <p className="text-base sm:text-lg text-text-primary/80 leading-relaxed font-sans">
              {t.aboutText}
            </p>
          </div>

          {/* Right Side: Quote / manifesto style card */}
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-9 md:pl-4 lg:pl-8">
            <div className="relative p-6 md:p-10 bg-bg-accent/20 md:bg-bg-accent/40 border border-text-primary/10 rounded-2xl backdrop-blur-xs space-y-6 overflow-hidden">
              {/* Decorative subtle ambient circle inside card */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-accent-blue/5 blur-xl pointer-events-none" />
              
              <div className="w-8 h-[2px] bg-accent-blue" />
              
              <p className="text-xl md:text-2xl font-serif text-text-primary italic tracking-wide leading-relaxed">
                {t.aboutQuote}
              </p>
              
              <div className="font-mono text-[9px] text-text-primary/40 uppercase tracking-widest">
                [ IVAN VOLTA // CRITERION ]
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

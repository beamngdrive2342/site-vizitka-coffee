import { AppProvider } from "./context/AppContext";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Coffee } from "./sections/Coffee";
import { Cycling } from "./sections/Cycling";
import { Links } from "./sections/Links";
import { CenterStreamVideo } from "./components/CenterStreamVideo";
import { useAudio } from "./hooks/useAudio";

const AppContent = () => {
  useAudio();

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-text-primary selection:text-bg-primary font-sans antialiased overflow-x-hidden">
      
      {/* Noise background aesthetic film overlay to feel premium like fine paper */}
      <div className="noise-overlay pointer-events-none opacity-[0.035] fixed inset-0 z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-200 to-neutral-500" />

      {/* Global Center Stream Scrubbing Video (Always exactly in middle) */}
      <CenterStreamVideo />

      <Header />
      <Hero />
      <About />
      <Coffee />
      <Cycling />
      <Links />
      
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

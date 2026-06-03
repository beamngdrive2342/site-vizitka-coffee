import { AppProvider } from "./context/AppContext";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Coffee } from "./sections/Coffee";
import { Cycling } from "./sections/Cycling";
import { Gear } from "./sections/Gear";
import { Links } from "./sections/Links";
import { useAudio } from "./hooks/useAudio";

const AppContent = () => {
  useAudio();

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-text-primary selection:text-bg-primary font-sans antialiased overflow-x-hidden">

      {/* Noise film overlay — premium paper texture feel */}
      <div className="noise-overlay pointer-events-none" />

      <Header />
      <Hero />
      <About />
      <Coffee />
      <Cycling />
      <Gear />
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

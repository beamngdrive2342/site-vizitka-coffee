import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { TRANSLATIONS } from "../data";

type Lang = "ru" | "en";
type Theme = "light" | "dark";

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof TRANSLATIONS["ru"];
  theme: Theme;
  setTheme: (theme: Theme) => void;
  ambientAudio: boolean;
  setAmbientAudio: (val: boolean) => void;
  activeTab: string;
  setActiveTab: (val: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ru");
  const [theme, setTheme] = useState<Theme>("dark");
  const [ambientAudio, setAmbientAudio] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        t,
        theme,
        setTheme,
        ambientAudio,
        setAmbientAudio,
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

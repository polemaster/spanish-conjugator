import { createContext, useContext, useEffect, useState } from "react";

export type Mood = "indicative" | "subjunctive" | "imperative" | "conditional";
export type Tense = string;
export type Person = "first" | "second" | "third";

export interface Settings {
  moods: Record<Mood, Tense[]>;
  persons: Person[];
  topVerbsOnly: boolean;
  topVerbLimit: number;
}

const defaultSettings: Settings = {
  moods: {
    indicative: ["present"],
    subjunctive: [],
    imperative: ["affirmative"],
  },
  persons: ["first", "second"],
  topVerbsOnly: false,
  topVerbLimit: 50,
};

const SettingsContext = createContext<{
  settings: Settings;
  updateSettings: (newSettings: Settings) => void;
}>({
  settings: defaultSettings,
  updateSettings: () => {},
});

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem("app-settings");
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("app-settings", JSON.stringify(settings));
  }, [settings]);

  const updateSettings = (newSettings: Settings) => setSettings(newSettings);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

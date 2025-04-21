import { createContext, useContext, useEffect, useState } from "react";
import { GroupedPerson, Person } from "../models/Person";
import defaultSettings from "../constants/defaultSettings";
import { Mood } from "../models/Mood";

export interface Settings {
  selectedTenses: Record<Mood, string[]>;
  selectedPersons: GroupedPerson[];
  numberOfTopVerbs: number;
}

const SettingsContext = createContext<{
  settings: Settings;
  toggleTense: (mood: Mood, tenseKey: string) => void;
  togglePerson: (person: Person) => void;
  isPersonSelected: (person: Person) => boolean;
  setTopNVerbs: (value: number) => void;
}>({
  settings: defaultSettings,
  toggleTense: () => {},
  togglePerson: () => {},
  isPersonSelected: () => false,
  setTopNVerbs: () => {},
});

export const useSettingsContext = () => useContext(SettingsContext);

export const SettingsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem("settings");
    return stored ? JSON.parse(stored) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("settings", JSON.stringify(settings));
  }, [settings]);

  /*
  Available moods: /src/models/Mood.ts
  Available tenses: /src/constants/tenses.ts (English ones)
   */
  const toggleTense = (mood: Mood, tense: string) => {
    const currentTenses = settings.selectedTenses[mood] || [];
    const updatedTenses = currentTenses.includes(tense)
      ? currentTenses.filter((t) => t !== tense)
      : [...currentTenses, tense];

    setSettings((prev) => ({
      ...prev,
      selectedTenses: {
        ...prev.selectedTenses,
        [mood]: updatedTenses,
      },
    }));
  };

  const togglePerson = ({ number, person }: Person) => {
    const updated = [...settings.selectedPersons];
    const group = updated.find((g) => g.number === number);

    if (group) {
      if (group.person.includes(person)) {
        group.person = group.person.filter((p) => p !== person);
        if (group.person.length === 0) {
          // remove group entirely
          setSettings({
            ...settings,
            selectedPersons: updated.filter((g) => g.number !== number),
          });
          return;
        }
      } else {
        group.person.push(person);
      }
    } else {
      updated.push({ number, person: [person] });
    }

    setSettings({ ...settings, selectedPersons: updated });
  };

  const isPersonSelected = ({ number, person }: Person) => {
    const group = settings.selectedPersons.find((g) => g.number === number);
    return group ? group.person.includes(person) : false;
  };

  const setTopNVerbs = (value: number) => {
    setSettings((prev) => ({ ...prev, numberOfTopVerbs: value }));
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        toggleTense,
        togglePerson,
        isPersonSelected,
        setTopNVerbs,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { GroupedPerson, Person } from "../models/Person";
import defaultSettings from "../constants/defaultSettings";

export interface Settings {
  selectedTenses: string[];
  selectedPersons: GroupedPerson[];
  topNVerbs: number;
}

const SettingsContext = createContext<{
  settings: Settings;
  toggleTense: (tenseKey: string) => void;
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

  const toggleTense = (tenseKey: string) => {
    const selected = settings.selectedTenses.includes(tenseKey)
      ? settings.selectedTenses.filter((k) => k !== tenseKey)
      : [...settings.selectedTenses, tenseKey];

    setSettings((prev) => ({
      ...prev,
      selectedTenses: selected,
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
    setSettings((prev) => ({ ...prev, topNVerbs: value }));
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

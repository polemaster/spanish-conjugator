import { createContext, useContext } from "react";
import { GroupedPerson, Person, Mood } from "../models";
import { defaultSettings } from "../data";
import { useLocalStorage } from "../hooks";

export interface Settings {
  selectedTenses: Record<Mood, string[]>;
  selectedPersons: GroupedPerson[];
  numberOfTopVerbs: number;
}

const CURRENT_VERSION = "1.0";

const SettingsContext = createContext<{
  settings: Settings;
  toggleTense: (mood: Mood, englishTense: string) => void;
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
  const [settings, setSettings] = useLocalStorage<Settings>(
    "settings",
    defaultSettings,
    CURRENT_VERSION,
  );

  /*
  Available moods: /src/models/Mood.ts
  Available tenses: /src/data/tenses.ts (English ones)
   */
  const toggleTense = (mood: Mood, englishTense: string) => {
    const currentTenses = settings.selectedTenses[mood] || [];
    const updatedTenses = currentTenses.includes(englishTense)
      ? currentTenses.filter((t) => t !== englishTense)
      : [...currentTenses, englishTense];

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

import { useEffect, useState } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
// import { getRandomElement } from "../utils/helpers"; // you'll create this
import parseTense from "../utils/parseTense";
import { Person } from "../models/Person";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPerson(settings) {
  // Extract the selectedPersons array
  const selectedPersons = settings.selectedPersons as {
    number: "singular" | "plural";
    person: string[];
  }[];

  // Flatten the selectedPersons array to get individual Person objects
  const flattenedPersons: Person[] = selectedPersons.flatMap(
    ({ number, person }) =>
      person.map((p) => ({
        number,
        person: p as "first" | "second" | "third",
      })),
  );

  // Select a random Person
  const randomIndex = Math.floor(Math.random() * flattenedPersons.length);
  return flattenedPersons[randomIndex];
}

function useRandomConjugation() {
  const { settings } = useSettingsContext();

  const [mood, setMood] = useState<string>("indicative");
  const [tense, setTense] = useState<string>("present");
  const [person, setPerson] = useState<Person>({
    number: "singular",
    person: "second",
  });

  function setRandomConjugation() {
    // if (!settings.selectedTenses.length || !settings.selectedPersons.length)
    if (!settings.selectedTenses.length) return;

    const randomTense = getRandomElement(settings.selectedTenses);
    const [newMood, newTense] = parseTense(randomTense);
    const newPerson = getRandomPerson(settings);

    setMood(newMood);
    setTense(newTense);
    setPerson(newPerson);
  }

  useEffect(() => {
    setRandomConjugation();
  }, [settings]);

  return { mood, tense, person, setRandomConjugation };
}

export default useRandomConjugation;

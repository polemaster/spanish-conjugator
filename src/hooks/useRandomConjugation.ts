import { useEffect, useState } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
// import { getRandomElement } from "../utils/helpers"; // you'll create this
import parseTense from "../utils/parseTense";

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function useRandomConjugation() {
  const { settings } = useSettingsContext();

  const [mood, setMood] = useState<string>("indicative");
  const [tense, setTense] = useState<string>("present");
  const [person, setPerson] = useState<{
    number: "singular" | "plural";
    person: "first" | "second" | "third";
  }>({ number: "singular", person: "second" });

  function setRandomConjugation() {
    // if (!settings.selectedTenses.length || !settings.selectedPersons.length)
    if (!settings.selectedTenses.length) return;

    const randomTense = getRandomElement(settings.selectedTenses);
    const [newMood, newTense] = parseTense(randomTense);
    // const newPerson = { number: "singular", person: "second" };

    setMood(newMood);
    setTense(newTense);
    // setPerson(newPerson);
  }

  useEffect(() => {
    setRandomConjugation();
  }, [settings]);

  return { mood, tense, person, setRandomConjugation };
}

export default useRandomConjugation;

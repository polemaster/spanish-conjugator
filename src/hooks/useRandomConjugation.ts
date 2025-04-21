import { useEffect, useState } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
import parseTense from "../utils/parseTense";
import { Person } from "../models/Person";
import { getRandomTense } from "../utils/getRandomTense";
import getRandomPerson from "../utils/getRandomPerson";

function useRandomConjugation() {
  const { settings } = useSettingsContext();

  const [mood, setMood] = useState<string>("indicative");
  const [tense, setTense] = useState<string>("present");
  const [person, setPerson] = useState<Person>({
    number: "singular",
    person: "second",
  });

  function setRandomConjugation() {
    const result = getRandomTense(settings.selectedTenses);

    if (result) {
      const [randomMood, randomTense] = parseTense(result.mood, result.tense);
      const newPerson = getRandomPerson(
        settings.selectedPersons,
        result.mood,
        result.tense,
      );
      setMood(randomMood);
      setTense(randomTense);
      setPerson(newPerson);
    } else {
      console.log("No tenses selected in settings.");
    }
  }

  useEffect(() => {
    setRandomConjugation();
  }, [settings]);

  return { mood, tense, person, setRandomConjugation };
}

export default useRandomConjugation;

import { useEffect, useState } from "react";
import { useSettingsContext } from "../contexts/SettingsContext";
import { Person } from "../models/Person";
import { getRandomTense } from "../utils/getRandomTense";
import getRandomPerson from "../utils/getRandomPerson";
import { Mood } from "../models/Mood";
import Tense from "../models/Tense";
import { getFullTense } from "../constants/tenses";

// Used in ConjugationForm to set a new random conjugation after guessing the verb correctly
function useRandomConjugation() {
  const { settings } = useSettingsContext();

  // The default values (indicative, present, ...) are only relevant if localStorage contains incorrect data
  const [moodDisplay, setMoodDisplay] = useState<Mood>("Indicative");
  const [tenseDisplay, setTenseDisplay] = useState<Tense>({
    spanish: "Presente",
    english: "Present",
  });
  const [person, setPerson] = useState<Person>({
    number: "singular",
    person: "second",
  });

  function setRandomConjugation() {
    const randomMoodAndTense = getRandomTense(settings.selectedTenses);

    // The random tense can be null because there might be no tenses selected in settings
    if (randomMoodAndTense) {
      // Set tense & mood to be displayed (in settings format)
      const { mood, tense } = randomMoodAndTense;
      setMoodDisplay(mood);
      setTenseDisplay(getFullTense(mood, tense));

      // Get a random person for given mood & tense
      const newPerson = getRandomPerson(settings.selectedPersons, mood);
      setPerson(newPerson);
    } else {
      console.log("No tenses selected in settings.");
    }
  }

  useEffect(() => {
    setRandomConjugation();
  }, [settings]);

  return {
    moodDisplay,
    tenseDisplay,
    person,
    setRandomConjugation,
  };
}

export default useRandomConjugation;

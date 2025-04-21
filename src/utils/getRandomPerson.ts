import { Mood } from "../models/Mood";
import { GroupedPerson, Person } from "../models/Person";

export default function getRandomPerson(
  selectedPersons: GroupedPerson[],
  mood: Mood,
  tense: string,
) {
  // Remove "singular" "first" from imperative mood
  if (mood === "imperative") {
    selectedPersons = selectedPersons.map((entry) => {
      if (entry.number === "singular") {
        return {
          ...entry,
          person: entry.person.filter((p) => p !== "first"),
        };
      }
      return entry;
    });
  }

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

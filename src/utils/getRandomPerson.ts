import { GroupedPerson, Person, Mood } from "../models";

export function getRandomPerson(selectedPersons: GroupedPerson[], mood: Mood) {
  // Remove "singular first" from imperative mood
  if (mood === "Imperative") {
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

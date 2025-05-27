import { Mood, Person, GroupedPerson } from "models";
import { Verb } from "pages/home/models";

export class RandomSelector {
  constructor(
    private selectedTenses: Record<Mood, string[]>,
    private selectedPersons: GroupedPerson[],
    private verbsPool: Record<string, Verb>,
  ) {}

  private getRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /**
  Returns random mood and tense (in the same format as in /src/data/tenses.ts)
  Example 1: { "Indicative", "Present" }
  Example 2: { "Imperative", "Affirmative" }
  Example 3: { "Other", "Gerund" }
  */
  public getRandomMoodTense(): { mood: Mood; tense: string } | null {
    // Maps object of type Record<Mood, string[]> to array of type { mood: Mood; tense: string }[]
    const allTenses = Object.entries(this.selectedTenses).flatMap(
      ([mood, tenses]) =>
        tenses.map((tense) => ({ mood: mood as Mood, tense })),
    );

    if (allTenses.length === 0) return null;

    return this.getRandomElement(allTenses);
  }

  // Returns a random valid person
  // Mood is needed because certain moods (e.g. imperative) don't have all persons conjugations
  public getRandomPerson(mood: Mood) {
    // Remove "singular first" from imperative mood
    if (mood === "Imperative") {
      this.selectedPersons = this.selectedPersons.map((entry) => {
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
    const flattenedPersons: Person[] = this.selectedPersons.flatMap(
      ({ number, person }) =>
        person.map((p) => ({
          number,
          person: p as "first" | "second" | "third",
        })),
    );

    // Select a random Person
    return this.getRandomElement(flattenedPersons);
  }

  public getRandomVerb(): Verb {
    const keys = Object.keys(this.verbsPool);
    const randomKey = this.getRandomElement(keys);
    return this.verbsPool[randomKey];
  }
}

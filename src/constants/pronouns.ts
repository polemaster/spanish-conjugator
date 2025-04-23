import { Person } from "../models/Person";

// Maps a Person object to a human-readable person (yo, tú...)
export const pronounMap: Record<string, string> = {
  "singular.first": "yo",
  "singular.second": "tú",
  "singular.third": "él/ella/usted",
  "plural.first": "nosotros",
  "plural.second": "vosotros",
  "plural.third": "ellos/ellas/ustedes",
};

// The order here is important - in that order the elements will be displayed on
// the css grid in /src/components/PersonSelector.tsx
export const allPersons: Person[] = [
  { number: "singular", person: "first" },
  { number: "plural", person: "first" },
  { number: "singular", person: "second" },
  { number: "plural", person: "second" },
  { number: "singular", person: "third" },
  { number: "plural", person: "third" },
];

// Helper function designed to be used in conjuction with pronounMap defined above
export const getPronounKey = (p: Person) => `${p.number}.${p.person}`;

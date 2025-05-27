import { Person } from "models";

// Maps a Person object to a human-readable person (yo, tú...)
// Spanish pronouns yo, tú... are displayed exactly the same on home page, however
// on the settings page they are slightly modified (e.g. él -> él/ella/usted)
export const pronounMap: Record<string, string> = {
  "singular.first": "yo",
  "singular.second": "tú",
  "singular.third": "él",
  "plural.first": "nosotros",
  "plural.second": "vosotros",
  "plural.third": "ellos",
};

// The order here is important - in that order the elements will be displayed on
// the css grid in /src/pages/settings/components/PersonSelector.tsx
export const allPersons: Person[] = [
  { number: "singular", person: "first" },
  { number: "singular", person: "second" },
  { number: "singular", person: "third" },
  { number: "plural", person: "first" },
  { number: "plural", person: "second" },
  { number: "plural", person: "third" },
];

// Helper function designed to be used in conjuction with pronounMap defined above
export const getPronounKey = (p: Person) => `${p.number}.${p.person}`;

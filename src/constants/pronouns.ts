import { Person } from "../models/Person";

export const pronounMap: Record<string, string> = {
  "singular.first": "yo",
  "singular.second": "tú",
  "singular.third": "él/ella/usted",
  "plural.first": "nosotros",
  "plural.second": "vosotros",
  "plural.third": "ellos/ellas/ustedes",
};

export const allPersons: Person[] = [
  { number: "singular", person: "first" },
  { number: "singular", person: "second" },
  { number: "singular", person: "third" },
  { number: "plural", person: "first" },
  { number: "plural", person: "second" },
  { number: "plural", person: "third" },
];

export const getPronounKey = (p: Person) => `${p.number}.${p.person}`;

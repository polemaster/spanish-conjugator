import { Person } from "../models/Person";
import Verb from "../models/Verb";

export default function getConjugation(
  verb: Verb,
  mood: string,
  tense: string,
  person: Person,
) {
  if (mood === "other") {
    return verb[tense];
  }
  return verb.conjugations[mood][tense][person.number]?.[person.person];
}

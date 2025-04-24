import { Verb } from "../models";

export function getRandomVerb(verbs: Record<string, Verb>) {
  const keys = Object.keys(verbs);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomVerb = verbs[randomKey];

  return randomVerb;
}

import { Verb } from "../models";

// Return only those verbs from all verbs that are in the topVerbs (which were
// loaded from the csv file). "n" is the size of the output array.
export function getTopNVerbs(
  verbs: Record<string, Verb>,
  allTopVerbs: string[],
  n: number,
): Record<string, Verb> {
  // Remove verbs ending with "se" (reflexive verbs) and get only infinitives
  const infinitives = Object.keys(verbs).map((infinitive) =>
    infinitive.endsWith("se") ? infinitive.slice(0, -2) : infinitive,
  );

  // After removing "se" from certain verbs, there may be duplicates so
  // we need to remove them
  const uniqueInfinitives = Array.from(new Set(infinitives));

  // Get only those verbs that are in top verbs
  const filteredInfinitives = uniqueInfinitives.filter((verb) =>
    allTopVerbs.includes(verb),
  );

  // Create map of frequency rank
  const indexMap = new Map<string, number>();
  allTopVerbs.forEach((verb, index) => indexMap.set(verb, index));

  // Sort by rank
  filteredInfinitives.sort((a, b) => {
    const indexA = indexMap.get(a) ?? Infinity;
    const indexB = indexMap.get(b) ?? Infinity;
    return indexA - indexB;
  });

  const topVerbs = filteredInfinitives.slice(0, n);

  // Now reconstruct a new object with only the selected top n verbs
  const result: Record<string, Verb> = {};

  for (const topVerb of topVerbs) {
    result[topVerb] = verbs[topVerb];
  }

  return result;
}

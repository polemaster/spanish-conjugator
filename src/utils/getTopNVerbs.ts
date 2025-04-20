import Verb from "../models/Verb";

function getTopNVerbs(
  verbs: Record<string, Verb>,
  topVerbs: string[],
  n: number,
): Record<string, Verb> {
  const infinitives = Object.keys(verbs).map((infinitive) =>
    infinitive.endsWith("se") ? infinitive.slice(0, -2) : infinitive,
  );

  const uniqueInfinitives = Array.from(new Set(infinitives));

  const filteredInfinitives = uniqueInfinitives.filter((verb) =>
    topVerbs.includes(verb),
  );

  // Create map of frequency rank
  const indexMap = new Map<string, number>();
  topVerbs.forEach((verb, index) => indexMap.set(verb, index));

  // Sort by rank
  filteredInfinitives.sort((a, b) => {
    const indexA = indexMap.get(a) ?? Infinity;
    const indexB = indexMap.get(b) ?? Infinity;
    return indexA - indexB;
  });

  const selected = filteredInfinitives.slice(0, n);

  // Now reconstruct a new object with only the selected verbs
  const result: Record<string, Verb> = {};

  for (const key of Object.keys(verbs)) {
    const stripped = key.endsWith("se") ? key.slice(0, -2) : key;
    if (selected.includes(stripped)) {
      result[key] = verbs[key];
    }
  }

  return result;
}

export default getTopNVerbs;

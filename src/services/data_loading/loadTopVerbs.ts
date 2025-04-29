export const loadTopVerbs = async (csvPath: string): Promise<string[]> => {
  const response = await fetch(csvPath);
  const text = await response.text();

  const lines = text.split("\n");
  const verbs = lines
    .map((line) => line.trim().replace(/^\d+\.\s*/, "")) // remove "1. " or "23. " etc.
    .filter((verb) => verb.length > 0); // remove empty lines

  return verbs;
};

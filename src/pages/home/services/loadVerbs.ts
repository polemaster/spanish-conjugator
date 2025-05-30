import { Verb, VerbRow } from "pages/home/models";
import Papa from "papaparse";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Function to load the CSV and parse it
export const loadVerbs = async (
  csvPath: string,
): Promise<Record<string, Verb>> => {
  const response = await fetch(csvPath);
  const csvText = await response.text();

  // await sleep(1000);

  return new Promise((resolve, reject) => {
    Papa.parse<VerbRow>(csvText, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const verbs: Record<string, Verb> = {};

        result.data.forEach((row) => {
          const infinitive = row.infinitive.trim();

          if (!verbs[infinitive]) {
            verbs[infinitive] = new Verb(
              infinitive,
              row.infinitive_english,
              row.gerund,
              row.pastparticiple,
            );
          }

          verbs[infinitive].addConjugation(
            row.mood_english,
            row.tense_english,
            row,
          );
        });

        resolve(verbs);
      },
      error: reject,
    });
  });
};

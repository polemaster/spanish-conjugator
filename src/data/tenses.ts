import { Mood, Tense } from "models";

export const tenseData: Record<Mood, Tense[]> = {
  Indicative: [
    { spanish: "Presente", english: "Present" },
    { spanish: "Futuro", english: "Future" },
    { spanish: "Imperfecto", english: "Imperfect" },
    { spanish: "Pretérito", english: "Preterite" },
    { spanish: "Condicional", english: "Conditional" },
    { spanish: "Pretérito perfecto", english: "Present Perfect" },
    { spanish: "Futuro perfecto", english: "Future Perfect" },
    { spanish: "Pluscuamperfecto", english: "Past Perfect" },
    { spanish: "Pretérito anterior", english: "Preterite (Archaic)" },
    { spanish: "Condicional perfecto", english: "Conditional Perfect" },
  ],
  Subjunctive: [
    { spanish: "Presente", english: "Present" },
    { spanish: "Imperfecto", english: "Imperfect" },
    { spanish: "Futuro", english: "Future" },
    { spanish: "Pretérito perfecto", english: "Present Perfect" },
    { spanish: "Futuro perfecto", english: "Future Perfect" },
    { spanish: "Pluscuamperfecto", english: "Past Perfect" },
  ],
  Imperative: [
    { spanish: "Afirmativo", english: "Affirmative" },
    { spanish: "Negativo", english: "Negative" },
  ],
  Other: [
    { spanish: "Gerundio", english: "Gerund" },
    { spanish: "Participio Pasado", english: "Past Participle" },
  ],
};

// Function for returning full tense (both Spanish and English) based on English tense and mood.
// Useful for converting tenses from settings format to Tense object
// This function assumes that the English tense is given correctly and can be found in allTenses.
export const getFullTense = (mood: Mood, englishTense: string): Tense => {
  return tenseData[mood].find((tense) => tense.english === englishTense)!;
};

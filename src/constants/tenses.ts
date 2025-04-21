import { Mood } from "../models/Mood";
import Tense from "../models/Tense";

export const tenseData: Record<Mood, Tense[]> = {
  indicative: [
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
  subjunctive: [
    { spanish: "Presente", english: "Present" },
    { spanish: "Imperfecto", english: "Imperfect" },
    { spanish: "Futuro", english: "Future" },
    { spanish: "Pretérito perfecto", english: "Present Perfect" },
    { spanish: "Futuro perfecto", english: "Future Perfect" },
    { spanish: "Pluscuamperfecto", english: "Past Perfect" },
  ],
  imperative: [
    { spanish: "Afirmativo", english: "Affirmative" },
    { spanish: "Negativo", english: "Negative" },
  ],
  other: [
    { spanish: "Gerundio", english: "Gerund" },
    { spanish: "Participio Pasado", english: "Past Participle" },
  ],
};

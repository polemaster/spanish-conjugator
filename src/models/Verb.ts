import VerbRow from "./VerbRow";

/*
Available moods: "indicative", "subjunctive", "imperative affirmative", "imperative negative"
Available tenses: "present", "present perfect", etc.
 */
class Verb {
  infinitive: string;
  english: string;
  gerund: string;
  pastParticiple: string;
  conjugations: {
    [mood: string]: {
      [tense: string]: {
        singular?: {
          first?: string;
          second?: string;
          third?: string;
        };
        plural?: {
          first?: string;
          second?: string;
          third?: string;
        };
      };
    };
  };

  constructor(
    infinitive: string,
    english: string,
    gerund: string,
    pastParticiple: string,
  ) {
    this.infinitive = infinitive;
    this.english = english;
    this.gerund = gerund;
    this.pastParticiple = pastParticiple;
    this.conjugations = {};
  }

  addConjugation(mood: string, tense: string, row: VerbRow) {
    mood = mood.toLowerCase();
    tense = tense.toLowerCase();

    if (!this.conjugations[mood]) this.conjugations[mood] = {};
    if (!this.conjugations[mood][tense]) {
      this.conjugations[mood][tense] = { singular: {}, plural: {} };
    }

    const c = this.conjugations[mood][tense];
    if (row.form_1s) c.singular!.first = row.form_1s;
    if (row.form_2s) c.singular!.second = row.form_2s;
    if (row.form_3s) c.singular!.third = row.form_3s;
    if (row.form_1p) c.plural!.first = row.form_1p;
    if (row.form_2p) c.plural!.second = row.form_2p;
    if (row.form_3p) c.plural!.third = row.form_3p;
  }
}

export default Verb;

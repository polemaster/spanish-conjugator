import { Verb, Mood, Tense, Person, GroupedPerson } from "../models";
import { RandomSelector } from "./RandomSelector";
import { getFullTense } from "../data";
import { convertTense } from "../utils";

export class VerbConjugator {
  private verb: Verb | null = null;
  private mood: string = "indicative";
  private tense: string = "present";
  private person: Person = { number: "singular", person: "second" };
  private randomizer: RandomSelector;

  private display = {
    mood: "Indicative" as Mood,
    tense: { spanish: "Presente", english: "Present" } as Tense,
  };

  constructor(
    verbsPool: Record<string, Verb>,
    selectedTenses: Record<Mood, string[]>,
    selectedPersons: GroupedPerson[],
  ) {
    this.randomizer = new RandomSelector(
      selectedTenses,
      selectedPersons,
      verbsPool,
    );
    this.setNewRandomConjugation();
  }

  public getCurrentVerb(): Verb | null {
    return this.verb;
  }

  public getPerson() {
    return this.person;
  }

  public getDisplay(): { mood: Mood; tense: Tense } {
    return this.display;
  }

  public getConjugatedVerb(): string | undefined {
    if (!this.verb) return "";

    if (this.mood === "other") {
      return this.verb[this.tense];
    }

    return this.verb.conjugations?.[this.mood][this.tense][
      this.person.number
    ]?.[this.person.person];
  }

  public setNewRandomConjugation(): void {
    const moodAndTense = this.randomizer.getRandomTense();
    if (!moodAndTense) return;

    const { mood, tense } = moodAndTense;
    const fullTense = getFullTense(mood, tense);

    this.verb = this.randomizer.getRandomVerb();
    this.display.mood = mood;
    this.display.tense = fullTense;
    this.person = this.randomizer.getRandomPerson(mood);

    const [new_mood, new_tense] = convertTense(mood, fullTense);
    this.mood = new_mood;
    this.tense = new_tense;
  }
}

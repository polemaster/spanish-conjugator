export type PersonType = "first" | "second" | "third";
export type NumberType = "singular" | "plural";

export interface Person {
  number: NumberType;
  person: PersonType;
}

export interface GroupedPerson {
  number: NumberType;
  person: PersonType[];
}

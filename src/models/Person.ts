export interface Person {
  number: "singular" | "plural";
  person: "first" | "second" | "third";
}

export type PersonType = "first" | "second" | "third";
export type NumberType = "singular" | "plural";

export interface GroupedPerson {
  number: NumberType;
  person: PersonType[];
}

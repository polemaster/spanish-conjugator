import {
  PresentSimple,
  PresentSubjunctive,
  PresentContinuous,
  PastContinuousImperfect,
  PastContinuousPreterite,
  Imperfect,
  Preterite,
  Imperative,
  PresentPerfect,
  PastPerfect,
  Future,
} from "../components";

export interface TenseItem {
  id: string;
  label: string;
  component: React.FC;
}

export const TENSES: TenseItem[] = [
  { id: "present_simple", label: "Present Simple", component: PresentSimple },
  {
    id: "present_subjunctive",
    label: "Present Subjunctive",
    component: PresentSubjunctive,
  },
  {
    id: "present_continuous",
    label: "Present Continuous",
    component: PresentContinuous,
  },
  {
    id: "preterite",
    label: "Preterite",
    component: Preterite,
  },
  {
    id: "imperfect",
    label: "Imperfect",
    component: Imperfect,
  },
  {
    id: "imperfect_progressive",
    label: "Past Continuous (Imperfect Progressive)",
    component: PastContinuousImperfect,
  },
  {
    id: "preterite_progressive",
    label: "Past Continuous (Preterite Progressive)",
    component: PastContinuousPreterite,
  },
  {
    id: "imperative",
    label: "Imperative",
    component: Imperative,
  },
  {
    id: "present_perfect",
    label: "Present Perfect",
    component: PresentPerfect,
  },
  {
    id: "past_perfect",
    label: "Past Perfect",
    component: PastPerfect,
  },
  {
    id: "future",
    label: "Future",
    component: Future,
  },
];

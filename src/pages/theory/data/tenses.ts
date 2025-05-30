import { PresentSimple, PresentSubjunctive } from "../components";

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
  // add more: { id: "past_perfect", label: "Past Perfect", component: PastPerfect },
];

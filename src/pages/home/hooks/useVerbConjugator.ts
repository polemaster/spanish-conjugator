import { useEffect, useState } from "react";
import { VerbConjugator } from "pages/home/services";
import { useSettingsContext } from "contexts";
import { Verb } from "pages/home/models";
import { getTopNVerbs } from "../utils";

interface useVerbConjugatorProps {
  allVerbs: Record<string, Verb>;
  topVerbs: string[];
}

export function useVerbConjugator({
  allVerbs,
  topVerbs,
}: useVerbConjugatorProps) {
  const { settings } = useSettingsContext();
  const [conjugator, setConjugator] = useState<VerbConjugator | null>(null);

  // Whenever user changes settings, a new VerbConjugator should be created
  useEffect(() => {
    const sortedTopVerbs = getTopNVerbs(
      allVerbs,
      topVerbs,
      settings.numberOfTopVerbs,
    );

    if (Object.keys(sortedTopVerbs).length === 0) return;

    const newConjugator = new VerbConjugator(
      sortedTopVerbs,
      settings.selectedTenses,
      settings.selectedPersons,
    );
    setConjugator(newConjugator);
  }, [allVerbs, topVerbs, settings]);

  return conjugator;
}

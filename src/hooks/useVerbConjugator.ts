import { useEffect, useState } from "react";
import { VerbConjugator } from "../services";
import { useSettingsContext } from "../contexts";
import { Verb } from "../models";

export function useVerbConjugator(topVerbs: Record<string, Verb>) {
  const { settings } = useSettingsContext();
  const [conjugator, setConjugator] = useState<VerbConjugator | null>(null);

  // Whenever user changes settings, a new VerbConjugator should be created
  useEffect(() => {
    if (Object.keys(topVerbs).length === 0) return;

    const newConjugator = new VerbConjugator(
      topVerbs,
      settings.selectedTenses,
      settings.selectedPersons,
    );
    setConjugator(newConjugator);
  }, [topVerbs, settings]);

  return conjugator;
}

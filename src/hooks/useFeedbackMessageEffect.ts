import { useState, useEffect } from "react";

export function useFeedbackMessage() {
  const [answer, setAnswer] = useState("");
  const [correctVerb, setCorrectVerb] = useState<string | undefined>("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (answer) {
      setShowFeedback(true);
      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, 2000); // Show feedback for 2 seconds

      const hideTimer = setTimeout(() => {
        setAnswer("");
        setCorrectVerb(undefined);
      }, 3000); // Remove feedback after it has faded out

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [answer]);

  return { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback };
}

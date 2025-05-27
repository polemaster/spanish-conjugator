import { useState, useEffect } from "react";
import {
  FEEDBACK_MSG_DISPLAY_TIME,
  FEEDBACK_MSG_TRANSITION_TIME,
} from "pages/home/utils";

export function useFeedbackMessage() {
  const [answer, setAnswer] = useState("");
  const [correctVerb, setCorrectVerb] = useState<string | undefined>("");
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (answer) {
      setShowFeedback(true);
      const timer = setTimeout(() => {
        setShowFeedback(false);
      }, FEEDBACK_MSG_DISPLAY_TIME + FEEDBACK_MSG_TRANSITION_TIME); // Show feedback for FEEDBACK_MSG_DISPLAY_TIME milliseconds

      const hideTimer = setTimeout(
        () => {
          setAnswer("");
          setCorrectVerb(undefined);
        },
        FEEDBACK_MSG_DISPLAY_TIME + 2 * FEEDBACK_MSG_TRANSITION_TIME,
      ); // Remove feedback after it has faded out

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [answer]);

  return { answer, setAnswer, correctVerb, setCorrectVerb, showFeedback };
}

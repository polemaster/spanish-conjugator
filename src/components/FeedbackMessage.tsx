import React from "react";
import { FEEDBACK_MSG_TRANSITION_TIME } from "../utils";

interface Props {
  messageType: string;
  correctVerb?: string;
  isVisible: boolean;
}

export default function FeedbackMessage({
  messageType,
  correctVerb,
  isVisible = false,
}: Props) {
  const baseClasses = `flex items-center h-15 p-4 my-5 rounded shadow transition-opacity duration-[${FEEDBACK_MSG_TRANSITION_TIME}ms] `;
  const visibilityClass = isVisible
    ? "opacity-100"
    : "opacity-0 pointer-events-none";

  let messageClasses = "";
  let message: React.ReactNode = "";

  if (messageType === "correct") {
    messageClasses = "bg-green-300 text-green-800";
    message = "Correct";
  } else if (messageType === "wrong") {
    messageClasses = "bg-red-300 text-red-800";
    message = (
      <span>
        Wrong, the correct verb is <strong>{correctVerb}</strong>
      </span>
    );
  }

  return (
    <div className={`${baseClasses} ${messageClasses} ${visibilityClass}`}>
      {message}
    </div>
  );
}

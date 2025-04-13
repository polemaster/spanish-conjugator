import React from "react";

type Props = {
  messageType: string;
  correctVerb?: string;
  isVisible: boolean;
};

export default function FeedbackMessage({
  messageType,
  correctVerb,
  isVisible,
}: Props) {
  if (!messageType) return null;

  const baseClasses =
    "p-4 text-center rounded shadow transition-opacity duration-1000";
  const visibilityClass = isVisible ? "opacity-100" : "opacity-0";

  let messageClasses = "";
  let message: React.ReactNode = "";

  if (messageType === "correct") {
    messageClasses = "bg-green-300 text-green-800";
    message = "Correct";
  } else if (messageType === "wrong") {
    messageClasses = "bg-red-300 text-red-800";
    message = (
      <>
        Wrong, the correct verb is <strong>{correctVerb}</strong>
      </>
    );
  }

  return (
    <div
      className={`absolute top-0 left-0 right-0 ${baseClasses} ${messageClasses} ${visibilityClass}`}
    >
      {message}
    </div>
  );
}

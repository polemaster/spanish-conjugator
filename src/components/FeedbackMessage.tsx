type Props = {
  messageType: string;
  correctVerb?: string;
};

export default function FeedbackMessage({ messageType, correctVerb }: Props) {
  if (messageType === "correct")
    return (
      <div className="mt-4 p-4 bg-green-300 text-green-800 text-center rounded shadow">
        Correct
      </div>
    );

  if (messageType === "wrong")
    return (
      <div className="mt-4 p-4 bg-red-300 text-red-800 text-center rounded shadow">
        Wrong, the correct verb is <strong>{correctVerb}</strong>
      </div>
    );

  return null;
}

type Props = {
  isCorrect: boolean;
  isWrong: boolean;
  correctVerb?: string;
};

export default function FeedbackMessage({
  isCorrect,
  isWrong,
  correctVerb,
}: Props) {
  if (isCorrect)
    return (
      <div className="mt-4 p-4 bg-green-300 text-green-800 text-center rounded shadow">
        Correct
      </div>
    );

  if (isWrong)
    return (
      <div className="mt-4 p-4 bg-red-300 text-red-800 text-center rounded shadow">
        Wrong, the correct verb is <strong>{correctVerb}</strong>
      </div>
    );

  return null;
}

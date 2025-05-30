interface Props {
  allVerbsScore: number;
  correctVerbsScore: number;
}

export function ScoreDisplay({ allVerbsScore, correctVerbsScore }: Props) {
  // We can't divide by 0
  const percentageScore =
    allVerbsScore > 0
      ? ((100 * correctVerbsScore) / allVerbsScore).toFixed(2)
      : "0";

  const color =
    parseFloat(percentageScore) > 70 ? "text-green-400" : "text-red-400";

  return (
    <div
      className={`flex items-center shadow my-5 h-10 p-4 rounded bg-neutral-700 ${color}`}
    >
      Score: {correctVerbsScore} / {allVerbsScore} ({percentageScore} %)
    </div>
  );
}

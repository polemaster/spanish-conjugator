interface Props {
  allVerbsScore: number;
  correctVerbsScore: number;
}

export default function ScoreDisplay({
  allVerbsScore,
  correctVerbsScore,
}: Props) {
  // We can't divide by 0
  const percentageScore =
    allVerbsScore > 0
      ? ((100 * correctVerbsScore) / allVerbsScore).toFixed(2)
      : "0";

  const color =
    parseFloat(percentageScore) > 70 ? "text-green-500" : "text-red-500";

  return (
    <div className={`flex items-center shadow my-5 h-10 p-4 ${color}`}>
      Score: {correctVerbsScore} / {allVerbsScore} ({percentageScore} %)
    </div>
  );
}

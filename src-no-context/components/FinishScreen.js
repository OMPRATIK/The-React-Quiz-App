function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points * 100) / maxPossiblePoints;

  let emoji;
  if (percentage >= 90 && percentage <= 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 90) emoji = "🥈";
  if (percentage >= 70 && percentage < 80) emoji = "🥉";
  if (percentage >= 50 && percentage < 70) emoji = "🫡";
  if (percentage < 50) emoji = "😒";
  if (percentage < 10) emoji = "🤮";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;

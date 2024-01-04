export default function FinishScreen({ points, dispatch, result }) {
  let interpret;
  if (points >= 1 && points <= 10) interpret = result[0];
  if (points >= 11 && points <= 16) interpret = result[1];
  if (points >= 17 && points <= 20) interpret = result[2];
  if (points >= 21 && points <= 30) interpret = result[3];
  if (points >= 31 && points <= 40) interpret = result[4];
  if (points > 40) interpret = result[5];

  return (
    <div className="finish-screen">
      <p>
        Your score is <strong>{points}</strong>
      </p>
      <p>
        <strong>{interpret}</strong>
      </p>
      <button
        className="btn-start"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

//1-10, 11-16,17-20,21-30,31-40,over 40

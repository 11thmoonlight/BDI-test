export default function Options({ question, dispatch, answer }) {
  // const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          className="btn-option"
          // disabled={hasAnswer}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

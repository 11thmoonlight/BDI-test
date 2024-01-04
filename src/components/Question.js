import Options from "./Options";

export function Question({ question, dispatch, answer }) {
  console.log(question);
  return (
    <div>
      <h4 className="question">{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

/*export function AppReducer() {
  return <div></div>;
}*/

export function Header({ dispatch }) {
  return (
    <div className="flex-box">
      <h2 className="title">Beck Depression Inventory</h2>
      <p className="description">
        Sometimes it is natural to feel many negative emotions such as fatigue,
        malaise, and lack of motivation. However, when these negative feelings
        start to drain your life energy and make you unmotivated towards life,
        depression can occur. If you've been feeling tired, depressed, and
        unmotivated for at least a week, solving this quiz can help you
        understand yourself. Because all the emotional, intellectual, and
        physical propositions you will see in the Beck Depression Test point to
        common symptoms that may be related to the severity of depression in the
        person. If you conclude that your depression level is severe, it is
        beneficial to consult an expert psychologist to eliminate the symptoms
        and step into a more comfortable life. In addition, I would like to
        remind you that this test is not diagnostic; but can help diagnose. Only
        a specialist psychologist can make the most accurate diagnosis. Now you
        can take the test and understand yourself better!
      </p>
      <button className="btn-start" onClick={() => dispatch({ type: "start" })}>
        Start
      </button>
    </div>
  );
}

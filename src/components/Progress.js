export default function Progress({ index, numQuestions, answer }) {
  return (
    <div className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p className="progress-text">
        Question{" "}
        <strong
          style={{
            color: "#fff",
            backgroundColor: "rgb(143, 122, 4)",
            padding: ".15rem",
            borderRadius: "5px",
          }}
        >
          {index + 1}
        </strong>{" "}
        / {numQuestions}
      </p>
    </div>
  );
}

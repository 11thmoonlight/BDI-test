import { Children, useState } from "react";

const questions = [
  "I feel discouraged about future",
  "I feel sad",
  "I feel like a failure",
  "I do not enjoy anymore",
  "I feel guilty",
  "I feel I am being punished",
  "I hate myself",
  "I blame myself for everything bad that happens",
  "I would kill myself if I had chance",
  "I cry all the time",
  "I feel irriated all the time",
  "I have lost all of my interest in other people",
  "I can not make descisions at all anymore",
  "I beleive that I look ugly",
  "I can not do any work at  all",
  "I wake up several hours earlier than I used to",
  "I am too tired to do anything",
  "I have no appetite  at all anymore",
  "I have lost more than fifteen pounds",
  "I am so worried about my physical problems",
  "I have lost interest in sex",
];

const results = [
  "These ups and downs are considered normal",
  "Mild mood disturbance",
  "Borderline clinical depression",
  "Moderate depression",
  "Severe depression",
  "Extreme depression",
];

export default function App() {
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  const [answers, setAnswers] = useState(0);

  function handleShowQuestions() {
    if (age > 13) setShow(true);
  }

  const message = "Please enter true informations";

  return (
    <div className="App">
      <Descriptions />
      <UserProfile
        show={show}
        onShow={handleShowQuestions}
        age={age}
        setAge={setAge}
      />
      {show &&
        questions.map((q, i) => (
          <Questions
            answers={answers}
            setAnswers={setAnswers}
            question={q}
            key={questions.at(i)}
          />
        ))}
      <Result answers={answers} setAnswers={setAnswers} />
    </div>
  );
}

function Descriptions() {
  return (
    <div className="description">
      <span className="items">
        <p>👧🏻 Age range</p>
        <p>above 13</p>
      </span>

      <span className="items">
        <p> 🔢 Number of questions</p>
        <p>21</p>
      </span>

      <span className="items">
        <p>⌚ Estimated time</p>
        <p>10 min</p>
      </span>
    </div>
  );
}

function UserProfile({ age, setAge, show, onShow }) {
  const [gender, setGender] = useState();
  return (
    <div>
      <label>Age</label>
      <input
        type="text"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <label>Gender</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option>Woman</option>
        <option>Man</option>
        <option>Others</option>
      </select>

      <button value={show} onClick={onShow}>
        confirm
      </button>
    </div>
  );
}

function Questions({ question, answers, setAnswers }) {
  const [result, setResult] = useState([]);

  return (
    <div>
      <div>
        <label>{question}</label>
        <select value={answers} onChange={(e) => setAnswers(e.target.value)}>
          <option value={0}>0</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>
    </div>
  );
}

function Result({ answers, setAnswers }) {
  return (
    <div>
      <button>Confirm</button>
    </div>
  );
}

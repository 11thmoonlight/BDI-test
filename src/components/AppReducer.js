import { useReducer } from "react";
import { Header } from "./Header";
import { Question } from "./Question";
import NextButton from "../NextButton";
import FinishScreen from "./FinishScreen";
import Progress from "./Progress";

const question = [
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "I do not feel sad",
      "I feel sad",
      "I am sad all the time and I can't snap out of it",
      "I am so sad or unhappy that I can't stand it",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I am not particularly discouraged about the future",
      "I feel discouraged about the future",
      "I feel I have nothing to look forward to",
      "I feel the future is hopeless and that things cannot improve",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "I do not feel like a failure",
      " I feel I have failed more than the average person",
      " As I look back on my life, all I can see is a lot of failures",
      "I feel I am a complete failure as a person",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I get as much satisfaction out of things as I used to",
      "I don't enjoy things the way I used to",
      "I don't get real satisfaction out of anything anymore",
      " I am dissatisfied or bored with everything",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't feel particularly guilty",
      " I feel guilty a good part of the time",
      " I feel quite guilty most of the time",
      " I feel guilty all of the time",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't feel I am being punished",
      "I feel I may be punished",
      " I expect to be punished",
      " I feel I am being punished",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't feel disappointed in myself",
      " I am disappointed in myself",
      " I am disgusted with myself",
      " I hate myself",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "I don't feel I am any worse than anybody else",
      "I am critical of myself for my weaknesses or mistakes",
      " I blame myself all the time for my faults",
      " I blame myself for everything bad that happens",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't have any thoughts of killing myself",
      " I have thoughts of killing myself, but I would not carry them out",
      " I would like to kill myself",
      " I would kill myself if I had the chance",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't cry any more than usual",
      " I cry more now than I used to",
      " I cry all the time now",
      "I used to be able to cry, but now I can't cry even though I want to",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I am no more irritated by things than I ever was",
      "I am slightly more irritated now than usual",
      "I am quite annoyed or irritated a good deal of the time",
      " I feel irritated all the time",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I have not lost interest in other people",
      " I am less interested in other people than I used to be",
      " I have lost most of my interest in other people",
      "I have lost all of my interest in other people",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I make decisions about as well as I ever could",
      " I put off making decisions more than I used to",
      "I have greater difficulty in making decisions more than I used to",
      " I can't make decisions at all anymore",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I don't feel that I look any worse than I used to",
      " I am worried that I am looking old or unattractive",
      " I feel there are permanent changes in my appearance that make me look unattractive",
      "I believe that I look ugly",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I can work about as well as before",
      "  It takes an extra effort to get started at doing something",
      "I have to push myself very hard to do anything",
      " I can't do any work at all",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "  I can sleep as well as usual",
      "  I don't sleep as well as I used to",
      "I wake up 1-2 hours earlier than usual and find it hard to get back to sleep",
      "I wake up several hours earlier than I used to and cannot get back to sleep",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "  I don't get more tired than usual",
      "  I get tired more easily than I used to",
      " I get tired from doing almost anything",
      " I am too tired to do anything",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " My appetite is no worse than usual",
      "  My appetite is not as good as it used to be",
      "  My appetite is much worse now",
      " I have no appetite at all anymore",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "  I haven't lost much weight, if any, lately",
      "  I have lost more than five pounds",
      " I have lost more than ten pounds",
      " I have lost more than fifteen pounds",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      " I am no more worried about my health than usual",
      "  I am worried about physical problems like aches, pains, upset stomach, or constipation",
      "  I am very worried about physical problems and it's hard to think of much else",
      " I am so worried about my physical problems that I cannot think of anything else",
    ],
  },
  {
    question: "Choose the one that suits you best from the suggestions below.",
    options: [
      "I have not noticed any recent change in my interest in sex",
      " I am less interested in sex than I used to be",
      " I have almost no interest in sex",
      " I have lost interest in sex completely",
    ],
  },
];

const result = [
  "😃These ups and downs are considered normal😃",
  "🙂Mild mood disturbance🙂",
  "😶Borderline clinical depression😶",
  "😢Moderate depression😢",
  "😔Severe depression😔",
  "😭Extreme depression😭",
];

const initialState = { index: 0, answer: null, points: 0, status: "initial" };

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, status: "start" };

    case "newAnswer":
      // let plus;
      // if (state.answer === null) {
      //   plus = action.payload;
      // } else if (state.answer !== null) {
      //   plus = state.answer - state.answer;
      // }
      return {
        ...state,
        answer: action.payload,
        // points: state.points + action.payload,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        points: state.points + state.answer,
        answer: null,
      };

    case "finish":
      return { ...state, status: "finished" };

    case "restart":
      return { ...initialState };

    default:
      throw new Error("Action unkown");
  }
}

export function AppReducer() {
  const [{ index, answer, points, status }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = question.length;

  return (
    <div>
      {status === "initial" && <Header dispatch={dispatch} />}
      {status === "start" && (
        <div className="qu-flex">
          {status === "finished" || (
            <>
              <Progress
                index={index}
                numQuestions={numQuestions}
                answer={answer}
              />
              <Question
                question={question.at(index)}
                dispatch={dispatch}
                answer={answer}
              />
            </>
          )}
          <NextButton
            dispatch={dispatch}
            answer={answer}
            index={index}
            numQuestions={numQuestions}
          />
        </div>
      )}

      {status === "finished" && (
        <FinishScreen points={points} dispatch={dispatch} result={result} />
      )}
    </div>
  );
}

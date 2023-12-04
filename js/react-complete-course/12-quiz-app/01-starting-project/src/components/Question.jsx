import ProgressBar from "./ProgressBar.jsx";
import Answers from "./Answers.jsx";
import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";

const answerTime = 100000;

export default function Question({ questonKey, onSelectAnswer }) {
  const handleSkipAnswer = useCallback(
    () => onSelectAnswer(null),
    [onSelectAnswer]
  );

  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  //whu isnt callback'ed?
  const handleSelectAnswer = useCallback(function (answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[questonKey].answers[0] === answer,
      });

      setTimeout(() => onSelectAnswer(answer), 2000);
    }, 1000);
  });

  let answerState = "";

  if (answer.selectedAnswer && answerState.isCorrect != null) {
    answerState = answerState.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer !== "") {
    answerState = "answered";
  }

  return (
    <div id="question">
      <ProgressBar timeLimit={answerTime} onTimeout={handleSkipAnswer} />
      <h2>{QUESTIONS[questonKey].text}</h2>
      <Answers
        answers={QUESTIONS[questonKey].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      ></Answers>
    </div>
  );
}

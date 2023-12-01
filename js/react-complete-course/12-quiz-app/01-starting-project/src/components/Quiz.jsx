import { useCallback, useState } from "react";
import Questions from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import ProgressBar from "./ProgressBar.jsx";

const answerTime = 10000;

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const currentQuestionIndex =
    answerState === "" ? answers.length : answers.length - 1;

  const quizIsOver = currentQuestionIndex === Questions.length;

  const handleSelectAnswer = useCallback(
    function (selectedAnswer) {
      setAnswers((prev) => [...prev, selectedAnswer]);
      setAnswerState("answered");

      setTimeout(() => {
        if (selectedAnswer === Questions[currentQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 2000);
    },
    [currentQuestionIndex, currentQuestionIndex]
  );

  if (quizIsOver) {
    return (
      <div id="summary">
        <img src={quizComplete} />
        <h2>Quiz complete.</h2>
      </div>
    );
  }

  const shuffledAnswers = [...Questions[currentQuestionIndex].answers].sort(
    (a, b) => Math.random() - 0.5
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  return (
    <div id="quiz">
      <div id="question">
        <ProgressBar
          key={`bar-${currentQuestionIndex}`}
          timeLimit={answerTime}
          onTimeout={handleSkipAnswer}
        />
        <h2>{Questions[currentQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((a, i) => {
            const isSelected = a === answers[currentQuestionIndex];
            let cssClasses = "";

            if (answerState === "answered" && isSelected)
              cssClasses = "selected";

            console.log("GoT THIS!");
            // prettier-ignore
            if (isSelected && (answerState === "correct" || answerState === "wrong")){
              cssClasses = answerState;
            }

            return (
              <li key={i} className="answer">
                <button
                  className={cssClasses}
                  onClick={() => handleSelectAnswer(a)}
                >
                  {a}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

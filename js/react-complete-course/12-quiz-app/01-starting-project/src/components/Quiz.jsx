import { useCallback, useState } from "react";
import Questions from "../questions.js";
import quizComplete from "../assets/quiz-complete.png";
import Question from "./Question.jsx";

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

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        questonKey={currentQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
      ></Question>
    </div>
  );
}

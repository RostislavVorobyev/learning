import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = answers.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((a, i) => {
        const isSelected = a === selectedAnswer;
        let cssClasses = "";

        if (answerState === "answered" && isSelected) cssClasses = "selected";

        // prettier-ignore
        if (isSelected && (answerState === "correct" || answerState === "wrong")){
        cssClasses = answerState;
      }
        return (
          <li key={i} className="answer">
            <button
              className={cssClasses}
              onClick={() => onSelect(a)}
              disabled={answerState !== ""}
            >
              {a}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

import { useState } from "react";

import QuizForm from "./QuizForm.jsx";
import Result from "./Result.jsx";

function Quiz({ title, icon, questions, handlePlayAgain }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const question = questions[currentIndex];

  const handleNextQuestion = () => {
    setIsError(false);
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 === questions.length) {
        setIsCompleted(true);
        return 0;
      }

      return prevIndex + 1;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isCheckingAnswer) {
      handleNextQuestion();
      setIsCheckingAnswer(false);

      if (userAnswer === question.answer) {
        setScore(score + 1);
      }
    } else {
      const formData = new FormData(e.currentTarget);
      const selectedAnswer = formData.get("option");

      if (!selectedAnswer) {
        setIsError(true);
        return;
      }

      setUserAnswer(selectedAnswer);
      setIsCheckingAnswer(true);
    }
  };

  return (
    <main className="mx-auto grid max-w-[1157px] px-6 pt-8 md:px-16 md:pt-12 xl:justify-start">
      {!isCompleted ? (
        <QuizForm
          handleSubmit={handleSubmit}
          currentIndex={currentIndex}
          questions={questions}
          question={question.question}
          options={question.options}
          isCheckingAnswer={isCheckingAnswer}
          answer={question.answer}
          isError={isError}
          userAnswer={userAnswer}
        />
      ) : (
        <Result
          score={score}
          title={title}
          icon={icon}
          length={questions.length}
          handlePlayAgain={handlePlayAgain}
        />
      )}
    </main>
  );
}
export default Quiz;

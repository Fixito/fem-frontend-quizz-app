import ProgressBar from "./ProgressBar.jsx";

function QuizHeader({ currentIndex, questions, question }) {
  return (
    <div className="grid gap-6 xl:items-start">
      <div className="grid gap-3 xl:gap-[27px]">
        <p className="text-subtlest text-body-sm-regular-italic">
          Question {currentIndex + 1} of {questions.length}
        </p>
        <h2 className="text-heading-md-medium">{question}</h2>
      </div>
      <ProgressBar max={questions.length} value={currentIndex + 1} />
    </div>
  );
}
export default QuizHeader;

import OptionList from "./OptionList.jsx";
import QuizHeader from "./QuizHeader.jsx";

function QuizForm({
  handleSubmit,
  currentIndex,
  questions,
  question,
  options,
  isCheckingAnswer,
  answer,
  isError,
  userAnswer,
}) {
  return (
    <form
      className="grid gap-10 xl:mx-auto xl:max-w-[1157px] xl:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <QuizHeader
        currentIndex={currentIndex}
        questions={questions}
        question={question}
      />
      <OptionList
        options={options}
        isCheckingAnswer={isCheckingAnswer}
        userAnswer={userAnswer}
        answer={answer}
        isError={isError}
      />
    </form>
  );
}
export default QuizForm;

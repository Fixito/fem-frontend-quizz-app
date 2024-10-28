import { clsx } from "clsx";

import Alert from "./Alert.jsx";
import Button from "./Button.jsx";

import { LETTERS } from "../constants.js";

function OptionList({
  answer,
  options,
  isCheckingAnswer,
  userAnswer,
  isError,
}) {
  return (
    <div className="grid gap-3 md:gap-8">
      <div className="grid gap-3">
        {options.map((option, index) => {
          return (
            <Option
              key={index}
              index={index}
              option={option}
              isCheckingAnswer={isCheckingAnswer}
              userAnswer={userAnswer}
              answer={answer}
            />
          );
        })}
      </div>
      <Button
        type="submit"
        label={isCheckingAnswer ? "next question" : "submit answer"}
      />
      {isError && <Alert />}
    </div>
  );
}

function Option({ index, option, isCheckingAnswer, userAnswer, answer }) {
  if (isCheckingAnswer) {
    const divStyle = clsx(
      "rounded-xl border-[3px] bg-idle hover:cursor-pointer flex justify-between items-center shadow-surface-default",
      userAnswer === answer && option === answer
        ? "border-success"
        : userAnswer === option && answer !== option
          ? "border-danger"
          : "border-transparent",
    );

    const spanStyle = clsx(
      "text-heading-sm-medium grid aspect-square w-10 place-items-center rounded-md",
      userAnswer === answer && option === answer
        ? "bg-success text-neutral-inverse"
        : userAnswer === option && answer !== option
          ? "bg-danger text-neutral-inverse"
          : "text-subtle bg-subtle",
    );

    return (
      <div className={divStyle} tabIndex={index}>
        <label
          htmlFor={index}
          className="flex cursor-[inherit] items-center gap-4 p-3"
        >
          <span className={spanStyle}>{LETTERS[index]}</span>
          <p className="text-heading-sm-medium text-subtle">{option}</p>
          {option === answer && (
            <img src="/assets/images/icon-correct.svg" alt="" />
          )}
        </label>
        <input
          type="radio"
          name="option"
          id={index}
          value={option}
          className="sr-only"
        />
      </div>
    );
  }

  return (
    <div className="group rounded-xl border-[3px] border-transparent bg-idle shadow-surface-default hover:cursor-pointer has-[:checked]:border-[3px] has-[:checked]:border-brand md:rounded-3xl">
      <label
        htmlFor={index}
        className="flex cursor-[inherit] items-center gap-4 p-3"
      >
        <span className="text-heading-sm-medium grid aspect-square w-10 place-items-center rounded-md bg-subtle text-subtle group-hover:bg-brand-hovered group-hover:text-brand group-has-[:checked]:bg-brand-hovered group-has-[:checked]:text-brand md:rounded-xl">
          {LETTERS[index]}
        </span>
        <p className="text-heading-sm-medium">{option}</p>
      </label>
      <input
        type="radio"
        name="option"
        id={index}
        value={option}
        className="sr-only"
      />
    </div>
  );
}

export default OptionList;

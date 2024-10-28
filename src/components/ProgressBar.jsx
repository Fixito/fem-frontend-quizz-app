import { useId } from "react";

function ProgressBar({ max, value }) {
  const progressId = useId();

  return (
    <>
      <label htmlFor={progressId} className="sr-only">
        Quiz progress
      </label>
      <div>
        <progress
          min="0"
          max={max}
          value={value}
          className="h-4 w-full rounded-full border-4 border-inverse progress-unfilled:bg-idle progress-filled:rounded-full progress-filled:bg-brand"
        >
          {value} out of {max}
        </progress>
      </div>
    </>
  );
}
export default ProgressBar;

import Button from "./Button.jsx";

function Result({ icon, title, length, score, handlePlayAgain }) {
  return (
    <div className="grid gap-10 md:gap-16 xl:grid-cols-2">
      <p className="text-heading-lg-regular">
        Quiz completed
        <br />
        <span className="text-heading-lg-bold">You scored...</span>
      </p>
      <div className="grid gap-3 md:gap-8">
        <div className="grid gap-4 rounded-xl bg-idle p-8 md:gap-10 md:rounded-3xl xl:p-12">
          <div className="flex items-center justify-center gap-4">
            <img src={icon} alt="" />
            <p className="text-heading-sm-medium py-[0.875rem]">{title}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-display">{score}</p>
            <p className="text text-subtlest text-body-md-regular">
              out of {length}
            </p>
          </div>
        </div>
        <Button type="button" label="play again" onClick={handlePlayAgain} />
      </div>
    </div>
  );
}
export default Result;

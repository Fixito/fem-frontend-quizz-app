function Alert() {
  return (
    <div
      role="alert"
      aria-live="polite"
      className="text-body-md-regular flex h-[2.5rem] items-center gap-2 justify-self-center text-danger"
    >
      <img src="assets/images/icon-error.svg" alt="" className="" />
      Please select an answer
    </div>
  );
}
export default Alert;

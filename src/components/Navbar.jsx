import { useThemeContext } from "../ThemeContext.jsx";

function Navbar({ quiz }) {
  const { theme, handleToggleDarkMode } = useThemeContext();

  const style = quiz ? "flex justify-between" : "h-10 flex justify-end";

  return (
    <header className="mx-auto max-w-[1157px] px-6 py-4 md:px-16 md:py-10">
      <div className={style}>
        {quiz && (
          <div className="flex items-center gap-4">
            <img src={quiz.icon} alt="" />
            <h1 className="text-heading-sm-medium">{quiz.title}</h1>
          </div>
        )}
        <label
          className="inline-flex cursor-pointer items-center gap-2 md:gap-4"
          aria-label="Toggle dark mode"
        >
          <span>
            <img src="assets/images/icon-sun-dark.svg" alt="" />
          </span>
          <input
            type="checkbox"
            value=""
            className="peer sr-only"
            onChange={handleToggleDarkMode}
            checked={theme === "dark"}
          />
          <div className="peer relative h-6 w-11 rounded-full bg-brand after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-toggle after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand peer-focus:ring-offset-2 rtl:peer-checked:after:-translate-x-full"></div>
          <span>
            <img src="assets/images/icon-moon-dark.svg" alt="" />
          </span>
        </label>
      </div>
    </header>
  );
}
export default Navbar;

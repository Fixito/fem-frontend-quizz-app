function Home({ quizzes, handleSelectQuiz }) {
  return (
    <main className="mx-auto grid max-w-[1157px] gap-10 px-6 pt-8 md:gap-16 md:px-16 md:pt-12 xl:grid-cols-2">
      <header>
        <h1 className="text-heading-lg-regular">
          Welcome to the
          <br />
          <span className="text-heading-lg-bold">Frontend Quiz!</span>
        </h1>
        <p className="text-subtlest text-body-sm-regular-italic mt-4 xl:mt-12">
          Pick a subject to get started
        </p>
      </header>

      <div className="grid gap-3 md:gap-6">
        {quizzes.map((quiz) => {
          const { title, icon } = quiz;

          return (
            <button
              key={title}
              type="button"
              className="text-heading-sm-medium flex items-center gap-4 rounded-xl bg-idle p-3 shadow-surface-default md:rounded-3xl"
              onClick={() => handleSelectQuiz(quiz)}
            >
              <img
                src={icon}
                alt=""
                className="rounded-md"
                aria-hidden="true"
              />
              {title}
            </button>
          );
        })}
      </div>
    </main>
  );
}
export default Home;

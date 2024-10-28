import { useState } from "react";

import { quizzes } from "../data.json";

import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  const [quiz, setQuiz] = useState(null);

  const handlePlayAgain = () => {
    setQuiz(null);
  };

  const handleSelectQuiz = (selectedQuiz) => {
    setQuiz(selectedQuiz);
  };

  if (!quiz) {
    return (
      <>
        <Navbar />
        <Home quizzes={quizzes} handleSelectQuiz={handleSelectQuiz} />
      </>
    );
  }

  return (
    <>
      <Navbar quiz={{ icon: quiz.icon, title: quiz.title }} />
      <Quiz {...quiz} handlePlayAgain={handlePlayAgain} />
    </>
  );
}
export default App;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./quizzes.css";
import { quizzes } from "../../../mock-data/quizzes";

const Quizzes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const topic = queryParams.get("topic");

  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const selectedQuiz = quizzes[topic];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const submitQuiz = () => {
    window.alert("Quiz submitted");
  };

  return (
    <div className="quizzes_page">
      <h1>{topic} Quizzes</h1>
      <div className="timer">Time Left: {formatTime(timeLeft)}</div>

      {selectedQuiz ? (
        selectedQuiz.map((question, index) => (
          <div key={index} className="quiz">
            <div className="question">
              <p className="quiz_question_head">{question.question}</p>
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="option">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="no_quiz_warning">No quizzes available for this topic.</p>
      )}
      <button className="submit_button" onClick={submitQuiz}>
        Submit Quiz
      </button>
    </div>
  );
};

export default Quizzes;

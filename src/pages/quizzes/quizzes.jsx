import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosInstance from "../../axios/axiosInstance"; // Make sure this points to your axios instance
import "./quizzes.css";
import { useSelector } from "react-redux";

const Quizzes = () => {
  const location = useLocation();
  const { user } = useSelector((state) => state.user);
  const queryParams = new URLSearchParams(location.search);

  const topic = queryParams.get("topic");

  const [level, setLevel] = useState("");
  const [questions, setQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [loading, setLoading] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(
        `/generate-question?topic=${topic}&level=${level}`
      );

      setQuestions(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (questions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [questions]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleAnswerChange = (questionIndex, selectedOption) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedOption,
    }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      console.log(
        selectedAnswers[index],
        question.answer,
        "selected and qs ans"
      );
      if (selectedAnswers[index] === question.answer) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const submitQuiz = async () => {
    const userScore = calculateScore();
    setScore(userScore);
    window.alert(
      `Quiz submitted. Your score: ${userScore}/${questions.length}`
    );

    try {
      await axiosInstance.post("/save-score", {
        topic,
        level,
        score: userScore,
        user: user._id,
      });
    } catch (error) {
      console.error("Error saving score:", error);
    }

    window.location.href = "/profile";
  };

  return (
    <div className="quizzes_page">
      <h1>{topic} Quizzes</h1>
      {questions.length === 0 ? (
        <div>
          <div className="form-group">
            <label>Select Level:</label>
            <select
              className="form-control"
              value={level}
              onChange={handleLevelChange}
            >
              <option value="">Select a level</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <button
            className="btn btn-primary mt-3"
            onClick={fetchQuestions}
            disabled={!level}
          >
            Start Quiz
          </button>
          {loading && <p>Loading questions...</p>}
        </div>
      ) : (
        <div>
          <div className="timer">Time Left: {formatTime(timeLeft)}</div>
          {questions.map((question, index) => (
            <div key={index} className="quiz">
              <div className="question">
                <p className="quiz_question_head">{question.question}</p>
                {question.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="option">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={selectedAnswers[index] === option}
                      onChange={() => handleAnswerChange(index, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button className="submit_button" onClick={submitQuiz}>
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quizzes;

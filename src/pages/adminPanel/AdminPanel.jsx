import { useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import "./AdminPanel.css";
import { subjects } from "../../mock-data/subjects";

const AdminPanel = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [level, setLevel] = useState("easy");
  const [subject, setSubject] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = { question, options, answer, level, subject };

    if (newQuestion.subject === null) {
      window.alert("Please Select a Subject");
    }
    try {
      await axiosInstance.post("http://localhost:3000/questions", newQuestion);
      alert("Question added successfully!");
      // Clear form
      setQuestion("");
      setOptions(["", "", "", ""]);
      setAnswer("");
      setLevel("easy");
      setSubject(subjects[0]);
    } catch (error) {
      console.error("Error adding question:", error);
      alert("Error adding question");
    }
  };

  return (
    <div className="container mt-5">
      <button
        type="submit"
        className="btn btn-primary mt-3 w-100"
        onClick={() => (window.location.href = "/all-questions")}
      >
        Show All Questions
      </button>
      <div className="card shadow-lg p-4">
        <h2 className="card-title text-center mb-4">Add a New Question</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Question</label>
            <input
              type="text"
              className="form-control"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Options</label>
            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                className="form-control mb-2"
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
            ))}
          </div>
          <div className="form-group">
            <label>Answer</label>
            <input
              type="text"
              className="form-control"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Level</label>
            <select
              className="form-control"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <select
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value={null}>Select One</option>
              {subjects.map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPanel;

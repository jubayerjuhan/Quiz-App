import { useEffect, useState } from "react";
import axiosInstance from "../../axios/axiosInstance";
import "./QuestionsTable.css";

const QuestionsTable = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/questions"
        );
        setQuestions(response.data.questions);
        console.log(response, "response");
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Questions</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Options</th>
              <th>Answer</th>
              <th>Level</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{question.question}</td>
                <td>
                  <ul>
                    {question.options.map((option, idx) => (
                      <li key={idx}>{option}</li>
                    ))}
                  </ul>
                </td>
                <td>{question.answer}</td>
                <td>{question.level}</td>
                <td>{question.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionsTable;

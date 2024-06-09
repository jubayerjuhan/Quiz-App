import { useState, useEffect } from "react";
import axiosInstance from "../../axios/axiosInstance"; // Make sure this points to your axios instance
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    // Fetch user info

    // Fetch quiz results
    const fetchQuizResults = async () => {
      try {
        const response = await axiosInstance.get(`/get-score?user=${user._id}`);
        setQuizResults(response.data);
      } catch (error) {
        console.error("Error fetching quiz results:", error);
      }
    };

    fetchQuizResults();
  }, [user]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">User Information</h2>

              <div>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Department:</strong> {user.department}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Quiz Results</h2>
              {quizResults.length > 0 ? (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Topic</th>
                      <th>Level</th>
                      <th>Score</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizResults.map((result, index) => (
                      <tr key={index}>
                        <td>{result.subject}</td>
                        <td>{result.level}</td>
                        <td>{result.score}</td>
                        <td>{new Date(result.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No quiz results available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

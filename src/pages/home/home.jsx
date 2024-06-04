// src/Home.jsx
import "./home.css";

const Home = () => {
  const search = () => {
    console.log("Searching for:");
  };

  const loadTopic = (topic) => {
    console.log(`Loading quizzes for ${topic}`);

    // redirect to quizzes page
    window.location.href = `/quizzes?topic=${topic}`;
  };

  return (
    <div className="home_page">
      <div className="header">
        <div className="header-info">
          <div className="info left">Welcome, Student066</div>
          <div className="info right">Tuesday, 16 July, 2024</div>
        </div>
        <h1>QUIZPOINT</h1>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          id="search-input"
          placeholder="Enter a topic"
        />
        <button className={"search-button"} onClick={search}>
          Search
        </button>
      </div>

      <h2 className="home_subject_main_header">Explore By Topics</h2>

      <div className="topics-container">
        <div className="topics-column">
          <h2>CSE</h2>
          <button className="topic-button" onClick={() => loadTopic("DSA")}>
            DSA
          </button>
          <button className="topic-button" onClick={() => loadTopic("OOP")}>
            OOP
          </button>
          <button className="topic-button" onClick={() => loadTopic("DBMS")}>
            DBMS
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Web Technologies")}
          >
            Web Technologies
          </button>
        </div>
        <div className="topics-column">
          <h2>EEC</h2>
          <button
            className="topic-button"
            onClick={() => loadTopic("Circuit Analysis and Design")}
          >
            Circuit Analysis and Design
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Power Systems")}
          >
            Power Systems
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Digital Signal Processing")}
          >
            Digital Signal Processing
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Renewable Energy")}
          >
            Renewable Energy
          </button>
        </div>
        <div className="topics-column">
          <h2>BBA</h2>
          <button
            className="topic-button"
            onClick={() => loadTopic("Marketing Strategies")}
          >
            Marketing Strategies
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Financial Management")}
          >
            Financial Management
          </button>
          <button className="topic-button" onClick={() => loadTopic("HRM")}>
            HRM
          </button>
          <button
            className="topic-button"
            onClick={() => loadTopic("Supply Chain")}
          >
            Supply Chain
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import "./home.css";

const subjects = [
  "DSA",
  "Circuit Analysis and Design",
  "Marketing Strategies",
  "OOP",
  "Power Systems",
  "Financial Management",
  "DBMS",
  "Digital Signal Processing",
  "HRM",
  "Web Technologies",
  "Renewable Energy",
  "Supply Chain",
];

const Home = () => {
  const todaysDate = moment().format("dddd, DD MMMM, YYYY");
  const { user } = useSelector((state) => state.user);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = subjects.filter((subject) =>
        subject.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    loadTopic(suggestion);
  };

  const loadTopic = (topic) => {
    console.log(`Loading quizzes for ${topic}`);
    // redirect to quizzes page
    window.location.href = `/quizzes?topic=${topic}`;
  };

  const search = () => {
    if (searchTerm.length > 0) {
      loadTopic(searchTerm);
    }
  };

  return (
    <div className="home_page" ref={dropdownRef}>
      <div className="header">
        <div className="header-info">
          <div className="info left">Welcome, {user.name}</div>
          <div className="logout">
            <p className="info right">{todaysDate}</p>
            <button type="submit">Logout</button>
          </div>
        </div>

        <h1>QUIZPOINT</h1>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="text"
          id="search-input"
          placeholder="Enter a topic"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="search-button" onClick={search}>
          Search
        </button>
        {suggestions.length > 0 && (
          <div className="autocomplete-dropdown">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="autocomplete-item"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        )}
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

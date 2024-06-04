// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/home";
import Quizzes from "./pages/home/quizzes/quizzes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
      </Routes>
    </Router>
  );
}

export default App;

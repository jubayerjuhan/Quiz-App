// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Quizzes from "./pages/quizzes/quizzes";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";

import "./App.css";
import PrivateRoute from "./Components/PrivateRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/quizzes"
          element={
            <PrivateRoute>
              <Quizzes />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

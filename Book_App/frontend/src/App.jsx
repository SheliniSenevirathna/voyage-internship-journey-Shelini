// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import BooksPage from "./pages/BooksPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

      try {
        const res = await fetch(`${API_URL}/api/test`);
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.error("Error fetching API:", err);
      }
    };

    fetchMessage();
  }, []);

  return (
    <Router>
      <div>
        {/* Optional: display API test message */}
        {message && <p>{message}</p>}

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/books"
            element={
              <ProtectedRoute>
                <BooksPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user?.email}!</p>
      <button onClick={() => navigate("/books")}>Go to Books</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;

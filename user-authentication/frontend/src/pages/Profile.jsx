import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p><strong>ID:</strong> {user.id}</p>
          {user.username && <p><strong>Username:</strong> {user.username}</p>}
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Profile;

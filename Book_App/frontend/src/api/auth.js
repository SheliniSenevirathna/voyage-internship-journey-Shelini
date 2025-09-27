import axios from "axios";

const API = "http://localhost:5000"; // backend URL

export const registerUser = async (userData) => {
  return axios.post(`${API}/users`, userData, {
    headers: { "Content-Type": "application/json" },
  });
};

import axios from "axios";

const API = axios.create({
  baseURL: "https://real-time-note-app-1.onrender.com",
});

export default API;

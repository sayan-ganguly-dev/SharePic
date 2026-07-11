import axios from "axios";

const api = axios.create({
    baseURL: "https://sharepic-backend.onrender.com",
});

export default api;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import { saveToken, saveUser } from "../utils/auth";
import "../style/auth.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/api/auth/login", formData);

      // Save JWT Token
      saveToken(res.data.token);

      // Save User Details
      saveUser(res.data.user);

      alert("Login Successful");

      navigate("/feed");
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
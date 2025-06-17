import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const { setUser, setToken } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      setUser(res.data.user);
      setToken(res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="product-details-container" style={{ maxWidth: 400 }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          required
          onChange={e => setName(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", marginBottom: 12, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          required
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", marginBottom: 18, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
        />
        {error && <div style={{ color: "#b91c1c", marginBottom: 10 }}>{error}</div>}
        <button type="submit" className="view-btn" style={{ width: "100%" }}>Sign Up</button>
      </form>
      <div style={{ marginTop: 18, textAlign: "center" }}>
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
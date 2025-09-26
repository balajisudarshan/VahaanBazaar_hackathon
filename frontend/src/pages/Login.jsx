import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL; // e.g., http://localhost:5000

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      // Save JWT token to localStorage
      localStorage.setItem("token", res.data.token);

      // Optionally save user info
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");
      // Redirect or navigate to dashboard
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err.response);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleLogin}>
        <h1>Vahaan Bazaar</h1>
        <p className="subTitle">Sign in to your account</p>

        {error && <p className="errorMessage">{error}</p>}

        <div className="row">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="row">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="footerText">
          Don't have an account? <span className="link">Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

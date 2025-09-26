import React from "react";
import "./styles/Login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <form>
        <h1>Vahaan Bazaar</h1>
        <p className="subTitle">Sign in to your account</p>
        <div className="row">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="row">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button>
        <p className="footerText">
          Don't have an account? <span className="link">Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

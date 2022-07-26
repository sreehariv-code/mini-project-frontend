import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="login-form">
        <h1>Login</h1>

        <form className="form-container">
          <div className="email-container">
            <input type="email" required placeholder="Enter your email" />
          </div>
          <div className="password-container">
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className="button-section">
            <button type="submit">Login</button>
            <div>
              <p className="user-direc">
                New to the Library? <Link to="/signup">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

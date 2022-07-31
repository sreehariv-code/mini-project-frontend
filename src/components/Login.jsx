import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/UserAuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  //Login function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };
  return (
    <div className="login-page-container">
      <div className="login-form">
        <h1>Login</h1>
        {error && <div className="error-alert">{error}</div>}
        <form onSubmit={handleLogin} className="form-container">
          <div className="email-container">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="password-container">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Enter your password"
            />
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

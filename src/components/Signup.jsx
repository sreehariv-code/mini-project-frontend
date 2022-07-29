import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { UserAuth } from "../context/UserAuthContext";
const SignUp = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();
    try {
      await createUser(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login-page-container">
      <div className="login-form">
        <h1>Welcome</h1>
        {error && <div className="signup-error">{error}</div>}
        <form className="form-container" onSubmit={handleSubmit}>
          {/* <div className="username-container">
            <label>Username</label>
            <input
              type="text"
              required
              placeholder="eg:John Doe"
              name="username"
              onChange={(e) => setUser(e.target.value)}
            />
          </div> */}
          <div className="email-container">
            <label>Email</label>
            <input
              type="email"
              placeholder="eg.johndoe123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.target)}
            />
          </div>
          <div className="button-section">
            <button type="submit">Register</button>
            <div>
              <p className="user-direc">
                Already have an account?
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

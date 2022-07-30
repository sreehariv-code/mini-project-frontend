import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { UserAuth } from "../context/UserAuthContext";

const SignUp = () => {
  const [profile, setProfile] = useState({
    emaiil: "",
    username: "",
    uuid: "",
  });
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser, user } = UserAuth();
  // const elementArray = [];

  const handleSubmit = async (e) => {
    setError("");
    e.preventDefault();

    try {
      await createUser(email, password);
      navigate("/");

      console.log(elementArray);
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
          <div className="username-container">
            <label>Username</label>
            <input
              type="text"
              required
              placeholder="eg:John Doe"
              name="username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="email-container">
            <label>Email</label>
            <input
              required
              type="email"
              placeholder="eg.johndoe123@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              required
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
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

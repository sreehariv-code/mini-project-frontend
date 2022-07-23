import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  //States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  //States for toggling b/w login component & Signup component
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  //handle name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  //handle email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
    console.log(email);
  };

  //handle password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  const handleLogin = (e) => {
    //prevent page reload
    e.preventDefault();
    navigate("/");
  };
  //Login component
  const Login = () => {
    return (
      <div className="login-form">
        <h1>{isLoginPage ? "Login" : "Welcome"}</h1>
        <form className="form-container" onSubmit={handleLogin}>
          <div className="email-container">
            <input
              type="email"
              required
              placeholder="Enter your email"
              // value={email}
              // onChange={handleEmail}
            />
          </div>
          <div className="password-container">
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className="button-section">
            <button type="submit">Login</button>
            <div>
              <p className="user-direc">
                New to the Library?{" "}
                <a
                  onClick={() => {
                    setIsLoginPage((prevState) => !prevState);
                  }}
                >
                  Register
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  };

  //signup component
  // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const SignUp = () => {
    return (
      <div className="login-form">
        <h1>{isLoginPage ? "Login" : "Welcome"}</h1>
        <form className="form-container">
          <div className="username-container">
            <label>Username</label>
            <input type="text" required placeholder="eg:John Doe" />
          </div>
          <div className="email-container">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="eg.johndoe123@gmail.com"
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input type="password" required placeholder="Enter your password" />
          </div>
          <div className="button-section">
            <button type="submit">Register</button>
            <div>
              <p className="user-direc">
                Already have an account?
                <a
                  onClick={() => {
                    setIsLoginPage((prevState) => !prevState);
                  }}
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <div className="login-page-container">
      {isLoginPage ? <Login /> : <SignUp />}
    </div>
  );
};

export default LoginPage;

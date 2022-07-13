import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

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
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="password-container">
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
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
  const SignUp = () => {
    return (
      <div className="login-form">
        <h1>{isLoginPage ? "Login" : "Welcome"}</h1>
        <form onSubmit={handleLogin}>
          <div className="username-container">
            <label>Username</label>
            <input
              type="email"
              name="email"
              required
              placeholder="eg:John Doe"
            />
          </div>
          <div className="email-container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="eg.johndoe123@gmail.com"
            />
          </div>
          <div className="password-container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
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

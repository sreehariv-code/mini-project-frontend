import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";
import { UserAuth } from "../../context/UserAuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout } = UserAuth();
  const [sidebar, setSidebar] = useState(false); //button state
  // console.log(sidebar);
  // const [btnActive, setBtnActive] = useState(false);
  // console.log(sidebar, btnActive);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("Your are Logged out");
    } catch (error) {
      console.log(error.message);
    }
  };

  const toggleSideNavbar = () => {
    // setBtnActive((prevState) => !prevState);
    setSidebar((prevState) => !prevState);
  };
  const sidenavState = () => {
    return sidebar ? "nav-links active" : "nav-links";
  };
  return (
    <nav className="navbar">
      <div className="brand-name">
        <Link to="/">
          <h1>DigiLib</h1>
        </Link>
      </div>
      {/*Hamburger Menu*/}
      <div
        className={sidebar ? "hamburger-button active" : "hamburger-button "}
        onClick={toggleSideNavbar}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/*<HamburgerButton sidebar={sidebar} setSidebar={setSidebar} />*/}
      <div className={sidenavState()}>
        <Link onClick={toggleSideNavbar} to="/">
          Home
        </Link>
        <Link onClick={toggleSideNavbar} to="/login">
          Login
        </Link>
        <Link onClick={toggleSideNavbar} to="/search">
          Search
        </Link>
        <Link onClick={toggleSideNavbar} to="/profile">
          Profile
        </Link>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

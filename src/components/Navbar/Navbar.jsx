import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";
import { UserAuth } from "../../context/UserAuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { logout, user } = UserAuth();
  const [sidebar, setSidebar] = useState(false); //button state
  // console.log(sidebar);
  // const [btnActive, setBtnActive] = useState(false);
  // console.log(sidebar, btnActive);

  const handleLogout = async () => {
    try {
      setSidebar(false);
      await logout();
      navigate("/");
      console.log("Your are Logged out");
      console.log(user);
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

  const sideBarFalse = () => setSidebar(false);

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
        <Link onClick={sideBarFalse} to="/home">
          Home
        </Link>
        {!user.uid && (
          <Link onClick={sideBarFalse} to="/">
            Login
          </Link>
        )}
        <Link onClick={sideBarFalse} to="/search">
          Search
        </Link>
        <Link onClick={sideBarFalse} to="/profile">
          Profile
        </Link>
        {user.uid && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  console.log(sidebar);
  const toggleSideNavbar = () => {
    setSidebar((prevState) => !prevState);
  };
  const sidenavState = () => {
    return sidebar ? "nav-links active" : "nav-links";
  };
  return (
    <nav className="navbar">
      <div className="brand-name">
        <h1>DigiLib</h1>
      </div>
      <div className="hamburger-button" onClick={toggleSideNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/*<HamburgerButton sidebar={sidebar} setSidebar={setSidebar} />*/}
      <div className={sidenavState()}>
        <Link onClick={toggleSideNavbar} to="/">
          Home
        </Link>
        <Link onClick={toggleSideNavbar} to="/about">
          About
        </Link>
        <Link onClick={toggleSideNavbar} to="/">
          Home
        </Link>
        <Link onClick={toggleSideNavbar} to="/">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

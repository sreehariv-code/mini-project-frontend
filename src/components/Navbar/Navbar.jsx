import React from "react";
import { Link } from "react-router-dom";
import HamburgerButton from "../HamburgerButton/HamburgerButton";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand-name">
        <h1>DigiLib</h1>
      </div>
      <div className="nav-links">
        <HamburgerButton />
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;

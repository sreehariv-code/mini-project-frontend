import { useContext, useState } from "react";
import userData from "./data/userData";
import { Link } from "react-router-dom";

import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SinglePageBook from "./components/SinglePageBook/SinglePageBook";
import { Routes, Route, Outlet } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { DataContext } from "./utils/DataContext";

function App() {
  // console.log(userData);
  // window.onscroll = function (e) {
  //   console.log(window.scrollY);
  // };
  const { bookData } = useContext(DataContext);
  // console.log(bookData);
  const Header = () => {
    return (
      <div className="navbar">
        <div className="brand-name">
          <Link to="/login">
            <h1>DigiLib</h1>
          </Link>
        </div>
      </div>
    );
  };
  const LayoutTwo = () => {
    return (
      <>
        <Header />
        <Outlet className="outlet" />
      </>
    );
  };
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet className="outlet" />
      </>
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route element={<HomePage />} path="/home" exact />
            <Route element={<SearchPage />} path="/search" />
            <Route element={<SinglePageBook />} path="/book/:id" />
            <Route element={<ProfilePage />} path="/profile" />
          </Route>
        </Route>
        <Route element={<LayoutTwo />}>
          <Route element={<Login />} path="/" />
          <Route element={<Signup />} path="/signup" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

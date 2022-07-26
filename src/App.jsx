import { useState } from "react";
import userData from "./data/userData";
import { DataProvider } from "./utils/DataContext";
import SearchPage from "./pages/SearchPage/SearchPage";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  // console.log(userData);
  // window.onscroll = function (e) {
  //   console.log(window.scrollY);
  // };
  return (
    <DataProvider>
      <div className="App">
        <Navbar />
        <div className="main-container">
          <Routes>
            <Route element={<HomePage />} path="/" exact />
            <Route element={<SearchPage />} path="/search" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;

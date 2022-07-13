import { useState } from "react";
import userData from "./data/userData";
import { DataProvider } from "./utils/DataContext";
import AboutPage from "./pages/AboutPage/AboutPage";
import "./App.css";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log(userData);
  // window.onscroll = function (e) {
  //   console.log(window.scrollY);
  // };
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route element={<HomePage />} path="/" exact />
              <Route element={<AboutPage />} path="/about" />
              <Route element={<LoginPage />} path="/login" />
            </Routes>
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

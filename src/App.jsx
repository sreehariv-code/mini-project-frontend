import { useState } from "react";
import { DataProvider } from "./utils/DataContext";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Navbar />
          <div className="main-container">
            <Routes>
              <Route element={<HomePage />} path="/" exact />
            </Routes>
          </div>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

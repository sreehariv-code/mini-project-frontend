import { useState } from "react";
import { DataProvider } from "./utils/DataContext";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <HomePage />
      </div>
    </DataProvider>
  );
}

export default App;

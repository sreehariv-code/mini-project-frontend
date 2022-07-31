import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "./context/UserAuthContext";
import { DataProvider } from "./utils/DataContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);

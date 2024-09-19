import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";
import "./index.css";

// Extra react imports for Routes
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Set some default axios properties
axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] = "application/json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* /* is a catch all route */}
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

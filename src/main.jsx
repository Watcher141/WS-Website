import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log("✅ React app is initializing..."); // Debug log

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
    <ToastContainer />
  </HashRouter>
);

console.log("✅ React app has been mounted!"); // Debug log

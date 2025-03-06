import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter } from "react-router-dom"; // Change this line
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>  {/* Change BrowserRouter to HashRouter */}
    <App />
    <ToastContainer />
  </HashRouter>
);

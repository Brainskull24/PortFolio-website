import React from "react";
import ReactDOM from "react-dom/client";  // Note: '/client' import here
import App from "./App";
import "./index.css"; // Assuming you have a global CSS file
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

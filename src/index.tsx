import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Root container not found. Make sure there's a div with id='root' in your index.html."
  );
}

const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

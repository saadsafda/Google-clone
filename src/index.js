import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateContextProvider } from "./contexts/StateContextProvider";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <StateContextProvider>
      <Router>
        <App />
      </Router>
    </StateContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalContext from "./Context/GlobalState";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalContext>
        <App />
      </GlobalContext>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();

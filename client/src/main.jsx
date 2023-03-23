import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import axios from "axios"

// axios.defaults.baseURL = "http://localhost:3001"
axios.defaults.baseURL = "https://pidogs-production-41b4.up.railway.app/"

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


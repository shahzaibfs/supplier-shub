import React from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import globalStore from "./redux/store";
import "./styles/css/index.css";
import "./styles/App.less";

window.process = {};

const root = document.getElementById("root");

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={globalStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

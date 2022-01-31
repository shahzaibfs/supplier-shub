import React from "react";
import reactDom from "react-dom";
import { App } from "./View/index";
import {BrowserRouter} from "react-router-dom"
import "./Assets/css/index.css";

const root = document.getElementById("root");

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  root
);

import React from "react";
import reactDom from "react-dom";
import { App } from "./View/index";
import {BrowserRouter} from "react-router-dom"
import "./Assets/css/index.css";
import { Provider } from 'react-redux'
import storee from "./Application/store/index";


const root = document.getElementById("root");

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={storee}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

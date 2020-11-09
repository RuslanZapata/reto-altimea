import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/Home/Home";
import DetailPage from "./pages/Detail/Detail";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/detail">
        <DetailPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

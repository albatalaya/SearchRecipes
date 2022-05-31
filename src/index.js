import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Details from "./Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <header>
      <Link to="/">
        <img
          id="logo"
          src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png"
        ></img>
      </Link>
    </header>
    <Routes>
      <Route path="/details/:id" element={<Details />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

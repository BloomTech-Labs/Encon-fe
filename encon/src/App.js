import React from "react";
import "./App.scss";
import { Login } from "./components/LogIn.js";
import { Nav } from "./components/Nav.js";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/Landing-Page";
import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        <LandingPage />
        <Calculator />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
};

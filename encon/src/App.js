import React from "react";
import "./App.scss";

import './styles/login.scss';
import Login from './components/LogIn.js'
function App() {
  return (
    <div className="App">
      <Login/>

import { Nav } from "./components/Nav.js";
import { Route } from "react-router-dom";
import { LandingPage } from "./components/Landing-Page";
import { Calculator } from "./components/Calculator";

export const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route path="/">
        <LandingPage />
      </Route>
      <Calculator />
      <p>encon wow</p>

    </div>
  );
};

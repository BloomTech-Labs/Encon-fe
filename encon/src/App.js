import React from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Navigation } from "./components/Navigation.js";
import { LandingPage } from "./components/Landing-Page";
import { LogoHeader } from "./components/Logo-Header";
import { DesktopView } from "./components/Desktop-View";
import MediaQuery from "react-responsive";
import { RegisterDesktop } from "./components/Desktop-Register";
import { LogInDesktop } from "./components/Desktop-LogIn";
const App = () => {
  return (
    <div className="App">
      <Navigation />
      <LogoHeader />
      <Route exact path="/">
        <MediaQuery minDeviceWidth={1025}>
          <DesktopView />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1025}>
          <LandingPage />
        </MediaQuery>
      </Route>
      <Route path="/login">
        <LogInDesktop />
      </Route>
      <Route path="/register">
        <RegisterDesktop />
      </Route>
    </div>
  );
};

export default App;

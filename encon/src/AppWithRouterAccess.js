import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
// import Home from './Home';
// import Login from './Login';
// import Protected from './Protected';
import config from "./App.Config.js";
import { Navigation } from "./components/mobile/Navigation.js";
import { LandingPage } from "./components/mobile/Landing-Page.js";
import { LogoHeader } from "./components/mobile/Logo-Header.js";
import { DesktopView } from "./components/desktop/Desktop-View.js";
import MediaQuery from "react-responsive";
import { UserContext } from "./context/UserContext.js";
import { DesktopRegister } from "./components/desktop/Desktop-Register";
import { LoginDesktop } from "./components/desktop/Desktop-Login";
import { DesktopNav } from "./components/desktop/Desktop-Nav.js";

const AppWithRouterAccess = () => {
  const history = useHistory();
  const onAuthRequired = () => {
    history.push("/login");
  };
  const user = useState({
    name: "",
    email: "",
    password: "",
    state: "",
  });

  return (
    <Security
      issuer={config.issuer}
      clientId={config.client_id}
      redirectUri={window.location.origin + "/implicit/callback"}
      onAuthRequired={onAuthRequired}
      pkce={true}
    >
      <UserContext.Provider value={{ user }}>
        <MediaQuery maxDeviceWidth={1025}>
          <Navigation />
        </MediaQuery>
        <LogoHeader />

        <Route path="/register">
          <DesktopRegister />
        </Route>
      </UserContext.Provider>
      <Route path="/" exact={true} >
        <MediaQuery minDeviceWidth={1025}>
          <DesktopNav />
          <DesktopView />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1025}>
          <LandingPage />
        </MediaQuery>
      </Route>
      <SecureRoute path="/protected" component={DesktopView} />
      <Route
        path="/login"
        render={() => (
          <LoginDesktop issuer="https://dev-208626.okta.com/oauth2/default" />
        )}
      />
      <Route path="/implicit/callback" component={DesktopView} />
    </Security>
  );
};
export default AppWithRouterAccess;

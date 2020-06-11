import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
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
import Dashboard from "./components/mobile/Dashboard.js";

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
    <Security baseUrl={config.baseUrl} 
    issuer={config.issuer}
    clientId={config.clientId}
    redirectUri= {config.redirectUri}
    storage={localStorage}
    pkce={true} onAuthRequired={onAuthRequired}>
      <UserContext.Provider value={{ user }}>
        <MediaQuery maxDeviceWidth={1025}>
          <Navigation />
        </MediaQuery>
        <LogoHeader />
        <Route exact path='/'>
          <MediaQuery minDeviceWidth={1025}>
            <DesktopNav />
            <DesktopView />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1025}>
            <LandingPage />
          </MediaQuery>
        </Route>
        <Route path='/login' 
        render={ () => (<LoginDesktop baseUrl='https://dev-208626.okta.com'/>)}/>
          
        
        <Route path='/register'>
          <DesktopRegister />
        </Route>
        <SecureRoute path='/profile' component={Dashboard} />
       <Route path='/implicit/callback' component={LoginCallback}/>   
        
      </UserContext.Provider>
    </Security>
  );
};
export default AppWithRouterAccess;

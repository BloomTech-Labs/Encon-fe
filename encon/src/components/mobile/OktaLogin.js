import React from "react";
import { useOktaAuth } from "@okta/okta-react";
import Login from "./Login.js";
import { Redirect, useHistory } from "react-router-dom";





const OktaLogin = ({ baseUrl }) => {
  const { authService, authState } = useOktaAuth();
 
  baseUrl = 'https://dev-208626.okta.com';

  const onSuccess = async (res) => {
    authService.login("/profile");
    authService.redirect({
      sessionToken: res.session.token,
    });
  };

 



  return authState.isAuthenticated ? (
    <Redirect to="/profile" />
  ) : (
    <div>
        <Login
        baseUrl='https://dev-208626.okta.com' onSuccess={onSuccess}/>
        
          
      
      </div>
);
}

  

export default OktaLogin;
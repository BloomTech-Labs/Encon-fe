import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/mobile/Login.scss";
import axios from "axios";
import OktaAuth from '@okta/okta-auth-js';
import { useOktaAuth } from '@okta/okta-react';
import config from '../../App.Config.js';

export const Login = ({issuer}) => {
  const { authService } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const oktaAuth = new OktaAuth({ issuer: config.issuer });
    oktaAuth.signIn({ username, password })
    .then(res => {
      console.log( 'res',res)
      const sessionToken = res.sessionToken;
      setSessionToken(sessionToken);
      // sessionToken is a one-use token, so make sure this is only called once
      authService.redirect({ sessionToken });
    })
    .catch(err => console.log('Found an error', err));
  };     
  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }



  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">
          Email
        </label>

        <input
          id="email"
          type="text"
          className="email"
          name="email"
          value={username}
          onChange={handleEmailChange}
        />
        {/* {errors.email && errors.email.message} */}
        <br />
        <label htmlFor="password" className="label">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button className="app-buttons" type="submit" data-testid="sign in">
          Sign In
        </button>
      </form>
    </div>
  );
};
